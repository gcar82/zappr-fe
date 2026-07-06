const { app, BrowserWindow, protocol, shell, net } = require("electron");
const { pathToFileURL } = require("node:url");
const path = require("node:path");
const fs = require("node:fs");

const APP_SCHEME = "app";
const APP_HOST = "zappr";

const DEBUG = process.env.ZAPPR_DEBUG === "1" || !app.isPackaged;

const distDir = app.isPackaged
    ? path.join(process.resourcesPath, "app.dist")
    : path.resolve(__dirname, "..", "dist");

protocol.registerSchemesAsPrivileged([
    {
        scheme: APP_SCHEME,
        privileges: {
            standard: true,
            secure: true,
            supportFetchAPI: true,
            stream: true,
            corsEnabled: true
        }
    }
]);

const resolveDistPath = (urlPath) => {
    let rel = decodeURIComponent((urlPath || "/").split("?")[0].split("#")[0]);
    if (!rel || rel === "/") rel = "/index.html";
    // `--bundleChannels` clona in dist/channels, ma il config.json usa /zappr_channels
    if (rel.startsWith("/zappr_channels/")) {
        rel = "/channels/" + rel.slice("/zappr_channels/".length);
    } else if (rel === "/zappr_channels") {
        rel = "/channels";
    }
    const full = path.normalize(path.join(distDir, rel));
    if (full !== distDir && !full.startsWith(distDir + path.sep)) return null;
    return full;
};

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 800,
        minHeight: 500,
        backgroundColor: "#242424",
        autoHideMenuBar: !DEBUG,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
        }
    });

    win.webContents.setWindowOpenHandler(({ url }) => {
        if (/^https?:\/\//i.test(url)) shell.openExternal(url);
        return { action: "deny" };
    });

    win.webContents.on("will-navigate", (event, url) => {
        const target = new URL(url);
        if (target.protocol !== `${APP_SCHEME}:` || target.hostname !== APP_HOST) {
            event.preventDefault();
            if (/^https?:$/i.test(target.protocol)) shell.openExternal(url);
        }
    });

    // Diagnostica: inoltra tutti gli eventi utili alla console del processo main
    win.webContents.on("console-message", (_e, level, message, line, sourceId) => {
        const tag = ["V", "I", "W", "E"][level] ?? "?";
        console.log(`[renderer:${tag}] ${message} (${sourceId}:${line})`);
    });
    win.webContents.on("did-fail-load", (_e, code, desc, url) => {
        console.error(`[did-fail-load] ${code} ${desc} → ${url}`);
    });
    win.webContents.on("preload-error", (_e, preloadPath, error) => {
        console.error(`[preload-error] ${preloadPath}: ${error.stack || error}`);
    });
    win.webContents.on("render-process-gone", (_e, details) => {
        console.error(`[render-process-gone]`, details);
    });
    win.webContents.on("did-fail-provisional-load", (_e, code, desc, url) => {
        console.error(`[did-fail-provisional-load] ${code} ${desc} → ${url}`);
    });

    if (DEBUG) win.webContents.openDevTools({ mode: "detach" });

    win.loadURL(`${APP_SCHEME}://${APP_HOST}/index.html`);
};

app.whenReady().then(() => {
    protocol.handle(APP_SCHEME, async (request) => {
        try {
            const url = new URL(request.url);
            if (url.hostname !== APP_HOST) {
                return new Response("Forbidden", { status: 403 });
            }
            const filePath = resolveDistPath(url.pathname);
            if (!filePath) return new Response("Forbidden", { status: 403 });

            let target = filePath;
            try {
                const stat = await fs.promises.stat(target);
                if (stat.isDirectory()) target = path.join(target, "index.html");
            } catch {
                if (DEBUG) console.warn(`[protocol] 404 ${url.pathname} → ${filePath}`);
                return new Response("Not Found", { status: 404 });
            }
            return net.fetch(pathToFileURL(target).toString());
        } catch (err) {
            console.error(`[protocol] error for ${request.url}:`, err);
            return new Response("Internal Error", { status: 500 });
        }
    });

    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

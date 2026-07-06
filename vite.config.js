import { dirname, resolve, join, normalize, sep, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { createReadStream, promises as fsp } from "node:fs";
import topLevelAwait from "vite-plugin-top-level-await";

const __dirname = dirname(fileURLToPath(import.meta.url));
const channelsDir = resolve(__dirname, "..", "zappr_channels");

const mimeByExt = {
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".txt": "text/plain; charset=utf-8"
};

// In dev serve la cartella sibling `../zappr_channels` sotto `/zappr_channels/*`,
// così i path relativi del config.json funzionano senza dover puntare alla CDN remota.
const serveSiblingChannels = () => ({
    name: "serve-sibling-zappr-channels",
    configureServer(server) {
        server.middlewares.use("/zappr_channels", async (req, res, next) => {
            try {
                const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
                const target = normalize(join(channelsDir, urlPath));
                if (!target.startsWith(channelsDir + sep) && target !== channelsDir) {
                    res.statusCode = 403;
                    return res.end("Forbidden");
                }
                const stat = await fsp.stat(target).catch(() => null);
                if (!stat || !stat.isFile()) return next();

                res.setHeader("Content-Type", mimeByExt[extname(target).toLowerCase()] ?? "application/octet-stream");
                res.setHeader("Access-Control-Allow-Origin", "*");
                createReadStream(target).pipe(res);
            } catch {
                next();
            }
        });
    }
});

export default {
    build: {
        target: "es2018",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                offlinePWA: resolve(__dirname, "offline-pwa.html"),
                privacy: resolve(__dirname, "privacy.html"),
            },
        }
    },
    server: {
        fs: {
            allow: [__dirname, channelsDir]
        }
    },
    plugins: [
        serveSiblingChannels(),
        topLevelAwait()
    ]
}
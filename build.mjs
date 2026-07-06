import { build } from "vite";
import { join as joinPath, isAbsolute as isAbsolutePath, resolve as resolvePath } from "path";
import { clone as gitClone } from "isomorphic-git";
import http from "isomorphic-git/http/node";
import * as fs from "fs";

const parseArgv = (argv) => {
    const result = {};
    for (let i = 0; i < argv.length; i++) {
        const arg = argv[i];
        if (arg.startsWith('--')) {
            const [name, value] = arg.slice(2).split('=');
            result[name] = value || true;
        };
    };
    return result;
};
const argv = parseArgv(process.argv);

const buildOverrides = argv.target ? { build: { target: argv.target } } : {};
await build(buildOverrides);

if (argv.bundleChannels === true) {
    const dir = joinPath(process.cwd(), "dist", "channels"),
        channelsBundleURL = argv.channelsURL ?? "https://github.com/ZapprTV/channels.git";

    if (channelsBundleURL.endsWith(".git")) {
        await gitClone({
            fs, http, dir, url: channelsBundleURL
        });

        await fs.promises.rm(joinPath(dir, ".git"), { recursive: true, force: true }, err => {
            if (err) throw err;
        });
    } else {
        const source = isAbsolutePath(channelsBundleURL)
            ? channelsBundleURL
            : resolvePath(process.cwd(), channelsBundleURL);
        await fs.promises.rm(dir, { recursive: true, force: true });
        await fs.promises.cp(source, dir, { recursive: true });
    };

    console.log("download dei channels terminato");
};
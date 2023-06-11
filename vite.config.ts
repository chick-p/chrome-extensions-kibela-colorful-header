import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  description:  "This is an example extension",
  name: "example",
  version: "0.1.0",
  icons: {
    16: "icons/icon16.png",
    32: "icons/icon32.png",
    128: "icons/icon128.png",
  },
});

export default defineConfig({
  plugins: [crx({ manifest })],
});

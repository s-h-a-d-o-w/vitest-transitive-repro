import { defineConfig } from "vitest/config";
import { execSync } from "node:child_process";

const nivoCorePath = execSync('pnpm why --parseable @nivo/core', { encoding: 'utf-8' }).split('\n')[1]

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    alias: {
      "@nivo/treemap": "@nivo/treemap/dist/nivo-treemap.es.js",
      "@nivo/core": nivoCorePath + "/dist/nivo-core.es.js",
    }
  },
});

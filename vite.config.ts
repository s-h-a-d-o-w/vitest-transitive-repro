import { defineConfig } from "vitest/config";

// const dependencies = ["@nivo/treemap"];
// const dependencies = ["@nivo/core"];
// const dependencies = ["@nivo/treemap", "@nivo/core"];
const dependencies = ["@nivo/core", "@nivo/treemap"];

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    server: {
      deps: { inline: dependencies },
    },
  },
});

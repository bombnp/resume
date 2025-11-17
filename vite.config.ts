import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fullVersionLink, ogImageUrl } from "./src/data";

const headers = [
  `<title>Nut Pinyo's Resume</title>`,
  `<meta name="title" content="Nut Pinyo's Resume" />`,
  `<meta name="description" content="Work Experiences of Nut Pinyo, and some interesting facts." />`,
  `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
  `<meta property="og:url" content=${fullVersionLink} />`,
  `<meta property="og:type" content="website" />`,
  `<meta property="og:title" content="Nut Pinyo's Resume" />`,
  `<meta property="og:description" content="Work Experiences of Nut Pinyo, and some interesting facts." />`,
  `<meta property="og:image" content=${ogImageUrl} />`,
  `<meta name="twitter:title" content="Nut Pinyo's Resume" />`,
  `<meta name="twitter:card" content="summary_large_image" />`,
  `<meta name="twitter:image" content=${ogImageUrl} />`,
];

const htmlPlugin = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(
        /<!-- This comment will be replaced with htmlPlugin in vite.config.js -->/,
        headers.join("\n")
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), htmlPlugin()],
});

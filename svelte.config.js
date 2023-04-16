import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    outDir: "dist",
    adapter: adapter(),
  },
};

export default config;

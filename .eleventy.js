import fs from "fs";
import { I18nPlugin } from "@11ty/eleventy";
import path from 'path';

import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const translations = JSON.parse(fs.readFileSync("./src/_data/i18n.json"));
 
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "it",
    translations: "src/_data/i18n" // cartella con it.json, en.json
  });

  eleventyConfig.addFilter("t", function(key, locale = "it") {
    const keys = key.split(".");
    let value = translations[locale];
    for (let k of keys) {
      value = value?.[k];
    }
    return value || key;
  });

  eleventyConfig.addPassthroughCopy("src/assets/images");

  //compile tailwind before eleventy processes the files
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/assets/styles/styles.css');

    const tailwindOutputPath = './dist/assets/styles/styles.css';

    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');

    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  const processor = postcss([
    //compile tailwind
    tailwindcss(),

    //minify tailwind css
    cssnano({
      preset: 'default',
    }),
  ]);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    passthroughFileCopy: true
  };
}

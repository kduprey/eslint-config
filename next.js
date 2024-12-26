// @ts-check

import baseConfig from "./base.js";
import pluginReact from "eslint-plugin-react";
// @ts-ignore
import pluginNext from "@next/eslint-plugin-next";
import globals from "globals";

/* *
 * This is a custom ESLint configuration for use a library
 * that utilizes NextJS.
 *
 *
 * */
export default [
  ...baseConfig,
  {
    ...pluginReact.configs.flat?.recommended,
    languageOptions: {
      ...pluginReact.configs.flat?.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
];

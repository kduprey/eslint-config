// @ts-check

import baseConfig from "./base.js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * */

export default [
  ...baseConfig,
  {
    languageOptions: {
      ...pluginReact.configs.flat?.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
];

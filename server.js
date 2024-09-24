// @ts-check
/** @type {import("eslint").Linter.Config} */

// @ts-ignore
const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use server side
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
    ].map((config) => require.resolve(config)),
    "turbo",
    "./library.js",
  ],
  globals: {
    JSX: false,
    React: false,
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ["**/__tests__/**/*"],
    },
  ],
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};

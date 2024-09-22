// @ts-check
/** @type {import("eslint").Linter.Config} */

import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use server side
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */
export default {
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
    ].map((config) => require.resolve(config)),
    "turbo",
  ],
  parserOptions: {
    project,
  },
  env: {
    node: true,
    es6: true,
  },
  plugins: ["prefer-arrow-functions"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "sort-keys": [2, "asc", { caseSensitive: true }],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        warnOnUnassignedImports: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|assert)$/]",
        message: "Unexpected property on console object was called",
      },
      {
        selector: "FunctionExpression",
        message:
          "FunctionExpression: Function syntax is illegal. Only arrow functions are allowed",
      },
      {
        selector: "FunctionDeclaration",
        message:
          "FunctionDeclaration: Function syntax is illegal. Only arrow functions are allowed",
      },
    ],
    "prefer-arrow-functions/prefer-arrow-functions": "error",
    "unicorn/filename-case": [
      "error",
      {
        cases: { camelCase: true, pascalCase: true },
      },
    ],
  },
};

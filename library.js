// @ts-check
/** @type {import("eslint").Linter.Config} */

import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");
export default {
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
    ].map((config) => require.resolve(config)),
    "turbo",
  ],
  plugins: ["prefer-arrow-functions"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "sort-keys": [2, "asc", { caseSensitive: true }],
    "import/no-default-export": "off",
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
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|assert)$/]",
        message: "Unexpected property on console object was called",
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

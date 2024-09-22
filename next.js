// @ts-check
/** @type {import("eslint").Linter.Config} */

import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes NextJS.
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
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/react",
      "@vercel/style-guide/eslint/next",
    ].map((config) => require.resolve(config)),
    "turbo",
  ],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  plugins: ["prefer-arrow-functions"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
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
    "unicorn/filename-case": [
      "error",
      {
        cases: { camelCase: true, pascalCase: true },
        ignore: ["(not-found|global-error).(js|jsx|ts|tsx)"],
      },
    ],
    "prefer-arrow-functions/prefer-arrow-functions": "error",
    "react/no-unstable-nested-components": [
      "error",
      {
        allowAsProps: true,
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        "(default|error|instrumentation|layout|loading|middleware|page|route|template|not-found|global-error).(js|jsx|ts|tsx)",
        "!api/**/*.(js|jsx|ts|tsx)",
      ],
      rules: {
        "import/no-default-export": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "react/no-unstable-nested-components": "off",
      },
    },
  ],
};

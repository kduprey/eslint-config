// @ts-check
/** @type {import("eslint").Linter.Config} */

// @ts-ignore
const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");
module.exports = {
  env: {
    node: true,
  },
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
      "@vercel/style-guide/eslint/react",
    ].map((config) => require.resolve(config)),
    "turbo",
    "plugin:perfectionist/recommended-alphabetical-legacy",
  ],
  globals: {
    JSX: true,
    React: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
  overrides: [
    {
      files: [
        "(default|error|instrumentation|layout|loading|middleware|page|route|template|not-found|global-error).(js|jsx|ts|tsx)",
        "!api/**/*.(js|jsx|ts|tsx)",
      ],
      rules: {
        "import/no-named-as-default-member": "off",
        "react/no-unstable-nested-components": "off",
      },
    },
  ],
  plugins: ["prefer-arrow-functions"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/sort-type-constituents": "off",
    "import/no-default-export": "off",
    "import/order": "off",
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        message: "Unexpected property on console object was called",
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|assert)$/]",
      },
    ],
    "prefer-arrow-functions/prefer-arrow-functions": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-sort-props": "off",
    "react/no-unstable-nested-components": [
      "error",
      {
        allowAsProps: true,
      },
    ],
    "sort-imports": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: { camelCase: true, pascalCase: true },
        ignore: ["(not-found|global-error|next-env).(js|jsx|ts|tsx)"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};

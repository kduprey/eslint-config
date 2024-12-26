// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";
import tailwind from "eslint-plugin-tailwindcss";
import turbo from "eslint-plugin-turbo";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * A shared ESLint configuration for the repository.
 *
 * */

export default tseslint.config(
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  perfectionist.configs["recommended-alphabetical"],
  ...tailwind.configs["flat/recommended"],
  turbo.configs["flat/recommended"],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ["**/dist/"],
    rules: {
      "prefer-arrow-callback": "error",
      "no-console": [
        "error",
        { allow: ["warn", "error", "debug", "info", "assert"] },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionExpression",
          message: "Function expressions are not allowed.",
        },
      ],
      // Turn off rules that conflict with Perfectionist
      "sort-imports": "off",
      "sort-keys": "off",
      "@typescript-eslint/adjacent-overload-signatures": "off",
    },
  },
);

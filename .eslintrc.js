/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

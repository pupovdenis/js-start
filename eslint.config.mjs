import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-console": "warn",
      "semi": ["error", "always"],
    }
  },
  {
    //для тестов
    files: ["src/**/*.test.js"],
    ...jest.configs["flat/recommended"],
  }
]);

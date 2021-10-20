module.exports = {
  env: {
    browser: true,
    // START: The environment options, which are NOT mandatory!
    es2021: true,
    // END
    amd: true,
    node: true,
  },
  extends: [
    // START: The code style rules, which are NOT mandatory!
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // END
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    // START: The plugins, which are NOT mandatory!
    // "react",
    // END
    "@typescript-eslint",
  ],
  rules: {
    // START: The code style rules, which are NOT mandatory!
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": 0,
    "react/require-default-props": 0,
    // END

    "@typescript-eslint/no-explicit-any": 1,
  },
};

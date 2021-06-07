module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    // "airbnb",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    // "import/no-extraneous-dependencies": "off",
    // "import/no-dynamic-require": "off",
    // "global-require": "off",
    // "import/extensions": "off",
    // "react/prop-types": "off",
    // "react/jsx-uses-react": "off",
    // "react/react-in-jsx-scope": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // suppress errors for missing 'import React' in files
   "react/react-in-jsx-scope": "off",
   "import/prefer-default-export": "off",
   "react/prop-types": "off"
  },
};

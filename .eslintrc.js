export default {
  env: {
    node: true, // Enable Node.js global variables
    browser: false, // Disable browser globals if not needed
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};

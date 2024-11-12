import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'], // Specify the file patterns directly here
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Set these specific rules to warning level
      'no-unused-vars': 'warn', // Warn for unused variables
      '@typescript-eslint/no-explicit-any': 'warn', // Warn for usage of `any` type
    },
  },
];

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'require-await': 'warn',
    'consistent-return': 'error',
    'max-depth': ['warn', 3],
    'max-lines-per-function': [
      'warn',
      { max: 30, skipBlankLines: true, skipComments: true },
    ],
    complexity: ['warn', { max: 20 }],
  },
};

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    "@typescript-eslint"
  ],
  parser:  '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json'
  },
  rules: {
    'prettier/prettier': [
      'error', {
        singleQuote: true,
        trailingComma: 'es5',
      }
    ],
    "@typescript-eslint/no-namespace": 'off',
  },
}

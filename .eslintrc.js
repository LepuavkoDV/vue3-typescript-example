module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    'arrow-body-style': 2,
    'no-confusing-arrow': 2,
    'max-len': ['error', {
      code: 140, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true,
    }],
    'no-param-reassign': ['error', { props: false }],
    'vue/no-v-html': 0,
    'vue/no-use-v-if-with-v-for': 0,
    camelcase: ['error', { ignoreImports: true }],
    'no-unsafe-optional-chaining': 0,
    'vue/multi-word-component-names': 0,
    'no-underscore-dangle': 0,
    'no-return-assign': 0,
    'import/no-unresolved': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'import/extensions': 0,
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    indent: ['error', 2],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'vuejs-accessibility/click-events-have-key-events': 0,
    'vuejs-accessibility/mouse-events-have-key-events': 0,
    'vuejs-accessibility/label-has-for': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};

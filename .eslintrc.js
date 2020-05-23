module.exports = {
  // UPDATE: added *parser
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  //  UPDATE: addded plugin in extends[]
  extends: ['airbnb-base', 'plugin:react/recommended'],

  //   UPDATE: added *ParserOptions obj and *plugin[]
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],

    //   UPDATED: added linebreak-style,etc
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['clear', 'info', 'error', 'dir', 'trace'] }]
  }
};

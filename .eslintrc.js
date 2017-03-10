module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "semi": [1, "always"],
    "quotes": [2, "single"],
    // 'arrow-parens': 1,
    // // allow async-await
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0

    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 1,
    'no-multiple-empty-lines': 0,
    'padded-blocks': 0,
    // "space-before-function-paren": ["error", "never"]
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

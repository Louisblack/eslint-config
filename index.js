module.exports = {
  extends: "eslint:recommended",
  rules: {
    'linebreak-style': [ 'error', 'unix' ],
    'comma-dangle': [ 'error', 'never' ],
    eqeqeq: 'error',
    'require-yield': 'off',
    'array-bracket-newline': [ 'error', { multiline: true } ],
    'block-spacing': 'error',
    'brace-style': 'error',
    camelcase: ['error', { properties: 'never' }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'id-blacklist': ['error', 'data', 'err', 'e', 'cb', 'callback'],
    indent: ['error', 2],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': ['error', { position: 'above' }],
    'linebreak-style': 'error',
    'max-depth': ['error', 3],
    'max-len': ['error', { code: 80 }],
    'max-lines': 'error',
    'max-nested-callbacks': ['error', 3],
    'max-statements-per-line': 'error',
    'multiline-ternary': ['error', 'never'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'none'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'cjs-export' },
      { blankLine: 'always', prev: 'cjs-import', next: '*' },
      { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' }
    ],
    'quote-props': ['error', 'as-needed'],
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    semi: [ 'error', 'always' ],
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', 'after'],
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
    'global-require': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['error', { grouping: true , allowCall: true }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-sync': 'error',
    'init-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    complexity: ['error', 10],
    'consistent-return': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
      ignoreArrayIndexes: true,
      enforceConst: true,
      ignore: [-1, 0, 1]
    }],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'require-await': 'error',
    'wrap-iife': 'error',
    yoda: 'error',
    'getter-return': 'error',
    'no-await-in-loop': 'error'
  }
};

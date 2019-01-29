module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  globals: {
    afterAll: true,
    afterEach: true,
    beforeAll: true,
    beforeEach: true,
    com: true,
    describe: true,
    document: true,
    expect: true,
    FileReader: true,
    it: true,
    jest: true,
    page: true,
    test: true,
    window: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'babel',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/member-delimiter-style': [1, { 'multiline': { 'delimiter': 'none' } }],
    'array-bracket-spacing': 1,
    'comma-dangle': ['error', 'only-multiline'],
    'prettier/prettier': 'warn',
    'semi': [2, 'never'],
    'variable-name': [true, 'ban-keywords', 'check-format', 'allow-pascal-case']

  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {}
    }
  }
}

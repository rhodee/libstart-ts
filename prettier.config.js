module.exports = {
  bracketSpacing: true,
  overrides: [
    {
      files: "*.test.ts",
      options: {
        semi: false
      }
    }
  ],
  parser: 'typescript',
  printWidth: 80,
  proseWrap: 'preserve',
  semi: false,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'es5',
  useTabs: false,
}

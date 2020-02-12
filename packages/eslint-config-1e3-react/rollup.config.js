import pkg from './package.json'

const config = {
  input: 'src/index.js',
  output: { file: pkg.main, format: 'cjs' },
}

export default config

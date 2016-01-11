import babel from 'rollup-plugin-babel'

export default {
  entry: 'index.js',
  dest: 'dist/commonjs.js',
  format: 'cjs',
  external: ['riot', 'riot-route'],
  plugins: [
    babel()
  ]
}

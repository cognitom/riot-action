import riot from 'rollup-plugin-riot'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  plugins: [
    riot(),
    resolve({ jsnext: true, main: true, browser: true }),
    commonjs(),
    babel()
  ]
}

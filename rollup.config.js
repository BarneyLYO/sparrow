import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/sparrow.js',
      format: 'cjs',
    },
    {
      file: 'esm/sparrow.js',
      format: 'es',
    },
    {
      file: 'dist/sparrow.min.js',
      format: 'umd', // dual mode
    },
  ],
  plugins: [resolve(), babel()],
}

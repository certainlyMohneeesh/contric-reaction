import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/contric-reaction.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/contric-reaction.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/contric-reaction.umd.js',
      format: 'umd',
      name: 'ContricReaction',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
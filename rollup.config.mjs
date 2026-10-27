import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import { readFileSync } from 'fs';

const { version } = JSON.parse(readFileSync('./package.json', 'utf8'));

// src/version.ts holds a placeholder so the module type-checks; the real value comes from
// package.json at build time, which is the only file semantic-release rewrites.
const injectVersion = {
  name: 'inject-version',
  transform(code, id) {
    if (!id.replace(/\\/g, '/').endsWith('src/version.ts')) return null;
    return { code: `export const VERSION = '${version}';`, map: null };
  },
};

const dev = process.env.ROLLUP_WATCH;

export default {
  input: 'src/chartdeck-card.ts',
  output: {
    file: 'dist/chartdeck-card.js',
    format: 'es',
    sourcemap: dev ? true : false,
  },
  plugins: [
    injectVersion,
    nodeResolve(),
    typescript({ tsconfig: './tsconfig.json', noEmit: false, declaration: false, sourceMap: !!dev }),
    dev &&
      serve({
        contentBase: ['./dist'],
        host: '0.0.0.0',
        port: 5000,
        allowCrossOrigin: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
      }),
    !dev && terser({ mangle: { safari10: true } }),
  ],
  watch: { exclude: 'node_modules/**' },
};

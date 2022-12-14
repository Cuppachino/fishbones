import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  clean: !process.argv.includes('--oneshot') || options.clean,
  dts: !process.argv.includes('--oneshot') && !options.watch,
  entryPoints: ['src/main.ts'],
  format: ['esm', 'cjs'],
  minify: false,
  outDir: 'dist',
  sourcemap: 'inline',
  treeshake: true,
  external: ['prettier']
}))

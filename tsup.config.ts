import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { resolve: true, entry: 'src/index.ts' },
  format: ['cjs', 'esm'],
  clean: true,
  outDir: 'dist',
  treeshake: true,
  splitting: false,
  minify: true,
})

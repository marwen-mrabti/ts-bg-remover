import netlify from '@netlify/vite-plugin-tanstack-start';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config = defineConfig({
  server: {
    port: 3000,
  },
  ssr: {
    external: [
      'pg',
      'pg-native',
      'postgres',
    ],
    noExternal: ['drizzle-orm'],
  },

  optimizeDeps: {
    exclude: [
      'pg',
      'pg-native',
      'pg-types',
      'postgres-bytea',
      'postgres',
    ],
  },

  plugins: [
    devtools(),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    netlify(),
  ],
});

export default config;

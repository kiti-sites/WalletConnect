import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // Configura a pasta raiz
  server: {
    port: 3000, // Altere a porta, se necessário
  },
  build: {
    outDir: 'dist', // Diretório de saída
  },
})


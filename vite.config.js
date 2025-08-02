import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    base: '/fashionee-react/',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    plugins: [
        react(),
        VitePluginSvgSpritemap('./src/assets/icons/*.svg', {
            svgo: false,

            // Дополнительные настройки вывода
            output: {
                svg: {
                    sizes: false, // не добавлять свои размеры
                },
                svg4everybody: false, // отключаем полифилл
            },
        }),
    ],
});

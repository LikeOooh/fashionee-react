import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

// https://vite.dev/config/
export default defineConfig({
    base: '/fashionee-react/',
    plugins: [
        react(),
        VitePluginSvgSpritemap('./src/icons/*.svg', {
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

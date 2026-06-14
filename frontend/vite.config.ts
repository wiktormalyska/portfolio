import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        Sitemap({
            hostname: 'https://wiktormalyska.dev',
            dynamicRoutes: [
                '/projects',
                '/resume',
                '/contact',
                '/Wiktor_Malyska_PL.pdf',
                '/Wiktor_Malyska_ENG.pdf'
            ]
        })
    ],
    server: {
        port: 3000,
        allowedHosts: ['wiktormalyska.dev'],
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
            }
        }
    }
})

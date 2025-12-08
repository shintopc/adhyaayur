import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                treatments: resolve(__dirname, 'treatments.html'),
                doctors: resolve(__dirname, 'doctors.html'),
                facilities: resolve(__dirname, 'facilities.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                contact: resolve(__dirname, 'contact.html'),
                // Add other pages here as created
            },
        },
    },
    server: {
        port: 3000,
        open: true
    }
});

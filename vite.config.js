import { defineConfig } from 'vite';
// @ts-expect-error: plugin-react has a default export at runtime
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
});

import type { Config } from 'tailwindcss';

// tailwind.config.ts
const config: Config = {
  theme: {
    extend: {
      colors: { primary: '#1D4ED8' },
      spacing: { 72: '18rem' },
      // ✅ add your button tokens manually
      button: {
        variants: {
          primary: {
            label: 'Primary',
            states: {
              base: {
                background: '#3366FF',
                textColor: '#FFFFFF',
                border: null,
              },
              hover: { background: '#1D4ED8' },
              active: { background: '#1E40AF' },
              disabled: {
                background: '#3366FF',
                textColor: '#FFFFFF',
                opacity: 0.5,
              },
              loading: {
                background: '#3366FF',
                textColor: '#FFFFFF',
                opacity: 0.6,
              },
            },
            radius: 6,
            padding: [8, 16],
          },
        },
      },
    },
  },
};


export default config;

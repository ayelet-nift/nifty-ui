// scripts/types/tailwindcss.d.ts
declare module 'tailwindcss/resolve-config' {
    import type { Config } from 'tailwindcss';
    const resolveConfig: (config: Config) => any;
    export default resolveConfig;
  }
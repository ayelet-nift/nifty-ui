import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindConfig from './helpers/resolve-tailwind-config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// no resolveConfig — use tailwindConfig directly
const tokens = {
  colors: tailwindConfig.theme?.extend?.colors,
  spacing: tailwindConfig.theme?.extend?.spacing,
  fontSize: tailwindConfig.theme?.extend?.fontSize,
  borderRadius: tailwindConfig.theme?.extend?.borderRadius,
  fontFamily: tailwindConfig.theme?.extend?.fontFamily,
  button: tailwindConfig.theme?.extend?.button,
};

const outputPath = path.resolve(__dirname, '../tokens/tailwind-tokens.json');
await writeFile(outputPath, JSON.stringify(tokens, null, 2));
console.log('✅ Tailwind tokens exported to', outputPath);

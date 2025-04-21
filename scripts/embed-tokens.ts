import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Paths
const tokensPath = path.resolve(__dirname, '../tokens/tailwind-tokens.json');
const templatePath = path.resolve(__dirname, '../src/plugin/code.template.ts');
const outputPath = path.resolve(__dirname, '../src/plugin/code.ts');

console.log('📦 Reading token JSON...');
const tokenJson = await readFile(tokensPath, 'utf-8');

// Ensure it's written as a valid TS constant
const tokenLiteral = `const designTokens = ${tokenJson.trim()} as const;\nconst buttonTokens = designTokens.button;\n\ntype ButtonTokens = typeof buttonTokens;`;

console.log('🧩 Injecting tokens into code.template.ts...');
const template = await readFile(templatePath, 'utf-8');

// Replace placeholder
const result = template.replace('__INLINE_TOKENS__', tokenLiteral);

console.log('📝 Writing final code.ts file...');
await writeFile(outputPath, result);

console.log('✅ Embedded tokens written to', outputPath);

import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unicornPlugin from 'eslint-plugin-unicorn';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      ['react']: reactPlugin,
      ['import-plugin']: importPlugin,
      ['prettier']: prettierPlugin,
      ['react-hooks']: reactHooksPlugin,
      ['unicorn']: unicornPlugin,
      ['jsx-a11y']: jsxA11yPlugin
    },
    settings: {
      tailwindcss: {
        whitelist: [],
        removeDuplicates: true,
        skipClassAttribute: false,
        tags: ['tw', 'cn', 'clsx'],
        cssFilesRefreshRate: 5_000,
        config: 'tailwind.config.ts',
        classRegex: '^class(Name)?$',
        callees: ['tw', 'cn', 'clsx']
      }
    },
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/out/**',
      '**/logs/**',
      '**/.env*',
      '**/*.generated.js',
      '**/__tests__/**'
    ],
    files: ['**/*.{js,mjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'no-magic-numbers': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  },
  {
    files: ['tailwind.config.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
];

export default eslintConfig;

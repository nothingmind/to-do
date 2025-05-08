import eslint from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      ['prettier']: prettierPlugin,
      ['simple-import-sort']: simpleImportSort,
      ['@next/next']: pluginNext,
      ['react-hooks']: pluginReactHooks,
      ['react']: pluginReact
    },
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/out/**',
      '*.d.ts'
    ],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      ...prettierConfig.rules,
      ...pluginNext.configs.recommended.rules,
      'prettier/prettier': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^next', '^@?\\w'],
            ['@/components'],
            ['@/config'],
            ['@/constants'],
            ['@/helpers'],
            ['@/hooks'],
            ['@/lib'],
            ['@/utils'],
            ['@/services'],
            ['@/styles'],
            ['@/types'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css|scss|sass)$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  }
]);

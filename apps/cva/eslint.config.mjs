import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';
import eslint from '@eslint/js';
import * as tseslint from 'typescript-eslint';
import * as angular from 'angular-eslint';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...tseslint.configs.stylistic[0].rules,
      ...angular.configs.tsRecommended[0].rules,

      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/component-class-suffix': 'error',
      '@angular-eslint/component-max-inline-declarations': 'error',
      '@angular-eslint/no-developer-preview': 'error',
      '@angular-eslint/no-experimental': 'error',
      '@angular-eslint/sort-lifecycle-methods': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@angular-eslint/prefer-signals': 'error',
      '@angular-eslint/use-injectable-provided-in': 'error',
    },
  },
  {
    files: ['**/*.html'],
    ...angular.configs.templateRecommended[0],
    rules: {
      ...angular.configs.templateRecommended[0].rules,
      ...angular.configs.templateAccessibility[0].rules,
    },
  }
];

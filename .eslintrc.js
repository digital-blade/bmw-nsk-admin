
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    globals: {
        JSX: true,
    },
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    plugins: ['babel', 'import', 'prettier', '@typescript-eslint/eslint-plugin', 'sonarjs', 'unused-imports'],
    extends: [
        'eslint:recommended',
        'plugin:sonarjs/recommended',
    ],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'warn',
        'import/no-mutable-exports': 'warn',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/order': [
            'error',
            {
                warnOnUnassignedImports: true,
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: 'react-*',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/prefer-immediate-return': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                'no-empty-pattern': 'off',
            },
        },
        {
            files: ['*.test.*'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
};

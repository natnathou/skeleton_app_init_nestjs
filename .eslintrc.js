module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
        es6: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/ban-ts-ignore': ['off'],
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/interface-name-prefix': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-async-promise-executor': ['off'],
        'no-empty-pattern': ['off'],
        'no-undef': ['error'],
        'no-var': ['error'],
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'always'],
        'spaced-comment': ['off'],
        'no-prototype-builtins': ['off'],
        'sort-keys': ['off'],
        'space-before-function-paren': ['off'],
        indent: ['off'],
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                },
            },
        ]
    },
};

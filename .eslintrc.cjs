module.exports = {
    root: true,
    env: {
        node: true,
        es2020: true,
        browser: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        // Add any specific rules you want for JavaScript files
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            parser: "@typescript-eslint/parser",
            extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
            plugins: ["@typescript-eslint", "react"],
            rules: {
                // Add any TypeScript-specific rules here
            },
        },
        {
            files: ["rollup.config.js"],
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2020,
            },
        },
    ],
    ignorePatterns: ["dist/**/*"],
};

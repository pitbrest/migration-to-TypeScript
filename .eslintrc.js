module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ["@typescript-eslint"],
    extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended"], 
    parser: "@typescript-eslint/parser",   
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        'class-methods-use-this': "off",        
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-empty-interface': 'off'
    },
};





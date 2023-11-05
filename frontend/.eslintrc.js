module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    rules: {
        'vue/no-use-v-if-with-v-for': 'off',
        'no-unused-vars': 'off',
    },
    globals: {
        globalThis: false,
    },
};

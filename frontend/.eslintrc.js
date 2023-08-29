module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    parserOptions: {
        ecmaVersion: 12,
        parser: 'babel-eslint',
    },
    rules: {
        'vue/no-use-v-if-with-v-for': 'off',
    },
};

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
    },
    "globals": {
        "swiper": false
    }
};

module.exports = {
    root: true,
    env: {
        "browser": true,
        "commonjs": true,
        "node": true
    },
    extends: [
    	"eslint:recommended", "plugin:vue/essential" // extends 안에 해당 해용추가
    ], 
    parserOptions: {
        "ecmaVersion": 12
    },
    parserOptions: { // parserOptions 추가
        parser: "babel-eslint"
    },
    rules: {
        "vue/no-use-v-if-with-v-for": "off"
    }
};
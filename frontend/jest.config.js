module.exports = {
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
    },
    setupFiles: ['<rootDir>/tests/SignupComp.spec.js'], 
  };
  
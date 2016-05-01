module.exports = {
  distDir: 'dist',
  sassDir: 'src/css',
  buildDir: 'build',
  buildLib: 'build/lib',
  devMode: false,
  jest: {
    config: {
      rootDir: '.',
      scriptPreprocessor: '<rootDir>/node_modules/babel-jest',
      testPathDirs: [
        '<rootDir>/src/jsx'
      ],
      unmockedModulePathPatterns: [
        '<rootDir>/node_modules/react',
        '<rootDir>/node_modules/react-dom',
        '<rootDir>/node_modules/react-addons-test-utils',
        '<rootDir>/node_modules/jquery'
      ]
    }
  }
};

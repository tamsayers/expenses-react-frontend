const buildDir = 'build',
      buildLib = 'build/lib',
      distDir = 'dist';

module.exports = {
  devMode: false,
  buildDir: buildDir,
  distDir: distDir,
  sass: {
    dir: 'src/css',
    config: {
      includePaths: [ this.dir, 'bower_components']
    },
    outputFileName: 'main.css'
  },
  babel: {
    src: ['src/jsx/**/*.js', '!**/__tests__/**'],
    outputDir: buildLib
  },
  browserify: {
    entryFile: `${buildLib}/app.js`,
    outputFileName: 'bundle.js',
  }
};

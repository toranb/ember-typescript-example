module.exports = {
  tests: {
    type: 'amd',
    moduleName: function(path) {
        return 'app/tests/' + path;
    },
    files: [{
      expand: true,
      cwd: 'js/tests/',
      src: '**/*.js',
      dest: 'js/dist/transpiled/tests/'
    }]
  },
  app: {
    type: 'amd',
    moduleName: function(path) {
      return path;
    },
    files: [{
      expand: true,
      cwd: 'js/app/',
      src: '**/*.js',
      dest: 'js/dist/transpiled/app/'
    }]
  }
}

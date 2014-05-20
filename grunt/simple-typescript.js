module.exports = {
  tests: {
    moduleGenTarget: 'NamedAsynchronous',
    moduleName: function(path) {
        return 'app/tests/' + path;
    },
    files: [{
      expand: true,
      cwd: 'js/tests/',
      src: '**/*.ts',
      dest: 'js/dist/transpiled/tests/',
      ext: '.js'
    }]
  },
  app: {
    moduleGenTarget: 'NamedAsynchronous',
    moduleName: function(path) {
      return 'app/' + path;
    },
    files: [{
      expand: true,
      cwd: 'js/app/',
      src: '**/*.ts',
      dest: 'js/dist/transpiled/app/',
      ext: '.js'
    }]
  }
}

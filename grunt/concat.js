module.exports = {
  dist: {
      src: [
        'js/vendor/jquery/jquery.min.js',
        'js/vendor/handlebars/handlebars.js',
        'js/vendor/ember/ember.js',
        'js/dist/tmpl.min.js',
        'vendor/almond.js',
        'vendor/ember-resolver.js',
        'js/dist/transpiled/app/**/*.js'],
      dest: 'js/dist/deps.min.js'
  },
  test: {
      src: [
        'js/vendor/jquery/jquery.min.js',
        'js/vendor/handlebars/handlebars.js',
        'js/vendor/ember/ember.js',
        'js/vendor/jquery-mockjax/jquery.mockjax.js',
        'js/dist/tmpl.min.js',
        'vendor/loader.js',
        'vendor/ember-resolver.js',
        'js/dist/transpiled/app/**/*.js',
        'js/dist/transpiled/tests/**/*.js',
        'vendor/test-loader.js'],
      dest: 'js/dist/deps.min.js'
  }
}

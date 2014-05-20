module.exports = function(grunt) {

  require('load-grunt-config')(grunt);

  grunt.task.registerTask('default', ['simple-typescript:app', 'emberhandlebars', 'concat:dist']);
  grunt.task.registerTask('test', ['simple-typescript:app', 'transpile:tests', 'emberhandlebars', 'concat:test', 'testem:main']);
}

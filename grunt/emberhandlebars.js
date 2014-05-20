module.exports = {
    compile: {
        options: {
            templateName: function(sourceFile) {
                var newSource = sourceFile.replace('js/templates/', '');
                return newSource.replace('.handlebars', '');
            }
        },
        files: ['js/templates/*.handlebars'],
        dest: 'js/dist/tmpl.min.js'
    }
}

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          mainConfigFile: "main.js",
          name: "main", // assumes a production build using almond
          out: "build/guess-film.min.js"
        }
      }
    }
  });



  // !! This loads the plugin into grunt
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);



};
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/dist/',
        src: 'jquery.min.js',
        dest: 'js/',
        flatten: true,
      },
    },
    less: {
      development: {
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },
    watch: {
      files: ['less/**/*.less'],
      tasks: ['less'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    [ 'copy', 'less' ]
  );


  grunt.registerTask('default', ['watch']);

};
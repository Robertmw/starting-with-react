module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ['babelify', {
                     loose: 'all'
                  }]
               ]
            },
            files: {
               './client/build/app.js': ['./client/src/app.js']
            }
         }
      },
      less: {
         build: {
            files: {
               './client/build/css/style.css': './client/src/css/style.less'
            }
         }
      },
      cssmin: {
         build: {
            files: {
               './client/build/css/style.min.css': './client/build/css/style.css'
            }
         }
      },
      watch: {
         css: {
            files: ['./client/src/**/*.less'],
            tasks: ['less', 'cssmin']
         },
         scripts: {
            files: ['./client/src/**/*.js'],
            tasks: ['browserify']
         }
      }
   });

   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['browserify', 'less', 'cssmin', 'watch']);
};
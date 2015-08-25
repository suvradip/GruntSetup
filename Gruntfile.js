
// module.exports = function(grunt) {
//        'use strict';
//        // Project configuration.
//        grunt.initConfig({
//                jasmine : {
//                        src : 'src/loveEncryption.js',
//                        options : {
//                                specs : 'specs/loveEncryptionSpec.js'
//                        }
//                }
//        });
//        grunt.loadNpmTasks('grunt-contrib-jasmine');
// };


module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        jshint : {
           src : 'all_js_files_here/*.js'
        },
        
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('lint', ['jshint:src']);
 
};

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
        jasmine : {
            src : 'all_js_files_here/*.js',
            options : {
                specs : 'jasmine_test_cases_here/loveEncryptionSpec.js'
            }
        },
        jshint : {
           src : 'all_js_files_here/*.js'
        },
        watch: {
            files: 'src/*.js',
            tasks: ['jasmine', 'jshint']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
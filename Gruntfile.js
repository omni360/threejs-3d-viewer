module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        ts: {
            app: {
                src: ['app/app/app.ts'],
                out: 'build/scripts/script.js',
                reference: "app/app/_references.ts"
            }
        },
        less: {
            app: {
                files: {
                    "build/styles/style.css": "app/styles/style.less"
                }
            }
        },
        copy: {
            app: {
                files: [
                    {
                        cwd: 'app',
                        expand: true,
                        src: ['**/*.html', 'assets/**/*', 'scripts/**/*'],
                        dest: 'build/'
                    }
                ]
            },
            bower: {
                files: [
                    {}
                ]
            }
        },
        open: {
            app: {
                path: 'http://localhost:8080'
            }
        },
        connect: {
            app: {
                options: {
                    port: 8080,
                    base: 'build',
                    livereload: true
                }
            }
        },
        watch: {
            app: {
                files: 'app/**/*',
                tasks: ['ts', 'less', 'copy'],
                options: {
                    livereload: true
                }
            }
        }
    });

	grunt.registerTask('build', ['ts', 'less', 'copy']);
    grunt.registerTask('default', ['ts', 'less', 'copy', 'open', 'connect', 'watch']);
}
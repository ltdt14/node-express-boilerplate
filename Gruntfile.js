'use strict';

module.exports = function(grunt) {
    //load plugins
    [
        'grunt-contrib-watch',
        'grunt-markdown-toc',
        'grunt-eslint'
    ].forEach(function(task) {
        grunt.loadNpmTasks(task);
    });

    //configure plugins
    grunt.initConfig({
        markdown_toc: {
            src: ['./**.md', './docs/**.md']
        },
        watch: {
            toc: {
                files: ["**/*"],
                tasks: ["toc"],
                options: {
                    livereload: true
                }
            }
        },
        eslint: {
            target: ['lib/**/*.js', 'index.js']
        }
    });
};
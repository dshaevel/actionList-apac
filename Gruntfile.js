/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					quiet: false,
					clearRequireCache: false
				},
				src: ['test/**/*-spec.js']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-mocha-test');

	// Default task.
	grunt.registerTask('default', ['mochaTest']);

};
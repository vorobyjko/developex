module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				src: ["js/scripts.js", "js/main.js"],
				dest: "js/scripts.min.js"
			}
		},

		less: {
			development: {
				options: {
					/*compress: true,
					yuicompress: true,
					optimization: 2*/
				},
				files: {
					"css/styles.css" : "less/main.less"
				}
			}
		},



		cssmin: {
			with_banner: {
				
				options: {
					banner: "/* Minified CSS */"
				},

				
				files : {
					'css/styles.min.css': ['css/styles.css']
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},

			scripts: {
				files : ["js/*.js"] ,
				tasks : ["uglify"]
			},

			css: {
				files : ["css/*.css"] ,
				tasks : ["cssmin"]	
			},

			styles : {
				files : ['less/**/*.less'],
				tasks : ["less"],
				options: {
					nospawn : true
				}
			}
		},

		express: {
			all : {
				options: {
					port: 9000,
					hostname: "localhost",
					bases: ["."],
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-less")
	grunt.loadNpmTasks("grunt-contrib-watch");
	//grunt.loadNpmTasks("grunt-express");
	

	grunt.registerTask("default", ['uglify', 'less', 'cssmin', 'watch'])
	//grunt.registerTask("server", ['express', 'watch'])
};

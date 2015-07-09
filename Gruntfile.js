module.exports = function(grunt) {

	grunt.initConfig({

		// Estabelecendo conexão via localhost
		connect : {
			server : {
				options : {
					port : 2208,
					open : {
						target : 'http://localhost:2208'
					}
				}
			}
		},

		// Pré-processando CSS com Sass, e usando Autoprefixer
		sass : {
			dist : {
				options : {
					style : 'nested'
				},
				files : {
					'build/css/main.css' : 'src/sass/style.scss'
				}
			}
		},
		autoprefixer : {
			dist : {
				options : {
					browsers : ['last 2 versions', 'ie 8', 'ie 9']
				},
				files : {
					'build/css/main.css' : 'build/css/main.css'
				}
			}
		},

		//Minificando JS
		uglify : {
			dist : {
				files : {
					'build/js/main.min.js' : ['src/js/app.js']
				}
			}
		},

		// Minificando imagens em build
		imagemin : {
			dist : {
				options : {
					optimizationLevel : 5,
				},
				files : [{
					expand: true,
					cwd : 'src/',
					src : ['images/*.*'],
					dest : 'build/'
				}]
			}
		}, 

		// Copiando arquivos necessários para produção
		copy : {
			raw : {
				expand: true,
				cwd : 'src/raw-assets/',
				src : '**',
				dest : 'build/'
			}
		}, 

		// Observando Sass, JS, imagens e arquivos alterados em raw-assets
		watch : {
			css : {
				files : 'src/sass/*.scss',
				tasks : ['sass', 'autoprefixer'],
				options : {
					livereload : true
				}
			},
			js : {
				files : 'src/js/*.js',
				tasks : ['uglify'],
				options : {
					livereload : true
				}
			},
			images : {
				files : 'src/images/**/*.*',
				tasks : ['imagemin']
			},
			copy : {
				files : 'src/raw-assets/**/*.*',
				tasks : ['copy:raw']
			}
		} 
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'autoprefixer', 'uglify', 'imagemin', 'copy']);
	grunt.registerTask('update', ['connect', 'watch']);

}
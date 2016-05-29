module.exports = function(grunt){

  require('load-grunt-tasks')(grunt); //加载所有的任务
  //require('time-grunt')(grunt); 如果要使用 time-grunt 插件
  //var mozjpeg = require('imagemin-mozjpeg');
  grunt.initConfig({
    jshint: {
      files: {
        all: ['src/js/*.js']
      },
      options:{
        jshintrc: "./.jshintrc"
      }
    },
    uglify:{
      my_target: {
        options: {
          beautify: false
        },
        files: {
          'dest/js/element.js': ['src/js/element.js'],
          'dest/js/script.js': ['src/js/script.js'],
          'dest/js/jquery.min.js': ['src/js/jquery.min.js']
        }
      }
    },
    sass: {
      options:{
        //noCache:true,
        compass:true,
        style:'expanded',
        sourcemap:"none"
      },
      dist: {
        files: {
          'src/css/style.css':'src/scss/style.scss',
          'src/css/grunt.css':'src/scss/grunt.scss'
        }
      }
    },
    less: {
      development: {
        files: {
          'src/css/styles.css': 'src/less/styles.less'
        }
      }
    },
    cssmin:{
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          "dest/css/style.css": "src/css/style.css",
          'dest/css/grunt.css': 'src/css/grunt.css'
        }
      }
    },
    concat: {
      basic_and_extras: {
        files: {
          //'dist/basic.js': ['src/main.js'],
          'css/main.min.css': ['css/style.min.css', 'css/styles.min.css'],
        }
      }
    },
    imagemin: {                          // Task
      static: {                          // Target
        options: {                       // Target options
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }]
          //use: [mozjpeg()],
        }
        /*files: {                         // Dictionary of files
          'dist/img.png': 'src/img.png', // 'destination': 'source'
          'dist/img.jpg': 'src/img.jpg',
          'dist/img.gif': 'src/img.gif'
        }*/
      },
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'src/img/',                   // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dest/'                  // Destination path prefix
        }]
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35720  //声明给 watch 监听的端口
      },
      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            '.'  //主目录
          ]
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dest/sourse.html': 'src/sourse.html',     // 'destination': 'source'
          'dest/grunt.html': 'src/grunt.html'
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },
        files: [  //下面文件的改变就会实时刷新网页
          './{,*/}*.html',
          "src/scss/{,*/}*.scss",
          'src/css/{,*/}*.css',
          'src/js/{,*/}*.js'
        ],
        tasks:['sass', 'cssmin', 'uglify', 'htmlmin', 'connect']//, 'imagemin' 'jshint', 'less', 'concat' ,
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  //grunt.loadNpmTasks('grunt-contrib-less');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [
    'sass',
    'cssmin',
    'htmlmin',
    'uglify',
    'connect',
    'watch'
    //'less',
    // 'jshint',
    //'concat',
    //'imagemin'
  ]);
}

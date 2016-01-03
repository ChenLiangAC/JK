// 包装函数
module.exports = function(grunt) {

    // 任务配置,所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // uglify插件的配置信息
        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm") %> */\n'
        //     },
        //     dev: {
        //         files: [{
        //             expand: true,
        //             cwd: 'js/',
        //             src: 'index.js',
        //             dest: 'bulid/',
        //             ext: '.min.js'
        //         }]
        //     }
        // }
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['css/*.css'],
                dest: 'css/allindex.css'
            }
        }
    });

    // 告诉grunt我们将使用插件
   // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['concat']);

};

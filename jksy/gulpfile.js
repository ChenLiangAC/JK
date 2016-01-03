////引入插件
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload');

// sass编译，压缩
gulp.task('styles', function() {
    return gulp.src('style/css/index.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 4 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))

    .pipe(rename({
            suffix: '.min'
        }))
        .pipe(rev())
        .pipe(minifycss())
        .pipe(gulp.dest('style'))
        .pipe(notify({
            message: 'Styles task complete'
        }));
});
// js压缩合并
gulp.task('scripts', function() {
    return gulp.src('js/javascript/index.js,js/pic.js')
    .pipe(concat('all.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});
// 图片压缩
gulp.task('images', function() {
    return gulp.src('img/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('img'))
        .pipe(notify({
            message: 'Images task complete'
        }));
});


gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'images');
});
// // Watch
// gulp.task('watch', function() {
//   // Watch .scss files
//   gulp.watch('style/css/*.scss', ['styles']);
//   // Watch .js files
//   gulp.watch('js/javascript/*.js', ['scripts']);
//   // Watch image files
//   gulp.watch('img/*', ['images']);
//   // Create LiveReload server
//   livereload.listen();
//   // Watch any files in assets/, reload on change
//   gulp.watch(['style/*','js/*','img/*']).on('change', livereload.changed);
// });

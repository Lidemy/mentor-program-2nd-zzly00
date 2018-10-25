const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')

gulp.task('css', function () {
    return gulp.src('scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('style'));
});
gulp.task('minifyCss', function () {
    return gulp.src('style/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('js', function () {
    gulp.src('js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['css','minifyCss','js']);
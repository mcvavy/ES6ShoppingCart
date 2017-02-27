const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');
const stylus = require('gulp-stylus');
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require('browser-sync').create();

gulp.task('es6', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('stylus', function () {
    return gulp.src('./stylus/main.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./stylus/main.styl", ['stylus']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./src/**/*.js", ['es6']).on('change', browserSync.reload);
});

gulp.task('default', ['serve'], () => {
    return gulp.src('src/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
})
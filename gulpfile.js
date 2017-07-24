"use strict";

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var minifyCSS = require('gulp-csso');


// Build
gulp.task('default', function () {
    return gulp.src('app/**/*.css')
        .pipe(concatCss('app/**/*.css'))
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
        .pipe(rename('bundle.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/'))
        .pipe(notify('Done!'));
});




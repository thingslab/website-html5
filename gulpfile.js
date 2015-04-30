var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint');

gulp.task('autoprefix', function() {
    gulp.src('assets/css/*.css')
        .pipe(autoprefixer())
        //.pipe(header('/* Copyright (c) Things Lab 2015 */'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('jshint', function() {
    gulp.src('assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
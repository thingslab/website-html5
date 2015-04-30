var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify');

gulp.task('minify-css', function() {
    return gulp.src('assets/css/*.css')
        .pipe(autoprefixer())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('jshint', function() {
    return gulp.src('assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
    return gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', [
    'jshint',
    'minify-css',
    'uglify'
]);
'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require(`gulp-plumber`);

gulp.task('less', gulp.series(function () {
    return gulp.src('assets/css/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('assets/css'));
}));
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/popper.js/dist/popper.min.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('plugins'))
});
gulp.task('watch', gulp.series(function () {
    gulp.watch(['assets/less/*.less'], gulp.parallel(['less']));
}));
gulp.task('default', gulp.series(['less', 'watch']));

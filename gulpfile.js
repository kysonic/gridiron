var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var csso = require('gulp-csso');

gulp.task('dev', ['less'], function() { });
// Less task
gulp.task('less', function () {
    gulp.src('./public/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname,'themes') ]
        }))
        .on('error', console.log)
        .pipe(concat("main.css"))
        .pipe(csso())
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('watch', function() {
    // Watch our scripts
    gulp.watch(['./public/**/*.less'],[
        'less'
    ]);
});

gulp.task('default', ['dev', 'watch']);
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del');

gulp.task('public_styles', function() {
    return gulp.src('dev/scss/styles/tweetdis-public.scss', { style: 'expanded' })
        .pipe(sass({includePaths: ['dev/scss/styles/**']}))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public'))
        .pipe(notify({ message: 'Public styles task complete' }));
});

gulp.task('admin_styles', function() {
    return gulp.src('dev/scss/styles/tweetdis-admin.scss', { style: 'expanded' })
        .pipe(sass({includePaths: ['dev/scss/styles/**']}))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('admin'))
        .pipe(notify({ message: 'Admin styles task complete' }));
});

gulp.task('mce_styles', function() {
    return gulp.src('dev/scss/tweetdis-mce.scss', { style: 'expanded' })
        .pipe(sass({includePaths: ['dev/scss/tweetdis-mce.scss']}))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('admin'))
        .pipe(notify({ message: 'Mce styles task complete' }));
});


gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('dev/scss/styles/**/*.scss', ['public_styles']);
    gulp.watch('dev/scss/styles/**/*.scss', ['admin_styles']);
    gulp.watch('dev/scss/tweetdis-mce.scss', ['mce_styles']);
});

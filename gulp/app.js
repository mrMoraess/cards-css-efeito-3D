const gulp = require('gulp')
const html = require('gulp-htmlmin')
const css = require('gulp-uglifycss')

function appHTML () {
    return gulp.src('./src/*.html')
        .pipe(html({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
}

function appCSS () {
    return gulp.src('./src/css/*.css')
        .pipe(css({ 'uglyComments': true }))
        .pipe(gulp.dest('public/css'))
}

function IMGs () {
    return gulp.src('./src/img/*.png')
        .pipe(gulp.dest('public/img'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('IMGs', IMGs)

module.exports = {
    appHTML, 
    appCSS, 
    IMGs
}
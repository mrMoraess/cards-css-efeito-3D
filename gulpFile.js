const gulp  = require('gulp')
const { parallel, series } = require('gulp')
const { appHTML, appCSS, IMGs } = require('./gulp/app')
const { start } = require('./gulp/server')

module.exports.default = series(
    parallel(
        appHTML,
        appCSS,
        IMGs
    ),
    start
)
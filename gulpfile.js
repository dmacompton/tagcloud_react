var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');

gulp.task('default', function () {
    gulp.watch('source/**/*.js', ['build']);
});

gulp.task('build', build);

function build() {
    var data = {
        source: 'source/index.js',
        outputName: 'bundle.min.js',
        outputPath: './build/'
    };

    var appBundler = browserify({
        entries: data.source,
        debug: false
    });

    return appBundler
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .on('error', gutil.log)
        .pipe(source(data.outputName))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(data.outputPath));
}

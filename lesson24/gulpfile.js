const  { series, src, dest, watch } = require('gulp');
const  concat = require('gulp-concat');
const  inject = require('gulp-inject');
const  sass = require('gulp-sass');


function copyHtml(cb){
    src('./src/index.html')
        .pipe(dest('./dist/'))
        .on('end', function() {
            cb();
        });
}

function concatJs(cb){
    src('./src/scripts/*.js')
        .pipe(concat('vendor.js'))
        .pipe(dest('./dist/'))
        .on('end', function() {
            cb();
        });
   
}

function compileSass(cb){
    src('./src/styles/*.scss')
    .pipe(sass())
    .pipe(dest('./dist/'))
    .on('end', function() {
        cb();
    });
}

function injectLinks(cb){
    src('./dist/index.html')
        .pipe(inject(src(['./dist/*.js', './dist/*.css' ], {read: false} )))
        .pipe(dest('./dist/'))
    cb();
}


function devTask(cb){
    watch('./src/**/*.html', series(copyHtml, injectLinks));
    watch('./src/**/*.scss', compileSass);
    watch('./src/**/*.js', concatJs);
    cb();
}


module.exports.build = series(copyHtml, concatJs, compileSass, injectLinks);

module.exports.dev = devTask;



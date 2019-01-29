//Load GULP
const { gulp, src, task, dest, series, parallel } = require('gulp');
var watch = require('gulp-watch');

// CSS Plugins
var sass = require('gulp-sass');

//Browser Plugins
var browserSync = require('browser-sync').create();

// Project Variables
var styleWatch = './app/scss/**/*.scss';
var htmlWatch = './app/*.html';

//Tasks

gulp.task('default', function() {
    return gulp.src('sass/*.scss')
      .pipe(watch('sass/*.scss'))
      .pipe(sass())
      .pipe(gulp.dest('dist'));
  });
  
// Task 1 : Have browser load
function bs(done) {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
    done();
}

// Task 2 : Have browser reload on change - watch HTML and SCSS files - for dev purposes
function reload(done) {
    browserSync.reload();
    done();
}

// Task  : Files to watch are HTML and CSS   *** Need to convert SCSS to CSS
function watchFiles(done){
    watch(styleWatch, reload);
}

// Task 3 : Minify css and js files

// Task 4 : spit min files to dist folder




// function buildCss(callback) {
//     //execute scripts
//     return src(styleWatch)
//         .pipe(sass())
//         .pipe(dest('app/css'))

//     callback();
// }

// function watchFiles() {
//     watch(styleWatch, series(css, reload));
// }


// Define TASKS
// task("default", series(watchFiles, buildCss)); 
// exports.dev = parallel(bs);
exports.watch = parallel(bs, watchFiles);


var gulp = require('gulp');
var sass = require('gulp-sass');

//  With this task you would need to type gulp 'task-name' everytime you want to compile CSS

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')  // Gets all files ending with .scss in app/scss and children directories
        .pipe(sass())
        .pipe(gulp.dest('app/css'))  //outputs compiled CSS to the css directory
});

// instead you can create a watch task that will run every time the file changes

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});
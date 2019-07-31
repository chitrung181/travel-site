var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify:null,
        server:{
            baseDir: "app"
        }
    });
    //refresh browser when html file is saved
    watch('./app/index.html', function() {
        browserSync.reload();
    });
    //run when CSS is saved
    watch('./app/assets/styles/**/*.css', function() {
        //trigger cssInject task
        gulp.start('cssInject');
    });

});

//update css without refresh browser
//['styles'] only run cssInject after styles has finished
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
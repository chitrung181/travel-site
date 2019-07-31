var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default',  function() {
    console.log("Hooray");
});

gulp.task('html', function() {
    console.log("doing smth");
});

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

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
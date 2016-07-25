/**
 * Created by guanlingjuan on 16/7/15.
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var tinylr = require('tiny-lr'),               //livereload
    server = tinylr(),
    port = 35729;

gulp.task('sass', function () {
    return sass('src/styles/index.scss')
    .on('error', function (err) {
        console.error('Error!', err.message);
    }).pipe(gulp.dest('src/styles'));
}); 
gulp.task("watch", function(){
    server.listen(port, function(){
        gulp.watch('src/styles/index.scss', function(){
            gulp.run('sass');
        });
    });
});
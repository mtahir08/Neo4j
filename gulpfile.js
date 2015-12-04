var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', ['watch'], function(){
    nodemon({
        script: './server.js'
    }).on('restart', function(){
        console.log('nodemon restarted server.js');
    })
});

gulp.task('watch', function() {
    gulp.watch('./util/*.js', ['buildServer']);
});

gulp.task('default', ['nodemon']);
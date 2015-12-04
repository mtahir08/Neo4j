var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('./util')
        .pipe(webserver({
            livereload: true,
            //directoryListing: true,
            directoryListing: {
                enable: true,
                path: './client/index.html'
            },
            open: true,
            port: 3000
        }));
});

gulp.task('default', ['webserver']);
var gulp = require('gulp');
var del = require('del');

gulp.task('clean',function(cb){
	del(['./app/html/', './app/css/'],cb);
})
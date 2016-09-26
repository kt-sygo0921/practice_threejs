var gulp = require('gulp');
var runSequance = require('run-sequence');

gulp.task('build',function(){
	return runSequance(['sass','ejs','babel', 'js']);
})
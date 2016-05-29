var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');
 
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src(['src/less/*.less','!src/less/extend/{reset,test}.less']) //该任务针对的文件
    	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')})) //当发生异常时提示错误
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')) //将会在src/css下生成index.css
        .pipe(livereload());
});
 
gulp.task('watch', function () {
	livereload.listen(); //当监听文件发生变化时，浏览器自动刷新页面
    gulp.watch('src/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});

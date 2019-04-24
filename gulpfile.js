var gulp = require('gulp'),
    sass = require('gulp-sass'); //Подключаем Sass пакет

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/scss/style.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function(){
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
    // другие ресурсы
});

gulp.task('JS', function(){
    gulp.watch('app/js/*.js', ['uglify']);
});
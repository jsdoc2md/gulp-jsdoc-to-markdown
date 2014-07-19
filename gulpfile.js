"use strict";
var gulp = require("gulp");
var gulpJsdoc2md = require("./");
var rename = require("gulp-rename");

gulp.task("default", function(){
    gulp.src("test/fixture/code.js")
        .pipe(gulpJsdoc2md())
        .pipe(rename("code.md"))
        .pipe(gulp.dest("tmp/one"));
        
    gulp.src("test/fixture/*.js")
        .pipe(gulpJsdoc2md())
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("tmp/two"));
    
});

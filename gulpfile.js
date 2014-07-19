"use strict";
var gulp = require("gulp");
var gulpJsdoc2md = require("./");

gulp.task("default", function(){
    gulp.src("test/fixture/code.js")
        .pipe(gulpJsdoc2md())
        .pipe(gulp.dest("tmp"));
});

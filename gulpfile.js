"use strict";
var gulp = require("gulp");
var gulpJsdoc2md = require("./");
var rename = require("gulp-rename");
var del = require("del");

gulp.task("clean", function(done){
    del("tmp", done);
});

gulp.task("one", [ "clean" ], function(){
    return gulp.src("test/fixture/code.js")
        .pipe(gulpJsdoc2md())
        .pipe(rename("code.md"))
        .pipe(gulp.dest("tmp/one"));
});

gulp.task("two", [ "clean" ], function(){
    return gulp.src("test/fixture/*.js")
        .pipe(gulpJsdoc2md())
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("tmp/two"));    
});

/* streaming mode */
gulp.task("three", [ "clean" ], function(){
    return gulp.src("test/fixture/*.js", { buffer: false })
        .pipe(gulpJsdoc2md())
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("tmp/three"));    
});

gulp.task("default", [ "clean", "one", "two", "three" ]);

"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var gulpJsdoc2md = require("./");
var rename = require("gulp-rename");
var del = require("del");
var concat = require("gulp-concat");

gulp.task("clean", function(done){
    del("tmp", done);
});

gulp.task("one", [ "clean" ], function(){
    return gulp.src("test/fixture/code.js")
        .pipe(gulpJsdoc2md({ private: true }))
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(rename("code.md"))
        .pipe(gulp.dest("tmp/one"));
});

gulp.task("two", [ "clean" ], function(){
    return gulp.src("test/fixture/*.js")
        .pipe(gulpJsdoc2md())
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("tmp/two"));    
});

/* streaming mode */
gulp.task("three", [ "clean" ], function(){
    return gulp.src("test/fixture/*.js", { buffer: false })
        .pipe(gulpJsdoc2md())
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("tmp/three"));    
});


gulp.task("four", [ "clean" ], function() {
    return gulp.src("test/fixture/*.js")
        .pipe(concat("all.md"))
        .pipe(gulpJsdoc2md({ private: true }))
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(gulp.dest("tmp/four"));
});

gulp.task("default", [ "clean", "one", "two", "three", "four" ]);

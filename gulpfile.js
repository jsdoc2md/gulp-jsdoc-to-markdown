"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var jsdoc2md = require("./");
var rename = require("gulp-rename");
var del = require("del");
var concat = require("gulp-concat");

gulp.task("clean", function(done){
    del("tmp", done);
});

/* one input, one output file */
gulp.task("one", [ "clean" ], function(){
    return gulp.src("test/fixture/code.js")
        .pipe(jsdoc2md({ "private": true }))
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(rename("code.md"))
        .pipe(gulp.dest("tmp/one"));
});

/* multiple in, multiple out */
gulp.task("two", [ "clean" ], function(){
    return gulp.src("test/fixture/*.js")
        .pipe(jsdoc2md())
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("tmp/two"));    
});

/* multiple in, multiple out, streaming mode */
gulp.task("three", [ "clean" ], function(){
    return gulp.src("test/fixture/*.js", { buffer: false })
        .pipe(jsdoc2md())
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("tmp/three"));    
});

/* multiple in, one file out
note: concat doesn't support streaming mode */

gulp.task("four", [ "clean" ], function() {
    return gulp.src("test/fixture/*.js")
        .pipe(concat("all.md"))
        .pipe(jsdoc2md({ "private": true }))
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(gulp.dest("tmp/four"));
});


gulp.task("default", [ "clean", "one", "two", "three", "four" ]);

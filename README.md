[![view on npm](http://img.shields.io/npm/v/gulp-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/gulp-jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/gulp-jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/75lb/gulp-jsdoc-to-markdown.svg?branch=master)](https://travis-ci.org/75lb/gulp-jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/75lb/gulp-jsdoc-to-markdown.svg)](https://david-dm.org/75lb/gulp-jsdoc-to-markdown)

***work in progress***

#gulp-jsdoc-to-markdown
Plugin for [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown). Works in both buffer and streaming modes.

##Example `gulpfile.js`
One markdown file out per source file in:
```js
"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var jsdoc2md = require("gulp-jsdoc-to-markdown");
var rename = require("gulp-rename");

gulp.task("docs", function(){
    return gulp.src("src/*.js")
        .pipe(jsdoc2md())
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("api"));
});
```

Multiple source files in, one markdown file out (`"api/all.md"`):
```js
gulp.task("docs", function() {
    return gulp.src("src/*.js")
        .pipe(concat("all.md"))
        .pipe(jsdoc2md())
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(gulp.dest("api"));
});
```

##Install
```sh
$ npm install gulp-jsdoc-to-markdown --save-dev
```

##Warning
Currently, due to way file names are significant in jsdoc `@module` tag behaviour, use of this plugin with input containing multiple modules can cause explosions. Investigating a solution. With all other input it's fine. If you're documenting multiple modules use a gulp task consuming jsdoc-to-markdown directly, as in [this example](https://github.com/75lb/jsdoc-to-markdown#as-a-gulp-plug-in). 

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*

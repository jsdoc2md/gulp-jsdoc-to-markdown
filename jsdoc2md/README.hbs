[![view on npm](http://img.shields.io/npm/v/gulp-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/gulp-jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/gulp-jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/75lb/gulp-jsdoc-to-markdown.svg?branch=master)](https://travis-ci.org/75lb/gulp-jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/75lb/gulp-jsdoc-to-markdown.svg)](https://david-dm.org/75lb/gulp-jsdoc-to-markdown)

#gulp-jsdoc-to-markdown
Plugin for [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown). Works in both buffer and streaming modes.

##Warning
Due to the streaming nature of gulp conflicting with the way jsdoc renders `@module` tags (where file name and structure is significant), use of this plugin with input containing multiple @modules can cause explosions. Investigating a solution. If you're documenting multiple modules, use a gulp task like [this one](https://github.com/75lb/jsdoc-to-markdown#as-a-gulp-task).

##Example `gulpfile.js`
One markdown file out per source file in:
```js
"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var jsdoc2md = require("gulp-jsdoc-to-markdown");
var rename = require("gulp-rename");
var concat = require("gulp-concat");

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

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*

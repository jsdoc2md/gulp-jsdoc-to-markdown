[![view on npm](http://img.shields.io/npm/v/gulp-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/gulp-jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-jsdoc-to-markdown.svg)](https://www.npmjs.org/package/gulp-jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/jsdoc2md/gulp-jsdoc-to-markdown.svg?branch=master)](https://travis-ci.org/jsdoc2md/gulp-jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/jsdoc2md/gulp-jsdoc-to-markdown.svg)](https://david-dm.org/jsdoc2md/gulp-jsdoc-to-markdown)

# gulp-jsdoc-to-markdown
Plugin for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). Works in both buffer and streaming modes.

## Warning
Due to the streaming nature of gulp conflicting with the way jsdoc renders `@module` tags (where file name and structure is significant), use of this plugin with input containing multiple @modules can cause explosions. Investigating a solution. If you're documenting multiple modules, use a gulp task like [this one](https://github.com/jsdoc2md/jsdoc-to-markdown#as-a-gulp-task).

## `gulpfile.js` examples

### One markdown file out per source file in
```js
"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var gulpJsdoc2md = require("gulp-jsdoc-to-markdown");
var rename = require("gulp-rename");
var concat = require("gulp-concat");

gulp.task("docs", function(){
    return gulp.src("lib/*.js")
        .pipe(gulpJsdoc2md())
        .on("error", function(err){
            gutil.log(gutil.colors.red("jsdoc2md failed"), err.message)
        })
        .pipe(rename(function(path){
            path.extname = ".md";
        }))
        .pipe(gulp.dest("api"));
});
```

### Multiple source files in, a single markdown file out
```js
"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var gulpJsdoc2md = require("gulp-jsdoc-to-markdown");
var concat = require("gulp-concat");

gulp.task("docs", function() {
    return gulp.src("lib/*.js")
        .pipe(concat("all.md"))
        .pipe(gulpJsdoc2md())
        .on("error", function(err){
            gutil.log("jsdoc2md failed:", err.message);
        })
        .pipe(gulp.dest("api"));
});
```

## Install
Install this plugin:
```
$ npm install gulp-jsdoc-to-markdown --save-dev
```
If using one of the example gulpfiles above you will also need to run:
```
$ npm i gulp gulp-util gulp-concat gulp-rename --save-dev
```

* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).

'use strict';

var fs       = require('fs');
var path     = require('path');
var express  = require('express');
var _        = require('lodash');
var gulp     = require('gulp');
var concat   = require('gulp-concat');
var minify   = require('gulp-minify-css');
var jsonlint = require("gulp-jsonlint");
var deploy   = require('gulp-gh-pages');
var swig     = require('swig');
var build    = require('./build');

// Assets
// -----------------------------------------------------------------------------
gulp.task('assets:css', function() {
  return gulp.src([
      'bower_components/normalize-css/normalize.css',
      'assets/css/**/*'
    ])
    .pipe(concat('bundle.css'))
    .pipe(minify())
    .pipe(gulp.dest('build'));
});

gulp.task('assets:images', function() {
  return gulp.src([
    'assets/images/**/*'
  ])
  .pipe(gulp.dest('build'));
});

gulp.task('assets', ['assets:css', 'assets:images']);

// Bookmarks
// -----------------------------------------------------------------------------
gulp.task('bookmarks:check:json', function() {
  return gulp.src(['src/bookmarks.json'])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});

gulp.task('bookmarks:check:duplicates', ['bookmarks:check:json'], function() {
  var json  = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'bookmarks.json')));
  var items = _.flatten(_.values(json));
  var uniqs = _.uniq(items, function(b) { return b.url; });
  var dups  = _.filter(uniqs, function(b) { return _.filter(items, {url: b.url}).length >= 2; });
  if (dups.length) throw new Error('Found duplicated URLs: \n' + _.pluck(dups, 'url').join('\n'));
});

gulp.task('bookmarks', ['bookmarks:check:duplicates']);

// Build
// -----------------------------------------------------------------------------
gulp.task('build:metalsmith', ['bookmarks'], function(done) {
  build(function(err){
    if (err) return err;
    console.log('Metalsmith building... Done.');
    done();
  });
});

gulp.task('build', ['build:metalsmith', 'assets'], function() {
  return gulp.src(['build/**/*'])
    .pipe(gulp.dest('public'));
});

// Deploy
// -----------------------------------------------------------------------------
gulp.task('deploy', ['build'], function() {
  return gulp.src('./public/**/*')
    .pipe(deploy());
});

// Serve
// -----------------------------------------------------------------------------
gulp.task('serve', ['watch', 'build'], function() {
  var port = process.env.NODE_PORT || 3000;
  var app = express();
  app.set('view cache', false);
  swig.setDefaults({cache: false});
  app.use(express.static(path.join(__dirname, 'public')));
  app.listen(port);
  console.log('Server running on localhost:%d...', port);
});

// Watch
// -----------------------------------------------------------------------------
gulp.task('watch', function() {
  gulp.watch([
    'assets/**/*',
    'src/**/*',
    'templates/**/*'
  ], ['build']);
});

// Default
// -----------------------------------------------------------------------------
gulp.task('default', ['serve']);

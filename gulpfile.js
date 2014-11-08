'use strict';

var fs       = require('fs');
var path     = require('path');
var util     = require('util');
var parseURL = require('url').parse;
var express  = require('express');
var _        = require('lodash');
var favicon  = require('favicon');
var async    = require('async');
var forEach  = require('async-foreach').forEach;
var chalk    = require('chalk');
var gulp     = require('gulp');
var concat   = require('gulp-concat');
var minify   = require('gulp-minify-css');
var jsonlint = require("gulp-jsonlint");
var deploy   = require('gulp-gh-pages');
var swig     = require('swig');
var build    = require('./build');
var pkg      = require('./package.json')

var FAVICONS_FILE  = path.join(__dirname, 'src', 'favicons.json');
var BOOKMARKS_FILE = path.join(__dirname, 'src', 'bookmarks.json');
var README = path.join(__dirname, 'README.md');

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
  var json  = JSON.parse(fs.readFileSync(BOOKMARKS_FILE));
  var items = _.flatten(_.values(json));
  var uniqs = _.uniq(items, function(b) { return b.url; });
  var dups  = _.filter(uniqs, function(b) { return _.filter(items, {url: b.url}).length >= 2; });
  if (dups.length) throw new Error('Found duplicated URLs: \n' + _.pluck(dups, 'url').join('\n'));
});

gulp.task('bookmarks:favicons', function(done) {
  var data      = [];
  var favicons  = JSON.parse(fs.readFileSync(FAVICONS_FILE));
  var bookmarks = JSON.parse(fs.readFileSync(BOOKMARKS_FILE));
  async.each(Object.keys(bookmarks), function(section, sectioncb) {
    async.each(bookmarks[section], function(link, linkcb) {
      var host = parseURL(link.url).hostname;
      if (_.find(favicons, {host: host})) return linkcb();
      favicon(link.url, function(err, url) {
        console.log(chalk.gray('Fetching favicon for %s'), link.url);
        url = url ? url : 'https://www.meteor.com/favicon.png';
        url = /^(?!http).*/i.test(url) ? 'http://' + url : url;
        data.push({host: host, favicon: url});
        linkcb(err);
      });
    }, function(err) {
      favicons = favicons.concat(data);
      sectioncb(err);
    });
  }, function(err) {
    if (err) console.log(chalk.red(err));
    fs.writeFileSync(FAVICONS_FILE, JSON.stringify(favicons, null, 2));
    done();
  });
});

gulp.task('bookmarks', ['bookmarks:check:duplicates']);

// Build
// -----------------------------------------------------------------------------
gulp.task('build:readme', ['bookmarks'], function(done) {
  var md = ['# Meteor Bookmarks']
  var bookmarks = JSON.parse(fs.readFileSync(BOOKMARKS_FILE));
  async.each(Object.keys(bookmarks), function(section, sectioncb) {
    md.push(util.format('\n## %s\n', section))
    async.each(bookmarks[section], function(link, linkcb) {
      md.push(util.format('* [%s](%s)', link.title, link.url))
      linkcb();
    }, function(err) {
      sectioncb(err);
    });
  }, function(err) {
    if (err) console.log(chalk.red(err));
    md.push('\n## Authors\n');
    pkg.contributors.forEach(function(contributor) {
      md.push(util.format('* [%s](%s)', contributor.name, contributor.url));
    });
    fs.writeFileSync(README, md.join('\n'));
    done();
  });
});

gulp.task('build:metalsmith', ['bookmarks'], function(done) {
  build(function(err){
    if (err) throw err;
    console.log('Metalsmith building... Done.');
    done();
  });
});

gulp.task('build', ['build:readme', 'build:metalsmith', 'assets'], function() {
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

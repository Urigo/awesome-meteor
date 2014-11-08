'use strict';

var fs         = require('fs');
var path       = require('path');
var util       = require('util');
var parseURL   = require('url').parse;
var _          = require('lodash');
var moment     = require('moment');
var async      = require('async');
var forEach    = require('async-foreach').forEach;
var Metalsmith = require('metalsmith');
var permalinks = require('metalsmith-permalinks');
var metadata   = require('metalsmith-metadata');
var templates  = require('metalsmith-templates');
var markdown   = require('metalsmith-markdown');
var buildDate  = require('metalsmith-build-date');

module.exports = build;

var BASE_URL              = process.env.BASE_URL ? process.env.BASE_URL : '/';
var BOOKMARKS_FILE        = path.join(__dirname, 'src', 'bookmarks.json');
var DEVSHOP_DIR           = path.join(__dirname, 'src', 'devshop');
var FAVICONS_FILE         = path.join(__dirname, 'src', 'favicons.json');

function getDevshopMetadata() {
  var data = {};
  var files = fs.readdirSync(DEVSHOP_DIR);
  files.reverse();
  files.forEach(function(file) {
    var items  = JSON.parse(fs.readFileSync(path.join(DEVSHOP_DIR, file)));
    var date   = path.basename(file, '.json').split('-');
    date       = moment(new Date(util.format('%s-%s-01', date[0], date[1]))).format('YYYY MMMM');
    data[date] = items;
  });
  return data;
}

function getLatestBookmarks() {
  if (!fs.existsSync(BOOKMARKS_FILE)) throw new Error('src/bookmarks.json does not exist.');
  var data = JSON.parse(fs.readFileSync(BOOKMARKS_FILE));
  var bookmarks = [];
  Object.keys(data).forEach(function(s) { bookmarks = bookmarks.concat(_.values(data[s])); });
  return _.first(_.sortBy(bookmarks, function(b) { return b.added; }).reverse(), 20);
}

function setBookmarkDate(bookmark, cb) {
  bookmark.date = moment(bookmark.added).toISOString();
  cb();
}

function setBookmarkDomain(bookmark, cb) {
  bookmark.domain = parseURL(bookmark.url).hostname;
  cb();
}

function setBookmarkFavicon(bookmark, favicons, cb) {
  var favicon = _.find(favicons, {host: parseURL(bookmark.url).hostname});
  bookmark.favicon = favicon ? favicon.favicon : 'https://www.meteor.com/favicon.png';
  cb();
}

function getFavicons() {
  if (!fs.existsSync(FAVICONS_FILE)) throw new Error('Please, run "gulp bookmarks:favicons"');
  return JSON.parse(fs.readFileSync(FAVICONS_FILE));
}

function addBookmarksMetadata() {
  return function(files, metalsmith, done) {
    var bookmarks = metalsmith.metadata().bookmarks;
    var favicons = getFavicons();
    forEach(Object.keys(bookmarks), function(section) {
      var links = bookmarks[section];
      var linksDone = this.async();
      forEach(links, function(link) {
        var linkDone = this.async();
        async.series([
          setBookmarkDate.bind(null, link),
          setBookmarkDomain.bind(null, link),
          setBookmarkFavicon.bind(null, link, favicons)
        ], linkDone);
      }, linksDone);
    }, function() {
      done();
    });
  };
}

var metalsmith = new Metalsmith(__dirname);

metalsmith
  .destination('./public')
  .metadata(_.merge(metalsmith.metadata(), {
    BASE_URL        : BASE_URL,
    devshop         : getDevshopMetadata(),
    latestBookmarks : getLatestBookmarks()
  }))
  .use(metadata({bookmarks: 'bookmarks.json'}))
  .use(addBookmarksMetadata())
  .use(markdown({smartypants: true, gfm: true, tables: true}))
  .use(buildDate())
  .use(permalinks({pattern: ':title'}))
  .use(templates({engine: 'swig', directory: 'templates'}));

function build(done) {
  metalsmith.build(function(err) {
    if (err) return done(err);
    done();
  });
}

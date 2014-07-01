'use strict';

var fs         = require('fs');
var path       = require('path');
var util       = require('util');
var _          = require('lodash');
var moment     = require('moment');
var Metalsmith = require('metalsmith');
var permalinks = require('metalsmith-permalinks');
var metadata   = require('metalsmith-metadata');
var templates  = require('metalsmith-templates');
var markdown   = require('metalsmith-markdown');

module.exports = build;

var BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : '/';

var devshop      = {};
var devshopDir   = path.join(__dirname, 'src', 'devshop');
var devshopFiles = fs.readdirSync(devshopDir);
devshopFiles.reverse();

devshopFiles.forEach(function(file) {
  var items = JSON.parse(fs.readFileSync(path.join(devshopDir, file)));
  var date = path.basename(file, '.json').split('-');
  date = moment(new Date(util.format('%s-%s-01', date[0], date[1]))).format('YYYY MMMM');
  devshop[date] = items;
});

var m = new Metalsmith(__dirname);

m
  .destination('./public')
  .metadata(_.merge(m.metadata(), {BASE_URL: BASE_URL, devshop: devshop}))
  .use(metadata({bookmarks: 'bookmarks.json'}))
  .use(markdown({smartypants: true, gfm: true, tables: true}))
  .use(permalinks({pattern: ':title'}))
  .use(templates({engine: 'swig', directory: 'templates'}));

function build(done) {
  m.build(function(err) {
    if (err) return done(err);
    done();
  });
}

'use strict';

var Metalsmith = require('metalsmith');
var metadata   = require('metalsmith-metadata');
var templates  = require('metalsmith-templates');
var markdown   = require('metalsmith-markdown');

module.exports = build;

var m = new Metalsmith(__dirname);

m.destination('./public');
m.use(metadata({bookmarks: 'bookmarks.json'}));
m.use(markdown({smartypants: true, gfm: true, tables: true}));
m.use(templates({engine: 'swig', directory: 'templates'}));

function build(done) {
  m.build(function(err) {
    if (err) return done(err);
    done();
  });
}

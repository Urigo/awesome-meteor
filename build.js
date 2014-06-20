'use strict';

var metalsmith = require('metalsmith');
var metadata   = require('metalsmith-metadata');
var templates  = require('metalsmith-templates');
var markdown   = require('metalsmith-markdown');
var chalk      = require('chalk');

metalsmith(__dirname)
  .use(metadata({bookmarks: 'bookmarks.json'}))
  .use(markdown({smartypants: true, gfm: true, tables: true}))
  .use(templates({engine: 'swig', directory: 'templates'}))
  .build(function(err) {
    if (err) console.log(chalk.red('Error: %s'), err.message);
    console.log(chalk.green('Done.'));
  });

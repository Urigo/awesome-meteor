'use strict';

var path    = require('path');
var express = require('express');
var chalk   = require('chalk');

var PORT = process.env.NODE_PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, function() {
  console.log(chalk.green('Server running on port %d...'), PORT);
});

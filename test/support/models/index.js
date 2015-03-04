/**
  * Module dependencies.
  */
var fs = require('fs');

var models = {};

fs
  .readdirSync(
    __dirname
  ).filter(function(file) {
    return (!(/\.(w+)/.test(file) || file == 'index.js'));
  }).forEach(function(file){
    var mod = require('./' + file);
    mod(models);
  });

module.exports = models;
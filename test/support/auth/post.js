/**
  * Module dependencies.
  */
var ensure = require('./ensure');


exports.read = ensure.any;

exports.create = ensure.belongs_to_user;

exports.update = ensure.belongs_to_user;

exports.remove = ensure.belongs_to_user;

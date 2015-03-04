/**
  * Module dependencies.
  */
var ensure = require('./ensure');


exports.read = ensure.any;

exports.create = function(req, cb) {
  this.user_id = req.user.id;
  return ensure.belongs_to_user(req, cb);
};

exports.update = ensure.belongs_to_user;

exports.remove = ensure.belongs_to_user;

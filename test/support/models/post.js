/**
  * Module dependencies.
  */
var ensure = require('../auth/post');

// expose

module.exports = function(models){

  models.Post = db.define('post',
    {
      title: String,
      content: String,
    }, {

      methods: {
        __isCreatable__: ensure.create,
        __isReadable__: ensure.read,
        __isUpdatable__: ensure.update,
        __isRemovable__: ensure.remove,
      },

    }
  );

};

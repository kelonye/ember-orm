/**
  * Module dependencies.
  */
var ensure = require('../auth/comment');

// expose

module.exports = function(models){

  models.Comment = db.define('comment',
    {
      content: String,
      post_id: Number,
      user_id: Number,
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

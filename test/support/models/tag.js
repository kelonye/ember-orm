/**
  * Module dependencies.
  */
var ensure = require('../auth/tag');

// expose

module.exports = function(models){

  models.Tag = db.define('tag',
    {
      name: String,
      post_id: Number,
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

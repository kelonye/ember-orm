/**
  * Module dependencies.
  */

// expose

module.exports = function(models){

  models.User = db.define('user',
    {
      name: String,
      is_super_user: Boolean
    }, {

    }
  );

};

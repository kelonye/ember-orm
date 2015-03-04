/**
  * Module dependencies.
  */
var Batch = require('batch');
var models = require('./models');


var User = models.User;
var Tag = models.Tag;
var Post = models.Post;
var Comment = models.Comment;


exports.setUp = function(fn) {

  var batch = new Batch;

  batch.concurrency(1);

  batch.push(db.sync.bind(db));
  
  batch.push(function(done){
    User.create({
      name: 'TJ',
      is_super_user: true,
    }, function(err, u){
      if (err) return done(err);
      user = u;
      done();
    });
  });

  batch.push(function(done){
    User.create({
      name: 'TJ',
      is_super_user: true
    }, function(err, u){
      if (err) return done(err);
      user2 = u;
      done();
    });
  });

  batch.push(function(done){
    Post.create({
      title: 'a',
      content: 'a'
    }, function(err, u){
      if (err) return done(err);
      post = u;
      done();
    });   
  });

  batch.push(function(done){
    Post.create({
      title: 'b',
      content: 'b'
    }, function(err, u){
      if (err) return done(err);
      post2 = u;
      done();
    });  
  });

  batch.push(function(done){
    Tag.create({
      name: 'a',
      post_id: post.id,
    }, function(err, u){
      if (err) return done(err);
      tag = u;
      done();
    });
  });

  batch.push(function(done){
    Tag.create({
      name: 'b',
      post_id: post2.id,
    }, function(err, u){
      if (err) return done(err);
      tag2 = u;
      done();
    });
  });

  batch.push(function(done){
    Comment.create({
      content: 'a',
      user_id: user.id,
      post_id: post.id,
    }, function(err, u){
      if (err) return done(err);
      comment = u;
      done();
    });
  });

  batch.push(function(done){
    Comment.create({
      content: 'b',
      user_id: user2.id,
      post_id: post2.id,
    }, function(err, u){
      if (err) return done(err);
      comment2 = u;
      done();
    });
  });

  batch.end(fn);

};

exports.tearDown = function(fn) {

  var batch = new Batch;

  batch.push(function(done){
    Post.drop(done);
  });
  batch.push(function(done){
    Tag.drop(done);
  });
  batch.push(function(done){
    User.drop(done);
  });
  batch.push(function(done){
    Comment.drop(done);
  });

  batch.end(fn);

};

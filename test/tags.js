/**
  * Module dependencies.
  */
var should = require('should');
var request = require('supertest');
var app = require('./support/');
var db = require('./support/db');
var models = require('./support/models');


var User = models.User;
var Tag = models.Tag;
var Post = models.Post;
var Comment = models.Comment;


describe('tags', function() {
  beforeEach(function(done) {
    db.setUp(done);
  });
  afterEach(function(done) {
    db.tearDown(done);
  });
  describe('GET /', function() {
    it('should return a list of tags', function(done) {
      request(app)
        .get('/tags')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.tags.length.should.equal(2);
          done();
        });
    });
  });
  describe('QUERY /', function() {
    it('should return matched tags', function(done) {
      request(app)
        .post('/tags')
        .send(
          {
            query: {
              conditions:{
                id: [tag.id, tag.id],
              }
            }
          }
        )
        .expect(200)
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          res.body.tags.length.should.equal(1);
          done();
        });
    });
  });
  describe('POST /', function() {
    it('should create and return a tag', function(done) {
      request(app)
        .post('/tags')
        .send({ tag: {
          name: 'b',
          post_id: post.id
        }})
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.tag.name.should.equal('b');
          res.body.tag.post_id.should.equal(post.id);
          done();
        });
    });
  });
  describe('GET /:id', function() {
    it('should return a tag', function(done) {
      request(app)
        .get('/tags/' + tag.id)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.tag.id.should.equal(tag.id);
          res.body.tag.name.should.equal('a');
          res.body.tag.post_id.should.equal(post.id);
          done();
        });
    });
  });
  describe('PUT /:id', function() {
    it('should update and return a tag', function(done) {
      request(app)
        .put('/tags/' + tag.id).send({ tag: {
          name: 'b'
        }})
        .expect(200)
        .end(function(err, res) {
          res.body.tag.name.should.equal('b');
          if (err) return done(err);
          Tag.get(tag.id, function(err, tag) {
            if (err) return done(err);
            tag.name.should.equal('b');
            done();
          });
        });
    });
  });
  describe('DELETE /:id', function() {
    it('should remove a tag', function(done) {
      request(app)
        .del('/tags/' + tag.id)
        .expect(200)
        .expect({})
        .end(function(err, res) {
          if (err) return done(err);
          Tag.exists({id: tag.id}, function(err, yes) {
            if (err) return done(err);
            yes.should.not.be.true;
            done();
          });
        });
    });
  });
});

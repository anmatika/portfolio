var util = require('util');
// Ref: https://github.com/cmarin/MongoDB-Node-Express-Blog/blob/master/Commentprovider.js
// var mongoose = require("mongoose");
var mongoose = {};
var Schema, ObjectId;

var Comment;


CommentProvider = function(m) {
    mongoose = m;
    Schema = mongoose.Schema;
    ObjectId = Schema.ObjectId;
    Comment = new Schema({
        commentid: ObjectId,
        commenterid: String,
        commenter_name: String,
        postid: String,
        title: String,
        body: String,
        created_at: Date
    });

    mongoose.model('Comment', Comment);
    Comment = mongoose.model('Comment');

    return {
        //Create a new Comment
        save: function(params, callback) {
            var comment = new Comment({
                title: params['title'],
                body: params['body'],
                postid: params['postid'],
                commenterid: params['commenterid'],
                commenter_name: params['commenter_name'],
                created_at: new Date()
            });
            comment.save(function(err, comment) {
                console.log('comment: ' + util.inspect(comment, {
                    showHidden: false,
                    depth: null
                }));

                callback(comment._id);
            });
        },
        //Find Comment by ID
        findById: function(id, callback) {
            Comment.findById(id, function(err, comment) {
                if (!err) {
                    callback(null, comment);
                }
            });
        },
        findByPostId: function(postid, callback) {

            Comment.find({
                'postid': postid
            }, function(err, comments) {
                if (!err) {
                    callback(null, comments);
                } else {
                    callback(err, null);
                }
            });
        }
    }
};

//Find all Comments
CommentProvider.prototype.findAll = function(callback) {
    Comment.find({}, function(err, Comments) {
        callback(null, Comments)
    });
};

//Update Comment by ID
CommentProvider.prototype.updateById = function(id, body, callback) {
    Comment.findById(id, function(err, Comment) {
        if (!err) {
            Comment.title = body.title;
            Comment.body = body.body;
            Comment.save(function(err) {
                callback();
            });
        }
    });
};



module.exports = CommentProvider;
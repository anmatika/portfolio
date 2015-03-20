module.exports = function(router, passport, mongoose) {

	var database = require('../lib/database');
	var paypalUtil = require('../lib/paypal');
	var util = require('util');
	var validator = require('validator');
	var i18n = require('i18next');
	var postProvider = require('../lib/postProvider')(mongoose);
	require('./routes.secure')(router, passport);
	require('./routes.secure.order')(router, passport);

	/** get products from the db **/
	router.get('/getProducts', database.getProducts);
	
	// Redirect the user to Facebook for authentication.  When complete,
	// Facebook will redirect the user back to the application at
	//auth/facebook/callback
	router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'} ));

	// Facebook will redirect the user to this URL after approval.  Finish the
	// authentication process by attempting to obtain an access token.  If
	// access was granted, the user will be logged in.  Otherwise,
	// authentication has failed.
	router.get('/auth/facebook/callback', 
	  passport.authenticate('facebook', { successRedirect: '/',
	                                      failureRedirect: '/fblogin-error' }));
	router.post('/customerDetails', function(req, res) {
		console.log(req.body);
		res.redirect('/');
	});

	// get user from session
	router.get('/getUser', function(req, res) {
		console.log('getUser - ' + req.user);
		res.send(req.isAuthenticated() ? req.user : '0');
	});


	router.get('/logout', function(req, res) {
		req.logOut();
		res.clearCookie('email');
		// res.send(200);
		res.redirect('/');
	});

	// EJS-template:
	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	router.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user: req.user // get the user out of session and pass to template
		});
	});

	// pay by credit card
	router.post('/paycredit', function(req, res) {
		paypalUtil.paycredit().then(function() {
				res.redirect('/secure/paymentSuccess');
			},
			function(err) {
				console.log(util.inspect(err, {
					showHidden: false,
					depth: null
				}));
			});
	});

	router.post('/checkout', function(req, res) {

		var items = req.body;
		req.session.checkedoutItems = items;
		console.log(JSON.stringify(req.body));
		
		if (req.isAuthenticated()){
			res.send('logged');
		} else {
			res.send('notLogged');			
		}
	});

	router.get('/fblogin-error', function(req, res){

		res.send(req.body);
	});

	router.post('/postComment', function(req, res){
		
		if (!req.user){
			res.redirect('/secure/login');
		}

		console.log('body: ' +  util.inspect(req.body, {
					showHidden: false,
					depth: null
				}));
		console.log('user: ' +  util.inspect(req.user, {
					showHidden: false,
					depth: null
				}));
		var comment = req.body.comment;
		var postid = req.body.postid;
		var userid = req.user.facebook.id;
		var username = req.user.facebook.name;
		postProvider.save({'body': comment, 'commenterid': userid, 'commenter_name': username, 'postid': postid }, function(commentId){
			console.log('commentId: ' + commentId);
			res.send({
				commentId: commentId,
				comment: comment,
				postid: postid,
				userid: userid,
				username: username
			});
		})
		
	});

	router.post('/getComments', function (req, res) {		
		var postid = req.body.postid;
		postProvider.findByPostId(postid, function(err, comments){			
			if(err){
				res.send(err);
			} else {
				console.log('comments: ' +  util.inspect(comments, {
					showHidden: false,
					depth: null
				}));
				res.send(comments);
			}
		});
	})

	function isLoggedInAjax(req, res, next) {
		// if user is authenticated in the session, carry on 
		if (req.isAuthenticated())
			return next();

		res.send('notLogged');
	}

	// route middleware to make sure a user is logged in
	function isLoggedIn(req, res, next) {

		console.log('isLoggedIn hit');
		// if user is authenticated in the session, carry on 
		if (req.isAuthenticated())
			return next();

		// if they aren't redirect them to the home page
		res.redirect('/');
	}
}
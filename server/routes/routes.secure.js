module.exports = function(router, passport){
	

	router.post('/secure/login', passport.authenticate('local-login', {
		successRedirect: '/', // redirect to the secure profile section
		failureRedirect: '/secure/login', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	router.get('/secure/login', function(req, res) {
			// render the page and pass in any flash data if it exists
			var message = req.flash('loginMessage');
			var errorMessage = req.flash('error');
			var isMessage = message.length > 0 || errorMessage.length > 0;

			res.render('login', {
				message: message != '' ? message : errorMessage,
				isMessage: isMessage
			});
	});

	router.get('/secure/account', function(req, res) {

		var user = req.user;
		var response = {
			message: '',
			email: '',
			firstname: '',
			lastname: '',
			address: '',
			postalcode: '',
			city: '',
			country: '',
			email: ''
		}

		if (user) {
			response.message = '',
			response.email = user.local.email,
			response.firstname = user.local.firstname,
			response.lastname = user.local.lastname,
			response.address = user.local.address,
			response.postalcode = user.local.postalcode,
			response.city = user.local.city,
			response.country = user.local.country,
			response.email = user.local.email
		}

		res.render('account', response);
	});

	/* save account details*/
	router.post('/secure/account', function(req, res) {

		var user = req.user;

		console.log(util.inspect(req.body, {
			showHidden: false,
			depth: null
		}));

		user.local.firstname = req.body.firstname;
		user.local.lastname = req.body.lastname;
		user.local.address = req.body.address,
		user.local.postalcode = req.body.postalcode,
		user.local.city = req.body.city,
		user.local.country = req.body.country

		user.save(function(err) {
			if (err)
				throw err;
		});

		res.redirect('/');
	});

	// process the signup form
	router.post('/secure/signup', passport.authenticate('local-signup', {
		successRedirect: '/', // redirect to the secure profile section
		failureRedirect: '/secure/signup', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	// process the signup form
	router.post('/secure/signupAndContinueOrder', passport.authenticate('local-signup', {
		successRedirect: '/secure/orderphase1', // redirect to the secure profile section
		failureRedirect: '/', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	

	// // // process the login form
	router.post('/secure/loginAndContinueOrder', passport.authenticate('local-login', {
		successRedirect: '/secure/orderphase1', // redirect to the secure profile section
		failureRedirect: '/', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	router.get('/secure/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		var message = req.flash('signupMessage');
		var errorMessage = req.flash('error');
		var isMessage = message.length > 0 || errorMessage.length > 0;

		res.render('signup', {
			message: message != '' ? message : errorMessage,
			isMessage: isMessage 
		});
	});

	router.get('/secure/orderComplete', function(req, res) {
		res.render('orderComplete.ejs');
	});

	/** success redirect route from paypal
	 **/
	router.get('/secure/paymentExecute', function(req, res) {
		var paymentId = req.session.paymentId;
		var payerId = req.param('PayerID');
		console.log('/secure/paymentExecute');
		console.log('payment id: ' + paymentId);
		console.log('payer id: ' + payerId);

		// execute paypent
		paypalUtil.paymentExecute(paymentId, payerId).then(function(paypalRes) {
				res.redirect('/secure/orderComplete')
			},
			function(err) {
				console.log(util.inspect(err, {
					showHidden: false,
					depth: null
				}));
			});
	})

	router.get('/secure/loginOrCreateNewAccount', function(req, res) {
		res.render('loginOrCreateNewAccount', {message: ''});
	})

	
	// pay button invoked
	router.post('/secure/paypaypal', function(req, res) {
		var items = req.session.checkedoutItems;
		if (items === undefined) {
			res.redirect('/sessionExpired');
		}

		console.log('checked out items: ' + util.inspect(items, {
			showHidden: false,
			depth: null
		}));

		paypalUtil.paypaypal(items).then(function(paypalRes) {

				var url;

				console.log('paypaypal resolved');
				console.log('payment id:' + paypalRes.id);

				req.session.paymentId = paypalRes.id;

				for (var i = 0; i < paypalRes.links.length; i++) {
					var link = paypalRes.links[i];
					if (link.method === 'REDIRECT') {
						url = link.href;
					}
				}
				console.log('url: ' + url);
				res.redirect(url);
			},
			function(err) {
				console.log(util.inspect(err, {
					showHidden: false,
					depth: null
				}));
			});
	});

}
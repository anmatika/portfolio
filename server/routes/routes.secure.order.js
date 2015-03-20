module.exports = function(router, passport){
	
	router.get('/secure/orderphase1', function(req, res){
		var user = req.user;
		var firstname,
		lastname,
		address,
		postalcode,
		city,
		country,
		message;

		if (user) {
			firstname = user.local.firstname;
			lastname = user.local.lastname;
			address = user.local.address;
			postalcode = user.local.postalcode;
			city = user.local.city;
			country = user.local.country;

		} else {

			firstname = req.session.firstname;
			lastname = req.session.lastname;
			address = req.session.address;
			postalcode = req.session.postalcode;
			city = req.session.city;
			country = req.session.country;
		}

		res.render('orderphase1', {
			firstname: firstname,
			lastname: lastname,
			address: address,
			postalcode: postalcode,
			city: city,
			country: country,		 	
			phase: 1
		});
	});

	router.post('/secure/orderphase2', function(req, res){
		// todo: user address saving
		var user = req.user;

		console.log(util.inspect(req.body, {
					showHidden: false,
					depth: null
				}));

		var firstname = req.body.firstname;
		var lastname = req.body.lastname;
		var address = req.body.address;
		var postalcode = req.body.postalcode;
		var city = req.body.city;
		var country = req.body.country;
		
		// user logged in - update details
		if(user) {

			console.log('op2 - save user')
			user.local.firstname = firstname;
			user.local.lastname = lastname;
			user.local.address = address,
			user.local.postalcode = postalcode,
			user.local.city = city,
			user.local.country = country

			user.save(function(err) {
				if (err)
					throw err;
			});
		}

		// put posted address info to session
		req.session.firstname = firstname
		req.session.lastname = lastname;
		req.session.address = address,
		req.session.postalcode = postalcode,
		req.session.city = city,
		req.session.country = country

		res.redirect('orderphase2');
	});
	
	
	router.get('/secure/orderphase2', function(req, res){
		
		var message = req.flash('message');
		
		res.render('orderphase2', {
			phase: 2,
			message: message,
			isMessage: message.length > 0
		});
	});

	router.post('/secure/orderphase3', function(req, res){
		// todo: shipping details saving
		console.log(util.inspect(req.body, {
					showHidden: false,
					depth: null
				}));
		
		var valid = validator.isNumeric(req.body.shippingMethod);

		console.log('isvalid: ' + valid);

		if (!valid) {
			req.flash('message', 'shippingMethod must be selected');
			return res.redirect('/secure/orderphase2');
		}

		req.session.shippingMethod = req.body.shippingMethod;
		console.log('shippingMethod: ' + req.session.shippingMethod);

		res.redirect('orderphase3');
	});

	router.get('/secure/orderphase3', function(req, res) {
		// render the page and pass in any flash data if it exists
		// var items = req.flash('orderItems');
		var items = req.session.checkedoutItems;
		var firstname;
		var user = {
			firstname: '',
			lastname: '',
			address: '',
			postalcode: '',
			city: '',
			country: ''
		};

		if(req.user){
			user.firstname = user.local.firstname;
			user.lastname = user.local.lastname;
			user.address = user.local.address;
			user.postalcode = user.local.postalcode;
			user.city = user.local.city;
			user.country = user.local.country;
		} else {
			user.firstname = req.session.firstname;
			user.lastname = req.session.lastname;
			user.address = req.session.address;
			user.postalcode = req.session.postalcode;
			user.city = req.session.city;
			user.country = req.session.country;
		}

		res.render('orderphase3', {
			items: items,
			user: user,
			phase: 3
		});
	});
}
Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	//Jokes
	this.route('jokes', {
		path: '/jokes',
		template: 'jokes'
	});

	//Login
	this.route('login', {
		path: '/',
		template: 'login'
	});

	//Signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});
});
Router.route('/', function() {
	this.layout('layout');
	this.render('home', {to: 'home'});
});
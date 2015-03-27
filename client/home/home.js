Template.home.rendered = function() {
	$('button').click(function(e) {
		console.log(e);
	});

	$('.specialButton').click(function(e) {
		$('.specialButton').removeClass('selected');
		console.log(e.currentTarget.className);
		$("."+ e.currentTarget.className.replace(' ', '.')).addClass('selected');
	});
}
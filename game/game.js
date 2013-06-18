$(document).ready(function() {
	$('.left').on('click', function() {
		if ($(this).css('background-color') === 'rgb(211, 211, 211)') {
			$(this).css('background-color', 'rgb(0, 0, 255)');
		} else {
			$(this).css('background-color', 'rgb(211, 211, 211)');
		}
	} );
});

$(document).ready(function() {
	$('a').on('click', function() {
		$('.left').css('background-color', '');
	});
});
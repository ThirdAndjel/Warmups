// $(document).ready(function() {
// 	$('.left').on('click', function() {
// 		if ($(this).css('background-color') === 'rgb(211, 211, 211)') {
// 			$(this).css('background-color', 'rgb(0, 0, 255)');
// 		} else {
// 			$(this).css('background-color', 'rgb(211, 211, 211)');
// 		}
// 	} );
// });

// $(document).ready(function() {
// 	$('.left').on('click', function() {
// 		if ($('.left').filter(function() {
// 			if ($(this).css('background-color') === 'rgb(0, 0, 255)') {
// 				return true;
// 			}
// 			return false;
// 		}).length === 0) {
// 			$('.hidden').removeClass('hidden');
// 		}
// 	});
// });

// $(document).ready(function() {
// 	$('a').on('click', function() {
// 		$('.left').css('background-color', '');
// 	});
// });

$(document).ready(function() {
	$('.left').on('click', function() {
		if ($(this).css('background-color') === 'rgb(211, 211, 211)') {
			$(this).css('background-color', 'rgb(0, 0, 255)');
		} else {
			$(this).css('background-color', 'rgb(211, 211, 211)');
		}
	} );

	$('.left').on('click', function() {
		if ($('.left').filter(function() {
			if ($(this).css('background-color') === 'rgb(0, 0, 255)') {
				return true;
			}
				return false;
			}).length === 0) {
			$('.hidden').removeClass('hidden');
		}
	});

	$('a').on('click', function() {
		$('.left').css('background-color', '');
	});
});


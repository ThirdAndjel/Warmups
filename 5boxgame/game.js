$(document).ready(function(){
	var turn = true;
	$("body").on('click',".span1",function() {
		var xcord = 0;
		var ycord = 0;
		if(turn === true) {
			$(this).removeClass('default red').addClass('blue');
			xcord = $(this).data('row');
			ycord = $(this).data('column');
			$('div[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('default red').addClass('blue');
			$('div[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('default red').addClass('blue');
			$('div[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('default red').addClass('blue');
			$('div[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('default red').addClass('blue');
			turn = false;
			console.log(turn);
		} else if(turn === false) {
			$(this).removeClass('default blue').addClass('red');
			xcord = $(this).data('row');
			ycord = $(this).data('column');
			$('div[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('default blue').addClass('red');
			$('div[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('default blue').addClass('red');
			$('div[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('default blue').addClass('red');
			$('div[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('default blue').addClass('red');
			turn = true;
			console.log(turn);
	}});
});

// step 1
// $(document).ready(function(){
// 	$("body").on('click',".span1",function() {
// 		$(this).removeClass('default').addClass('blue');
// 		var xcord = $(this).data('row');
// 		var ycord = $(this).data('column');
// 		$('div[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('default').addClass('blue');
// 		$('div[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('default').addClass('blue');
// 		$('div[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('default').addClass('blue');
// 		$('div[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('default').addClass('blue');
// 	});
// });

// step 2
// $(document).ready(function(){
// 	$("body").on('click',".span1",function() {
// 		$(this).removeClass('default red').addClass('blue');
// 		var xcord = $(this).data('row');
// 		var ycord = $(this).data('column');
// 		$('div[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('default red').addClass('blue');
// 		$('div[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('default red').addClass('blue');
// 		$('div[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('default red').addClass('blue');
// 		$('div[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('default red').addClass('blue');
// 	});
// 	// $("body").on('click',".span1",function() {
// 	// 	$(this).removeClass('default blue').addClass('red');
// 	// 	var xcord = $(this).data('row');
// 	// 	var ycord = $(this).data('column');
// 	// 	$('div[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('default blue').addClass('red');
// 	// 	$('div[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('default blue').addClass('red');
// 	// 	$('div[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('default blue').addClass('red');
// 	// 	$('div[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('default blue').addClass('red');
// 	// });
// });
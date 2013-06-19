$(document).ready(function(){
	var turn = true;
	var xhigh = 5;
	var xlow = 1;
	var yhigh = 5;
	var ylow = 1;

// To build a row
// Check if x -1 or x + 1 exists
// if it doesn't 
// count columns
// clone row you're in
// remove colors
// update x y coords on tds
// update x coord on row

// to build column
// check if y -1 or y + 1 exists
// if not
// count rows
// add tds to each existing row
/////////////////////In here expansion logic/////////////////////////////////
	// $("table").on('click',"td",function() {
	// 	var xcord = $(this).data('row');
	// 	var ycord = $(this).data('column');

	// 	if((xcord + 1) > xhigh) {
	// 		xhigh += 1;
	// 		$('tr[data-row="' + xcord + '"]').clone(false)
	// 	}
	// 	if((xcord - 1) < xlow) {
	// 		xlow -= 1;
	// 	}
	// 	if((ycord + 1) > yhigh) {
	// 		yhigh += 1;
	// 	}
	// 	if((ycord -1) < ylow) {
	// 		ylow -= 1;
	// 	}

	// 	if(turn === true) {
//////////////////////////////////////////////////////
			$(this).removeClass('red').addClass('blue');
			$('td[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('red').addClass('blue');
			$('td[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('red').addClass('blue');
			$('td[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('red').addClass('blue');
			$('td[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('red').addClass('blue');
			turn = false;

		} else if(turn === false) {

			$(this).removeClass('blue').addClass('red');
			$('td[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('blue').addClass('red');
			$('td[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('blue').addClass('red');
			$('td[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('blue').addClass('red');
			$('td[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('blue').addClass('red');
			turn = true;

		}

	});

});



// version 1
// $(document).ready(function(){
// 	var turn = true;

// 	$("table").on('click',"td",function() {
// 		var xcord = 0;
// 		var ycord = 0;

// 		if(turn === true) {
// 			$(this).removeClass('red').addClass('blue');
// 			xcord = $(this).data('row');
// 			ycord = $(this).data('column');
// 			$('td[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('red').addClass('blue');
// 			$('td[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('red').addClass('blue');
// 			$('td[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('red').addClass('blue');
// 			$('td[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('red').addClass('blue');
// 			turn = false;
// 		} else if(turn === false) {
// 			$(this).removeClass('blue').addClass('red');
// 			xcord = $(this).data('row');
// 			ycord = $(this).data('column');
// 			$('td[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('blue').addClass('red');
// 			$('td[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('blue').addClass('red');
// 			$('td[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('blue').addClass('red');
// 			$('td[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('blue').addClass('red');
// 			turn = true;
// 		}

// 	});

// });
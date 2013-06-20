$(document).ready(function(){
	//THESE VARS NEED TO BE SET OUTSIDE OF CLICK HANDLER
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
	//CLICK HANDLER
	$("table").on('click',"td",function() {
		//CAPTURE X,Y COORDINATE FROM CELL CLICKED ON.
		var xcord = $(this).data('row');
		var ycord = $(this).data('column');

		//HANDLE EXPANDING ROW DOWN
		if((xcord + 1) > xhigh) {
			xhigh += 1;
			$newrow = $('tr[data-row="' + xcord + '"]').clone();
			($newrow).insertAfter('tr[data-row="' + xcord + '"]');
			//need to add correct data-row for tr
			//need to add correct data-row for every td
			//need to correct xy coordinates in td
		}
		//HANDLE EXPANDING ROW UP
		if((xcord - 1) < xlow) {
			xlow -= 1;
			$newrow = $('tr[data-row="' + xcord + '"]').clone(false);
			($newrow).insertBefore('tr[data-row="' + xcord + '"]');
		}
		//HANDLE EXPANDING COLUMNS RIGHT
		if((ycord + 1) > yhigh) {
			yhigh += 1;
		}
		//HANDLE EXPANDING COLUMNS LEFT
		if((ycord -1) < ylow) {
			ylow -= 1;
		}
		//IF HANDLES ALTERNATING BETWEEN BLUE AND RED TURNS
		if(turn === true) {
			//BLUE TURN
			$(this).removeClass('red').addClass('blue');
			$('td[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('red').addClass('blue');
			$('td[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('red').addClass('blue');
			$('td[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('red').addClass('blue');
			$('td[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('red').addClass('blue');
			turn = false;

		} else if(turn === false) {
			//RED TURN
			$(this).removeClass('blue').addClass('red');
			$('td[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('blue').addClass('red');
			$('td[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('blue').addClass('red');
			$('td[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('blue').addClass('red');
			$('td[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('blue').addClass('red');
			turn = true;

		}

	});

});
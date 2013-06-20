$(document).ready(function(){
	//THESE VARS NEED TO BE SET OUTSIDE OF CLICK HANDLER
	var turn = true;
	var xhigh = 5;
	var xlow = 1;
	var yhigh = 5;
	var ylow = 1;
	var $newrow = '';

	//CLICK HANDLER
	$("table").on('click',"td",function() {
		//CAPTURE X,Y COORDINATE FROM CELL CLICKED ON.
		var xcord = $(this).data('row');
		var ycord = $(this).data('column');

		//HANDLE EXPANDING ROW DOWN
		if((xcord + 1) > xhigh) {
			xhigh += 1;
			$newrow = $('td[data-row="' + xcord + '"]').parent().clone();
			$newrow.find('td').attr('data-row', xhigh);
			$(this).parent().parent().append($newrow);
		}
		//HANDLE EXPANDING ROW UP
		if((xcord - 1) < xlow) {
			xlow -= 1;
			$newrow = $('td[data-row="' + xcord + '"]').parent().clone();
			$newrow.find('td').attr('data-row', xlow);
			$(this).parent().parent().prepend($newrow);
		}
		//HANDLE EXPANDING COLUMNS RIGHT
		if((ycord + 1) > yhigh) {
			yhigh += 1;
			$('td[data-column="' + ycord + '"]').each(function(){
				tempxcord = $(this).data('row');
				$(this).parent().append('<td data-row="' + tempxcord+ '" data-column="' + yhigh + '"></td>')
			});
		}
		//HANDLE EXPANDING COLUMNS LEFT
		if((ycord -1) < ylow) {
			ylow -= 1;
			$('td[data-column="' + ycord + '"]').each(function(){
				tempxcord = $(this).data('row');
				$(this).parent().prepend('<td data-row="' + tempxcord+ '" data-column="' + ylow + '"></td>')
			});
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

		} //END IF STATEMENT
	}); //END CLICK HANDLER
});
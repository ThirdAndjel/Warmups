$(document).ready(function(){
	$("body").on('click',".span1",function() {
		$(this).removeClass('default').addClass('blue');
		var xcord = $(this).data('row');
		var ycord = $(this).data('column');
		$('div[data-row="' + (xcord + 1) + '"][data-column="' + ycord + '"]').removeClass('default').addClass('blue');
		$('div[data-row="' + (xcord - 1) + '"][data-column="' + ycord + '"]').removeClass('default').addClass('blue');
		$('div[data-column="' + (ycord + 1) + '"][data-row="' + xcord + '"]').removeClass('default').addClass('blue');
		$('div[data-column="' + (ycord - 1) + '"][data-row="' + xcord + '"]').removeClass('default').addClass('blue');
	});
});
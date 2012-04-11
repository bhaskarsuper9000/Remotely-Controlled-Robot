$(document).ready(function() {

	$("#up").click(function() {
	  move(0,-4);
	});

	$('#down').click(function(){
		move(0,4)
	});

	$('#left').click(function(){
		move(-4,0)
	});

	$('#right').click(function(){
		move(4,0)
	});
	
	$('#stop').click(function(){
		move(0,0)
	});
});

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
	
	$("#up").mouseover(function() {
	 	$("#up").attr('src','./images/up_hover.png');
	});
	$("#up").mouseout(function() {
	 	$("#up").attr('src','./images/up.png');
	});
	
	$("#down").mouseover(function() {
	 	$("#down").attr('src','./images/down_hover.png');
	});
	$("#down").mouseout(function() {
	 	$("#down").attr('src','./images/down.png');
	});
	
	$("#left").mouseover(function() {
	 	$("#left").attr('src','./images/left_hover.png');
	});
	$("#left").mouseout(function() {
	 	$("#left").attr('src','./images/left.png');
	});
	
	$("#right").mouseover(function() {
	 	$("#right").attr('src','./images/right_hover.png');
	});
	$("#right").mouseout(function() {
	 	$("#right").attr('src','./images/right.png');
	});
	
	$("#stop").mouseover(function() {
	 	$("#stop").attr('src','./images/stop_hover.png');
	});
	$("#stop").mouseout(function() {
	 	$("#stop").attr('src','./images/stop.png');
	});

});

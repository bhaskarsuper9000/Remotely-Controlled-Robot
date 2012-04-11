$(function() {
	$( "#tabs" ).tabs();
});

$(function() {
	$( "#left_slider-vertical" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 255,
		value: 10,
		slide: function( event, ui ) {
			$( "#left_amount" ).val( ui.value );
		}
	});
	$( "#left_amount" ).val( $( "#left_slider-vertical" ).slider( "value" ) );
	
	$("#left_slider-vertical").mouseup(function(){
		$.post("./utilities/setVelocity.php",{ botId: botId, left_vel: $( "#left_slider-vertical" ).slider( "value" ), right_vel: -1 })
	});

});

$(function() {
	$( "#right_slider-vertical" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 255,
		value: 10,
		slide: function( event, ui ) {
			$( "#right_amount" ).val( ui.value );
		}
	});
	$( "#right_amount" ).val( $( "#right_slider-vertical" ).slider( "value" ) );
	
	$("#right_slider-vertical").mouseup(function(){
		$.post("./utilities/setVelocity.php",{ botId: botId, left_vel: -1, right_vel: $( "#right_slider-vertical" ).slider( "value" ) })
	});
});

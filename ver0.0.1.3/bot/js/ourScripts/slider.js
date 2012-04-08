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
});

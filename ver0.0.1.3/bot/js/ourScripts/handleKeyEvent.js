document.addEventListener('keydown', function(e) {
	if(e.keyCode in keys) {
		e.preventDefault();
		keys[e.keyCode] = MIN_DELTA;
		move(keys[39] - keys[37], keys[40] - keys[38])
	}
}, false);

document.addEventListener('keyup', function(e) {
	if(e.keyCode in keys) {
		e.preventDefault();
		keys[e.keyCode] = 0
	}
}, false);

function ajaxSuccess()
{
	/*AJAX Funcion*/
	$.ajax({                                      
		url: './utilities/getChord.php',              //the script to call to get data
		type:'POST',
		data: {'botId': botId},                    //you can insert url argumnets here to pass to api.php...for example "id=5&parent=6"
		dataType: 'json',                //data format      
		success: function(data)          //on recieve of reply
		{
			botInfo = data;
			//x = parseInt(data[4]);           //get id
			//y = parseInt(data[5]);           //get name
			calcBotPosition();
			draw(scale, x, y);
			updateSensorValues();
		}
	});
	/*AJAX Function END*/
	
}
function move(deltaX, deltaY) {
	prevActionTaken = { x: deltaX, y: deltaY };
    //alert(deltaX +","+ deltaY+" ");
	//alert(keys[38]+","+keys[40]+","+keys[37]+","+keys[39]);
	$.ajax({
		url:'./utilities/DBwrite.php',
		type:'POST',
		data:{'botId': botId, 'x':deltaX, 'y':deltaY},
		success:setTimeout('ajaxSuccess()',3000)
	});
}

var MIN_DELTA = 4; // pixels to move by
  
var keys = { /*up*/38:0, /*down*/40:0, /*left*/37:0, /*right*/39:0 };
 
function ajaxSuccess(data)
{
	//if(data=="yes")
	alert(data);
}
function move(deltaX, deltaY) {
	var value = deltaX
    alert(deltaX +","+ deltaY+" ");
	$.ajax({
		url:'../../utilities/DBwrite.php',
		type:'POST',
		data:{'x':deltaX , 'y':deltaY},
		success:ajaxSuccess
	});
}

document.addEventListener('keydown', function(e) {
  if(e.keyCode in keys) {
    keys[e.keyCode] = MIN_DELTA;
    move(keys[39] - keys[37], keys[40] - keys[38])
  }
}, false);

document.addEventListener('keyup', function(e) {
  if(e.keyCode in keys) {
    keys[e.keyCode] = 0;
    move(keys[39] - keys[37], keys[40] - keys[38])
  }
}, false);

/*	At some point, we figured out that this baby had no way of initializing common stuff
	which was precisely the time when this file was made. All initializations hereafter
	shall reside in here. Ironically, this is not the 1st javascript loaded coz otherwise
	it would not be able to use UI refresh functions from other files.
*/

function restoreSession(){
	//at this point the session code has been called, so check to see if this user had previously 
	//logged out without unloading the bot. If so, retrive all values & initialize interface, etc.
	
	$.post("./utilities/checkSession.php", function(data){
		if( data != "-1" ){
			//unsophisticated user :P Do some housekeeping for him
			botId = parseInt(data);
			loadBot();
		}
	});
}

$(document).ready( function(){
	setTimeout( 'restoreSession()', 500 );	//this prevents the draw function from getting called before canvas.getContext('2d')
});

function updateBotList(){
	$.ajax({                                      
		url: './utilities/updateBotList.php',              //the script to call to get data          
		data: "",                        //you can insert url argumnets here to pass to api.php...for example "id=5&parent=6"
		dataType: 'json',                //data format      
		success: function(data)          //on recieve of reply
		{
			$('#avail').html('');
			$('#botsInUse').html('');
			if(data != ''){
				for(var i=0; i< data.length; i++){
					var temp = data[i].split(":");
					if(temp[1] == 0){
						$('#avail').append('<li><h3 id='+temp[0]+' style=\'color:green;\'>'+temp[0]+'</h3></li>');
					}else{
						$('#botsInUse').append('<li><h3 id='+temp[0]+' style=\'color:red;\'>'+temp[0]+'</h3></li>');
					}
				}
			}
		}
	});
}

$(document).ready(function() {
	self.setInterval('updateBotList()',5000);	//long delay added to time being so as to prevent overload during testing
});

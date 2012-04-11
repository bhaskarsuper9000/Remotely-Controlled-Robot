function updateBotList(){
	$.ajax({                                      
		url: './utilities/updateBotList.php',              //the script to call to get data          
		data: "",                        //you can insert url argumnets here to pass to api.php...for example "id=5&parent=6"
		dataType: 'json',                //data format      
		success: function(data)          //on recieve of reply
		{
			
		}
	});
}

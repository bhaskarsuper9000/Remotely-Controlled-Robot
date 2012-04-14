//some handy functions which are used during loading, unloading & refreshing the GUI
function initWithDefaultValues(){
	botInfo = ["0", "0", "0:0:0:0:0:0:0:0:0", "0:0:0:0:0:0:0:0:0:0:0:0", "0","0", "0", "10", "10","0","0"];
	x = 0;//142.5;
	y = 0;//147.5;
	scale = 1.0;

	/* handleKeyEvent.js */
	prevActionTaken = {x:0 ,y:0};

	/* botPosition.js */
	lCount = 0;
	rCount = 0;
	dist = 0; theta = 0; alpha = 0;
	botX = 0; botY = 0;
	
	//also some functions probably need to be called here
	$( "#left_slider-vertical" ).slider({
		value: 10
	});
	$( "#left_amount" ).val( 10 );
	
	$( "#right_slider-vertical" ).slider({
		value: 10
	});
	$( "#right_amount" ).val( 10 );
	
	updateSensorValues();
	draw(scale,x,y);
	
}

function loadGlobalValues(){
	x = parseInt(botInfo[9]);
	y = parseInt(botInfo[10]);

	/* handleKeyEvent.js */
	prevActionTaken = {x:0 ,y:0};

	/* botPosition.js */

	lCount = 0;
	rCount = 0;
	dist = 0; theta = 0; alpha = parseFloat(botInfo[6]);
	botX = parseFloat(botInfo[4]); botY = parseFloat(botInfo[5]);
	
	$( "#left_slider-vertical" ).slider({
		value: parseInt(botInfo[7])
	});
	$( "#left_amount" ).val( $( "#left_slider-vertical" ).slider( "value" ) );
	
	$( "#right_slider-vertical" ).slider({
		value: parseInt(botInfo[8])
	});
	$( "#right_amount" ).val( $( "#right_slider-vertical" ).slider( "value" ) );
	
	//also some functions need to be called here
	updateSensorValues();
	draw(scale,x,y);
	
}

function assembleBotInfo(){
	botInfo[9] = x;
	botInfo[10] = y;
	
	botInfo[6] = alpha;
	botInfo[4] = botX;
	botInfo[5] = botY;
	
	/*
	var sensorVal = botInfo[2];
	sensorVal = sensorVal.split(":");
	var newBotInfo = "";

	for(var i=0; i < 7; i++){
		newBotInfo = newBotInfo + sensorVal[i] + ":";
	}
	newBotInfo += "0:0";
	botInfo[2] = newBotInfo;
	*/
}

function loadBot(){
	//read PSW
	/*
	$.post("./utilities/getChord.php",{botId: botId},function(data){
		botInfo = data;
	});
	*/
	$.ajax({                                      
		url: './utilities/getChord.php',              //the script to call to get data
		type:'POST',
		data: {'botId': botId},                        //you can insert url argumnets here to pass to api.php...for example "id=5&parent=6"
		dataType: 'json',                //data format      
		success: function(data)          //on recieve of reply
		{
			if(data != ""){
				botInfo = data;
				loadGlobalValues();		//load the values in respective global vars(except botInfo)
			}else{
				
			}
		} 
	});
	
	

}

function unloadBot(){
	assembleBotInfo();

	//write PSW
	$.ajax({                                      
		url: './utilities/setPSW.php',              //the script to call to get data
		type:'POST',
		data: {'botId': botId, 'b0': botInfo[0], 'b1': botInfo[1], 'b2': botInfo[2], 'b3': botInfo[3], 'b4': botInfo[4], 'b5': botInfo[5], 'b6': botInfo[6], 'b7': botInfo[7], 'b8': botInfo[8], 'b9':x, 'b10':y },
		dataType: 'json',                //data format      
		success: function(data)          //on recieve of reply
		{
			
		}
	});
	
	//initialize values in global vars
	initWithDefaultValues();
	
}

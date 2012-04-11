//some handy functions which are used during loading, unloading & refreshing the GUI
function initWithDefaultValues(){
	botInfo = ["0", "0", "0:0:0:0:0:0:0:0:0", "0:0:0:0:0:0:0:0:0:0:0:0", "0", "0", "0", "0","0","0"];
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
	
	//also some functions need to be called here
	
}

function loadValues(){
	x = botInfo[];//142.5;
	y = 0;//147.5;
	scale = 1.0;

	/* handleKeyEvent.js */
	prevActionTaken = {x:0 ,y:0};

	/* botPosition.js */
	lCount = 0;
	rCount = 0;
	dist = 0; theta = 0; alpha = 0;
	botX = 0; botY = 0;
	
	//also some functions need to be called here
	
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
				
			}else{
				//load the values in respective global vars(except botInfo)
				loadValues();
			}
		} 
	});
	
	

}

function unloadBot(){
	//write PSW
	$.ajax({                                      
		url: './utilities/setPSW.php',              //the script to call to get data
		type:'POST',
		data: {'botId': botId, 'b0': botInfo[0], 'b1': botInfo[1], 'b2': botInfo[2], 'b3': botInfo[3], 'b4': botInfo[4], 'b5': botInfo[5], 'b6': botInfo[6], 'b7': botInfo[7], 'b8': botInfo[8], 'b9':botInfo[9] },
		dataType: 'json',                //data format      
		success: function(data)          //on recieve of reply
		{
			
		}
	});
	
	//initialize values in global vars
	initWithDefaultValues();
	
}

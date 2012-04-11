// This file includes functions for updating the canvas and global ver for storing botinfo

function draw(scale, x, y){

	//canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	// clear canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "#0000ff";
	context.save();
				
	context.translate(x, y);
	context.scale(scale, scale);

	context.beginPath(); // begin
					
	context.arc( botX, botY, 2, 0, Math.PI*2, true);
	context.moveTo(0,0);
					
	context.closePath(); // end

	context.strokeStyle = "#0000ff";
	context.stroke();
	context.restore();
}

            

window.onload = function(){
	var scaleMultiplier = 0.7; // Little story behind this value... Ask me if you read this.
	var startDragOffset = {};
	var mouseDown = false;
	var dx = 5, dy = 5;
	
	canvas = document.getElementById("myCanvas");
				
				
	/*AJAX Funcion*/
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
				//alert ('Nothing received :P :P');  //these if-else will prevent some variables being set to NaN 
			}
			//x = parseInt(data[4]);              //get id
			//y = parseInt(data[5]);           //get name
			//draw(scale, x, y);
		} 
	});
	/*AJAX Function END*/
    
	// add button event listeners
	document.getElementById("plus").addEventListener("click", function(){
		if(scale < 4){
			scale /= scaleMultiplier; //This is due to the fact that division increases the value in case of desimal 
			draw(scale, x, y);
		}
	}, false);

                
	document.getElementById("minus").addEventListener("click", function(){
		if(scale > 0.3){
        	scale *= scaleMultiplier; //Reverse for the multiplication
			draw(scale, x, y);
		}
	}, false);



	// adding event listners for panning

    canvas.addEventListener("mousedown", function(evt){
		mouseDown = true;
		//Calculating the value by wich pan happens...
		startDragOffset.x = evt.clientX - x;
		startDragOffset.y = evt.clientY - y;
	});

                

    canvas.addEventListener("mouseup", function(evt){
		mouseDown = false;
	});

   	canvas.addEventListener("mouseover", function(evt){
		mouseDown = false;
	});

	canvas.addEventListener("mouseout", function(evt){
		mouseDown = false;
	});

	canvas.addEventListener("mousemove", function(evt){
		if (mouseDown) {
			x = evt.clientX - startDragOffset.x;
			y = evt.clientY - startDragOffset.y;
			draw(scale, x, y);
		}
    });

};


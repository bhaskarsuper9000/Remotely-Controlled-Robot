/*Used for encoder calculations*/

var tempDist;

function avg(a, b){
	return ( parseInt(a)+parseInt(b) )/2;
}
function calcBotPosition(){

	var sensorVal = botInfo[2];
	
	if(sensorVal == "")
		return;
	sensorVal = sensorVal.split(":");
	lCount = sensorVal[7];
	rCount = sensorVal[8];

//previous code that handled all the ideal as well as non-ideal cases
/*
	if( (prevActionTaken.x == 0 ) && (prevActionTaken.y == -4) ){			//forward

		if(lCount == rCount){
			tempDist = parseFloat(lCount) * 12.92;	//in mm
			dist = Math.sqrt( dist*dist + tempDist*tempDist - 2*dist*tempDist*Math.cos(Math.PI-alpha+theta) );
			theta += Math.asin(Math.sin(Math.PI-alpha+theta) * tempDist / dist );
		}
		else if(lCount < rCount){
			dist += parseFloat(lCount) * 12.92;	//in mm
			theta += parseFloat((rCount-lCount))*6.42;	//in degrees
			dist += Math.sqrt( 6728 - 6728 * Math.cos(parseFloat((rCount-lCount))*6.42) );	//in mm (by cosine rule)
		}
		else{
			dist += parseFloat(rCount) * 12.92;	//in mm
			theta -= parseFloat((lCount-rCount))*6.42;	//in degrees
			dist += Math.sqrt( 6728 - 6728 * Math.cos(parseFloat((lCount-rCount))*6.42) );	//in mm (by cosine rule)
		}

	}
	else if( (prevActionTaken.x == 0) && (prevActionTaken.y == 4) ){		//backward

		if(lCount == rCount){
			dist -= parseFloat(lCount) * 12.92;	//in mm
		}
		else if(lCount < rCount){
			dist -= parseFloat(lCount) * 12.92;	//in mm
			theta -= parseFloat((rCount-lCount))*6.42;	//in degrees
			dist -= Math.sqrt( 6728 - 6728 * Math.cos(parseFloat((rCount-lCount))*6.42) );	//in mm (by cosine rule)
		}
		else{
			dist -= parseFloat(rCount) * 12.92;	//in mm
			theta += parseFloat((lCount-rCount))*6.42;	//in degrees
			dist -= Math.sqrt( 6728 - 6728 * Math.cos(parseFloat((lCount-rCount))*6.42) );	//in mm (by cosine rule)
		}

	}
	else if( (prevActionTaken.x == -4) && (prevActionTaken.y == 0) ){		//left
	
		if(lCount == rCount){
			theta += parseFloat(lCount) * 12.85;	//in degrees
		}
		else if(lCount < rCount){
			theta += parseFloat(lCount)*12.85;	//in degrees
			theta += parseFloat((rCount-lCount))*6.42;	//in degrees
			dist += Math.sqrt( 6728 - 6728 * Math.cos(parseFloat((rCount-lCount))*6.42) );	//in mm (by cosine rule)
		}
		else{
			theta += parseFloat(rCount)*12.85;	//in degrees
			theta += parseFloat(lCount - rCount)*6.42;	//in degrees
			dist -= Math.sqrt( 6728 - 6728 * Math.cos(parseFloat(lCount-rCount)*6.42) );	//in mm (by cosine rule)
		}
	
	}
	else if( (prevActionTaken.x == 4) && (prevActionTaken.y == 0) ){		//right

		if(lCount == rCount){
			theta -= parseFloat(lCount) * 12.85;	//in degrees
		}
		else if(lCount < rCount){
			theta -= parseFloat(lCount)*12.85;	//in degrees
			theta -= parseFloat(rCount-lCount)*6.42;	//in degrees
			dist -= Math.sqrt( 6728 - 6728 * Math.cos(parseFloat(rCount-lCount)*6.42) );	//in mm (by cosine rule)
		}
		else{
			theta -= parseFloat(rCount)*12.85;	//in degrees
			theta -= parseFloat(lCount - rCount)*6.42;	//in degrees
			dist += Math.sqrt( 6728 - 6728 * Math.cos(parseFloat(lCount-rCount)*6.42) );	//in mm (by cosine rule)
		}
	
	}
*/
	
	//new code that handles only ideal cases (constants choosen from Spark V manual)
	//convert back to mm
	//botX = botX * 10;	//in cm
//	botY = botY * 10;	//in cm
	
	
	if( (prevActionTaken.x == 0 ) && (prevActionTaken.y == -4) ){			//forward

			lCount = avg(lCount,rCount);
			tempDist = parseFloat(lCount) * 12.92;	//in mm
			
			botX = botX + (tempDist * Math.cos(alpha));
			botY = botY + (tempDist * Math.sin(alpha));
			
	}
	else if( (prevActionTaken.x == 0) && (prevActionTaken.y == 4) ){		//backward

			lCount = avg(lCount,rCount);
			tempDist = parseFloat(lCount) * 12.92;	//in mm
			
			botX = botX - tempDist * Math.cos(alpha);
			botY = botY - tempDist * Math.sin(alpha);
			
	}
	else if( (prevActionTaken.x == -4) && (prevActionTaken.y == 0) ){		//left
	
			lCount = avg(lCount,rCount);
			alpha = (parseFloat(alpha) + (parseInt(lCount) * 12.85 * Math.PI / 180));	//in radians

	}
	else if( (prevActionTaken.x == 4) && (prevActionTaken.y == 0) ){		//right

			lCount = avg(lCount,rCount);
			alpha = parseFloat(alpha) - (parseInt(lCount) * 12.85 * Math.PI / 180);	//in radians

	}
	
	//wrap angle
	//alpha %= 2*Math.PI;
	
	
	//convert back to mm
	//botX /= 10;	//in cm
//	botY /= 10;	//in cm
	
	
/*	var newBotInfo = "";

	for(var i=0; i < 7; i++){
		newBotInfo = newBotInfo + sensorVal[i] + ":";
	}
	newBotInfo += "0:0";
	botInfo[2] = newBotInfo;
*/
	//draw(scale,x,y);
}

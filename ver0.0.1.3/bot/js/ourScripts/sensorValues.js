function updateSensorValues(){
	var sensorVal = botInfo[2];
	sensorVal = sensorVal.split(":");
	
	$(".irSensors").html("<p>" + "Left IR : " + sensorVal[0] + "&nbsp;&nbsp;|&nbsp;&nbsp;Center IR : "  + sensorVal[1] + "&nbsp;&nbsp;|&nbsp;&nbsp;Right IR : "  + sensorVal[2] + "</p>");
	$(".lineSensors").html("<p>" + "Left LS : " + sensorVal[3] + "&nbsp;&nbsp;|&nbsp;&nbsp;Center LS : "  + sensorVal[4] + "&nbsp;&nbsp;|&nbsp;&nbsp;Right LS : "  + sensorVal[5] + "</p>");
	$(".vector").html("<p>" + botX + "&nbsp;&nbsp;" + (botY>=0?"+&nbsp;&nbsp;j":"-&nbsp;&nbsp;j") + "&nbsp;" + Math.abs(botY) + "</p>");
	
	var voltageValue;
	if(botId != -1){
		voltageValue = parseFloat(parseInt(sensorVal[6]) * 0.03921 + 0.7);
	}else{
		voltageValue = 0;
	}
	
	$(".voltage").html("&nbsp;&nbsp;&nbsp;&nbsp;"+ voltageValue + " V" + "<br/><div id='batteryMeterWrapper'><div id='batteryMeter'></div></div>");
	
	// Progressbar
	var percentFull = voltageValue / 10.69855 * 100;
	$("#batteryMeter").progressbar({	value: percentFull	});
}

$(document).ready( function(){
	updateSensorValues()
});

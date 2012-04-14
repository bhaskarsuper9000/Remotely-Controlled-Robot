function isChecked(temp)
{
	
	if(document.getElementById(temp).checked) 
	{
		alert("hihfhdfjhdf");
	}
	else
	{
			alert("hi1");
	}
	
}

function loadValues(portVal)
{
		var k,i,j=1;
			for(k=0;k<12;k++)
			{
				for(i=128; i>=1 ;i/=2)
				{
					if((portVal[k] & i) != 0)
					{
						var temp = "#a"+j;
						$(temp).prop("checked",true);		
					}
					j++;	
				}
			}
}

function changeOnePort(portVal,start)
{
	var i ,j = start;
	for(i=128; i>=1 ;i/=2)
				{
					var temp = "#a"+j;
					if((portVal & i) != 0)
					{
						$(temp).prop("checked",true);		
					}
					else
					{
						$(temp).prop("checked",false);	
					}
					j++;	
					
				}
}

function calculatePORTvalue(eightValue,textFieldValue)
{
		var i ;
		var dec = eightValue[0]*128 + eightValue[1] * 64 +eightValue[2] * 32 + eightValue[3] * 16 + eightValue[4] * 8 + eightValue[5] * 4 + eightValue[6] * 2 + eightValue[7] * 1 ;
		
		$(textFieldValue).val(dec);
}



function readValues()
{
	$.ajax({                                      
		url: './utilities/getChord.php',              //the script to call to get data          
		type:'POST',
		data: {'botId': botId},
		dataType: 'json',                //data format      
		success: function(data)          //on recieve of reply
		{
			botInfo = data;
			var portVal = botInfo[3];
			portVal = portVal.split(":");
			var d,temp;
			for(d=0;d<12;d++)
			{
				temp = "#port"+String.fromCharCode('a'.charCodeAt() + d);
				$(temp).val(portVal[d]);
			}
			
			loadValues(portVal)			
		}
	});

}


$(function(){
	$("#read").click(function(){					
		$.post("./utilities/requestPortValues.php",{ botId: botId },function(){
			setTimeout("readValues()",1000)
		});															
	});
});

$(function(){
	$("#update").click(function(){						
		$.post("./utilities/sendPortValues.php",{ botId:botId, porta:$("#porta").val(), portb:$("#portb").val(), portc:$("#portc").val(), 
												  portd:$("#portd").val(), porte:$("#porte").val(), portf:$("#portf").val(),
												  portg:$("#portg").val(), porth:$("#porth").val(), porti:$("#porti").val(),
												  portj:$("#portj").val(), portk:$("#portk").val(), portl:$("#portl").val() 
		});   
	});
});

$(function(){
	$("#send").click(function(){							
		$.post("./utilities/printString.php",{ botId:botId, sendString:$("#sendString").val()
		});   
	});
	
	$("#porta").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,1);		
	});
	
	$("#portb").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,9);		
	});
	
	$("#portc").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,17);		
	});
	
	$("#portd").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,25);		
	});
	
	$("#porte").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,33);		
	});
	
	$("#portf").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,41);		
	});
	
	$("#portg").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,49);		
	});
	
	$("#porth").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,57);		
	});
	
	$("#porti").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,65);		
	});
	
	$("#portj").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,73);		
	});

	$("#portk").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,81);		
	});
	
	$("#portl").keyup(function(){
		var portVal = this.value;
		changeOnePort(portVal,89);		
	});	
	
	$(".port").change(function()
	{
 
   
    var value_eight = new Array(0,0,0,0,0,0,0,0);	
    var port_names = new Array("#porta","#portb","#portc","#portd","#porte","#portf","#portg","#porth","#porti","#portj","#portk","#portl") ;	
		var i, j ;
		var k,m  = 8;
		for(k = 0 ; k < 12 ; k ++)
		{
			
				if( $('#a'+((k*m)+1)).attr('checked')||$('#a'+ ((k*m)+2)).attr('checked')||$('#a'+((k*m)+3)).attr('checked')||$('#a'+((k*m)+4)).attr('checked')
				||$('#a'+((k*m)+5)).attr('checked')||$('#a'+((k*m)+6)).attr('checked')||$('#a'+((k*m)+7)).attr('checked')||$('#a'+ ((k*m)+8)).attr('checked') )
				{
					j = (k*m)+1 ;
					for(i = 0 ; i < 8 ; i ++ )
					{
						if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
						j ++ ;
					}
					calculatePORTvalue(value_eight,port_names[k]);
				
					for(i = 0 ; i < 8 ; i ++)
						value_eight[i] = 0 ;
						
						//m = m + 8 ;			
			 }
			 else
			 {
			 		var zero = 0 ;
			 		$(port_names[k]).val(zero);
			 }
		}
				
	});

	
	
		
	
});

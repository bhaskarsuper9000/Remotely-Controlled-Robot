function readValues()
{
	$.ajax({                                      
		url: './utilities/getChord.php',              //the script to call to get data          
		data: "",                        //you can insert url argumnets here to pass to api.php...for example "id=5&parent=6"
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
	});

}


$(function(){
	$("#read").click(function(){					
		$.post("./utilities/requestPortValues.php",function(){
			setTimeout("readValues()",1000)
		});															
	});
});

$(function(){
	$("#update").click(function(){						
		$.post("./utilities/sendPortValues.php",{ porta:$("#porta").val(), portb:$("#portb").val(), portc:$("#portc").val(), 
																portd:$("#portd").val(), porte:$("#porte").val(), portf:$("#portf").val(),
																portg:$("#portg").val(), porth:$("#porth").val(), porti:$("#porti").val(),
																portj:$("#portj").val(), portk:$("#portk").val(), portl:$("#portl").val() 
		});   
	});
});

$(function(){
	$("#send").click(function(){							
		$.post("./utilities/printString.php",{ sendString:$("#sendString").val()
		});   
	});
});

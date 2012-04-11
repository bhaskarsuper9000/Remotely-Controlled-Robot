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
			
			loadValues(portVal)			
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
		var k,m  = 0;
	/*	for(k = 0 ; k < 12 ; k ++)
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
						
						m = m + 8 ;			
			 }
			 else
			 {
			 		var zero = 0 ;
			 		$(port_names[k]).val(zero);
			 }
		} */
		
		
		
		
			if( $('#a1').attr('checked')||$('#a2').attr('checked')||$('#a3').attr('checked')||$('#a4').attr('checked')
		||$('#a5').attr('checked')||$('#a6').attr('checked')||$('#a7').attr('checked')||$('#a8').attr('checked') )
		{
				j = 1 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#porta');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
	
			if( $('#a9').attr('checked')||$('#a10').attr('checked')||$('#a11').attr('checked')||$('#a12').attr('checked')
		||$('#a13').attr('checked')||$('#a14').attr('checked')||$('#a15').attr('checked')||$('#a16').attr('checked') )
		{
				j = 9 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#portb');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
		
		if( $('#a17').attr('checked')||$('#a18').attr('checked')||$('#a19').attr('checked')||$('#a20').attr('checked')
		||$('#a21').attr('checked')||$('#a22').attr('checked')||$('#a23').attr('checked')||$('#a24').attr('checked') )
		{
				j = 17 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#portc');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
		
		if( $('#a25').attr('checked')||$('#a26').attr('checked')||$('#a27').attr('checked')||$('#a28').attr('checked')
		||$('#a29').attr('checked')||$('#a30').attr('checked')||$('#a31').attr('checked')||$('#a32').attr('checked') )
		{
				j = 25 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#portd');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
		
/*---------------------------------------------------------------------------------------------------------*/
		
		if( $('#a33').attr('checked')||$('#a34').attr('checked')||$('#a35').attr('checked')||$('#a36').attr('checked')
		||$('#a37').attr('checked')||$('#a38').attr('checked')||$('#a39').attr('checked')||$('#a40').attr('checked') )
		{
				j = 33 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#porte');
				//resetPORTvalue();
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
				
		} 
		
		if( $('#a41').attr('checked')||$('#a42').attr('checked')||$('#a43').attr('checked')||$('#a44').attr('checked')
		||$('#a45').attr('checked')||$('#a46').attr('checked')||$('#a47').attr('checked')||$('#a48').attr('checked') )
		{
				j = 41 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#portf');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
		
		if( $('#a49').attr('checked')||$('#a50').attr('checked')||$('#a51').attr('checked')||$('#a52').attr('checked')
		||$('#a53').attr('checked')||$('#a54').attr('checked')||$('#a55').attr('checked')||$('#a56').attr('checked') )
		{
				j = 49 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#portg');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
		
		if( $('#a57').attr('checked')||$('#a58').attr('checked')||$('#a59').attr('checked')||$('#a60').attr('checked')
		||$('#a61').attr('checked')||$('#a62').attr('checked')||$('#a63').attr('checked')||$('#a64').attr('checked') )
		{
				j = 57 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#porth');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 		
	/*-------------------------------------------------------------------------------------------------------*/
	
	 if( $('#a65').attr('checked')||$('#a66').attr('checked')||$('#a67').attr('checked')||$('#a68').attr('checked')
		||$('#a69').attr('checked')||$('#a70').attr('checked')||$('#a71').attr('checked')||$('#a72').attr('checked') )
		{
				j = 65 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#porti');
				//resetPORTvalue();
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
				
		} 
		
		if( $('#a73').attr('checked')||$('#a74').attr('checked')||$('#a75').attr('checked')||$('#a76').attr('checked')
		||$('#a77').attr('checked')||$('#a78').attr('checked')||$('#a79').attr('checked')||$('#a80').attr('checked') )
		{
				j = 73 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#portj');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
		
		if( $('#a81').attr('checked')||$('#a82').attr('checked')||$('#a83').attr('checked')||$('#a84').attr('checked')
		||$('#a85').attr('checked')||$('#a86').attr('checked')||$('#a87').attr('checked')||$('#a88').attr('checked') )
		{
				j = 81 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#portk');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
		
		if( $('#a89').attr('checked')||$('#a90').attr('checked')||$('#a91').attr('checked')||$('#a92').attr('checked')
		||$('#a93').attr('checked')||$('#a94').attr('checked')||$('#a95').attr('checked')||$('#a96').attr('checked') )
		{
				j = 89 ;
				for(i = 0 ; i < 8 ; i ++ )
				{
					if($('#a'+j).attr('checked')) value_eight[ i ] = 1 ;
					j ++ ;
				}
				calculatePORTvalue(value_eight,'#portl');
				for(i = 0 ; i < 8 ; i ++)
					value_eight[i] = 0 ;
		} 
				
	});

	
	
		
	
});
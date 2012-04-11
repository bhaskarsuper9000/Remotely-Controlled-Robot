$(function(){
	$("#avail li").live('click',function(){	
		if(botId == -1){

			b_val = $(this).text();
								
			$(this).fadeOut();							
			$.post("updateBotStatus.php",{id:'avail',b_name:b_val},function(data){
				//$("#botsInUse ").append(data);
				updateBotList();
			});
			//updateBotList();	
			botId = b_val;
			loadBot();
			alert('Bot loaded');
		}else{
			alert('Y u no leave resources?');
		}
		//updateBotList();	//comment this after testing is done												
	});
					
	$("#botsInUse li").live('click',function(){	
		b_val = $(this).text();								
		
		if(botId == b_val){
			$(this).fadeOut();
			$.post("updateBotStatus.php",{id:'botsInUse',b_name:b_val},function(data){
				//$("#avail ").append(data);
				updateBotList();
			});
			//updateBotList();
			unloadBot();
			botId = -1;
			alert('Bot unloaded');
		}else{
			if(botId == -1){
				alert('Y u no select a new bot??');
			}else{
				alert('Y u no click own bot??');
			}
		}
		//updateBotList();	//comment this after testing is done
	});
});

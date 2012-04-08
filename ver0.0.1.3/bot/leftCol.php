<?php

?>

		<div class="leftCol yahoo">
		
			<div class="all_onlineBots">
				<div class="line">
			 				<div class="unit chatSize">
		       		 		<h3>Online Bots</h3><hr/>
		        				<ul id="avail">
		        						<?php include('showAvailableBots.php');?>
		        				
		        				</ul>
	    	  				</div>			  
					</div>

			</div>
			
			<div class="inUseBots"> 
		
						<div class="line">
			 				<div class="unit chatSize">
		       		 		<h3>Bots in use</h3><hr/>
		        					<ul id="botsInUse">
		        						<?php include('showInUseBots.php');?>   				
		        				</ul>
	    	  				</div>			  
						</div>				
					
			 </div>
			    
			    <div class="messages">
			    	
			    		<div class="line">
			 				<div class="unit msgSize">
		       		 		<h3>Server Messages</h3><hr/>
		        				<p>Messages from the server..</p>
	    	  				</div>			  
						</div>
			    </div>
			
			
			
		</div> <!-- end of left column-->

<?php

?>
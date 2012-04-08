<?php
	echo "<body onload=\"init();\" onkeyup=\"handleKeyUp(event);\">";
		echo "<div class=\"page\">";
		
			echo "<div class=\"head\"><h3 align=\"center\">Firebird V</h3></div>";
			
			echo "<div class=\"body\">";
			
			//database connectivity
							include('Database.php');
							$X = new DatabaseCon;
							$con = $X->connect();
							$X->selectDB("RCB",$con);


				include('leftCol.php');
				include('rightCol.php');
				include('middleCol.php');
			echo"</div><!-- end of body -->";
			
			include('footer.php');
			
		echo "</div>";
	echo "</body>";
	
?>
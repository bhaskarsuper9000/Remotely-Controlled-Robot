<?php

	
		$X = new DatabaseCon;
		$con = $X->connect();
		$X->selectDB("zandu",$con);
		
		$stmnt = "select bot_id from bot where bot_status=1" ;
		$result = $X->fireQuery($stmnt);
		
		while($row = mysql_fetch_array($result))
		{
				echo "<li><h3 id='bot{$row['bot_id']}' style='color:red;' >{$row['bot_id']}</h3></li>";
		}
		
		$X->closeConnection($con);
?>

<?php

	include('../Database.php');
		$X = new DatabaseCon;
		$con = $X->connect();
		$X->selectDB("zandu",$con);
		
		$stmnt = "select * from bot" ;
		$result = $X->fireQuery($stmnt);
		
		$array = array();
		
		while($row = mysql_fetch_array($result))
		{
				//var echo "<li><h3 id='bot{$row['bot_id']}' style='color:green;'>{$row['bot_id']}</h3></li>";
				$array[] = "{$row['bot_id']}:{$row['bot_status']}" ;
		}
		echo json_encode($array);

		$X->closeConnection($con);
?>

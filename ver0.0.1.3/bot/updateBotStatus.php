<?php
	session_start();
	$b_name = $_POST['b_name'];
	$id = $_POST['id'];
	 
	//list($botname,$botid) = explode("-",$b_name);
	$botid = $b_name;
	
		include('Database.php');
		$X = new DatabaseCon;
		$con = $X->connect();
		$X->selectDB("zandu",$con);
	
	$stmnt = "select bot_status from bot where bot_id='{$botid}'";
	$result = $X->fireQuery($stmnt);
	
	$row = mysql_fetch_array($result);
	if($row['bot_status'] == 0)
	{
		$stmnt = "update bot set bot_status = 1 where bot_id='{$botid}'";
		$X->fireQuery($stmnt);
		
		
	}
	else
	{
		
		$stmnt = "update bot set bot_status = 0 where bot_id='{$botid}'";
		$X->fireQuery($stmnt);
	}
	
	if(strcmp($id,'avail'))
		echo "<li><h3 style='color:green;'>{$b_name}</h3></li>";
	else if(strcmp($id,'botsInUse'))
		echo "<li><h3 style='color:red;'>{$b_name}</h3></li>";
		
	$X->closeConnection($con);
	
?>

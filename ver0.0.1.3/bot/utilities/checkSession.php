<?php
	session_start();
	$uid = $_SESSION['uid'];

	/* Load database class and initialize */	
	include('../Database.php');
	$X = new DatabaseCon;
	$con = $X->connect();
	$X->selectDB("zandu",$con);

	
	/* Check into session table if user has unloaded the bot or not */
	$stmnt = "select * from session where uid='{$uid}'";
	$result = $X->fireQuery($stmnt);
	$row = mysql_fetch_array($result);

	if( $row == "" ){
		echo "-1";
	}else{
		echo $row['bot_id'];
	}
	
	$X->closeConnection($con);
	//echo "done";
?>

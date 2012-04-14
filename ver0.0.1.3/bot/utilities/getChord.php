<?php
	include('../Database.php');
	
	$botId = $_POST['botId'];
	$X = new DatabaseCon;
	$con = $X->connect();
	$X->selectDB("zandu",$con);
	//$stmnt = "select * from user where userid='{$uid}' and passwd='{$pswd}'";
	//$stmnt =  "INSERT into user VALUES('{$uid}','{$pswd}',0)";
	
	$stmnt = "SELECT * FROM `botinfo` WHERE bot_id='{$botId}'";
	$result = $X->fireQuery($stmnt);
	
	$array = mysql_fetch_row($result); 
	echo json_encode($array);
?>

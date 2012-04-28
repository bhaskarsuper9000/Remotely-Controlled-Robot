<?php

	include('../Database.php');
	
	$X = new DatabaseCon;
	$con = $X->connect();
	$X->selectDB("zandu",$con);
	
	$stmnt = "DELETE FROM `botinfo`";
	$result = $X->fireQuery($stmnt);
	
	$stmnt = "DELETE FROM `bot`";
	$result = $X->fireQuery($stmnt);
	
	$stmnt = "DELETE FROM `session`";
	$result = $X->fireQuery($stmnt);
	
	echo "Database reseted.... Bingo \n";
	
	
?>

<a href="../index.php"><font color="red">Go Back To Settings</font></a>

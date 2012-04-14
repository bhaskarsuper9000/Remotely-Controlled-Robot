<?php
	$uid = htmlentities($_POST['name']);
	$pswd = htmlentities($_POST['eid']);
	
	
	//implement security 
	if(($uid && $pswd) )
	{
		include('Database.php');
		$X = new DatabaseCon;
		$con = $X->connect();
		$X->selectDB("zandu",$con);
		//$stmnt = "select * from user where userid='{$uid}' and passwd='{$pswd}'";
		$stmnt =  "INSERT into user VALUES('{$uid}','{$pswd}',0)";
		$result = $X->fireQuery($stmnt);
		
		header('Location:login.php');
	}
	
	else
	{
			
		header('Location:register.php');
	}
?>

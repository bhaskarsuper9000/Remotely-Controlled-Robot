<?php

	session_start();
	if(isset($_SESSION['uid']))
	{
		$action = htmlentities($_POST['id_val']);
		
		$t = date("Y:m:d H:i:s");
		$user = $_SESSION['uid'];

		$botid= 100; // BIGGEST THING TO BE DONE.......... for multiple bots i.e. scalability.

	  require('../Database.php');
		$X = new DatabaseCon();
		$con = $X->connect();
	
		$X->selectDB("RCB",$con);
	
		if(strcmp($action,'Z'))
		{
			$stmnt = "insert into SendToBot values('{$t}','{$user}',$botid,'{$action}')";
	
			$X->fireQuery($stmnt);
		}
		else if(strcmp($action,'U'))
		{
			$stmnt = "insert into SendToBot values('{$t}','{$user}',$botid,'{$action}')";
	
			$X->fireQuery($stmnt);
		}
  }
?>
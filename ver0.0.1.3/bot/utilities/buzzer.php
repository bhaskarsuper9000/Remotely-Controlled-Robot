<?php

	session_start();
	if(isset($_SESSION['uid']))
	{
		$action = htmlentities($_POST['id_val']);
		
		$t = date("Y:m:d H:i:s");
		$user = $_SESSION['uid'];

		$botid= $_POST['botId'];

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

<?php

	session_start();
	if(isset($_SESSION['uid']))
	{
		$botId = $_POST['botId'];
		$leftVelocity = htmlentities($_POST['left_vel']);
		$rightVelocity = htmlentities($_POST['right_vel']);

		
		$t = date("Y:m:d H:i:s");
		$user = $_SESSION['uid'];
		
		require('../Database.php');
		$X = new DatabaseCon();
	
		$con = $X->connect();
	
		$X->selectDB("zandu",$con);


		if( intval($rightVelocity) == -1){
			$stmnt = "update botinfo set l_vel = '{$leftVelocity}' where bot_id= '{$botId}'";	
			$X->fireQuery($stmnt);
			if(intval($botId) != -1){
				$stmnt = "insert into sendtobot values($botId,'{$user}','{$t}','V#{$leftVelocity}#')";
				$X->fireQuery($stmnt);
			}		
		}else if( intval($leftVelocity) == -1){
			$stmnt = "update botinfo set r_vel = '{$rightVelocity}' where bot_id= '{$botId}'";	
			$X->fireQuery($stmnt);
			if(intval($botId) != -1){
				$stmnt = "insert into sendtobot values($botId,'{$user}','{$t}','C#{$rightVelocity}#')";
				$X->fireQuery($stmnt);
			}
		}	
	}
?>

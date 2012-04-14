<?php
	session_start();
	if(isset($_SESSION['uid']))
	{
		$lcd_print = 'D#'.$_POST['sendString'].'#';
		
			$t = date("Y:m:d H:i:s");
			$user = $_SESSION['uid'];

			$botid= $_POST['botId'];

			
				require('../Database.php');
				$X = new DatabaseCon();
	
				$con = $X->connect();
	
				$X->selectDB("zandu",$con);
	
				$stmnt = "insert into sendtobot values('{$botid}','{$user}','{$t}','{$lcd_print}')";
	
				$X->fireQuery($stmnt);
			
	 }
	
?>

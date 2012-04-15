<?php
	session_start();
	if(isset($_SESSION['uid']))
	{
		$newPortValues = 'W#'.$_POST['porta'].':'.$_POST['portb'].':'.$_POST['portc'].':'.$_POST['portd'].':'.$_POST['porte'].':'.$_POST['portf'].':'.$_POST['portg'].':'.$_POST['porth'].':'.$_POST['porti'].':'.$_POST['portj'].':'.$_POST['portk'].':'.$_POST['portl'].'#';
		
			$t = date("Y:m:d H:i:s");
			$user = $_SESSION['uid'];

			$botid= $_POST['botId'];

			
				require('../Database.php');
				$X = new DatabaseCon();
	
				$con = $X->connect();
	
				$X->selectDB("zandu",$con);
				
				$stmnt = "insert into sendtobot values('{$botid}','{$user}','{$t}','{$newPortValues}')";
	
				$X->fireQuery($stmnt);
			
	 }
	
?>

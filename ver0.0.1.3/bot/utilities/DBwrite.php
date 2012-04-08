<?php

	session_start();
	if(isset($_SESSION['uid']))
	{
		$x = htmlentities($_POST['x']);
		$y = htmlentities($_POST['y']);
	
		
		if(($x != null && $y != null))
		{
			$joinVal = $x.':'.$y;
		
			switch($joinVal)
			{
				case '0:-4':
						$action='F';
						break ;
					
				case '0:4':
						$action='B';
						break ;
					
				case '-4:0':
						$action='L';
						break ;
					
					
				case '4:0':
						$action='R';
						break ;
				
				case '0:0':
						$action='@';
						break;
			}
		
			$t = date("Y:m:d H:i:s");
			$user = $_SESSION['uid'];

			$botid= 100; // BIGGEST THING TO BE DONE.......... for multiple bots i.e. scalability.

			if((strcmp($action,'@')))
			{
				require('../Database.php');
				$X = new DatabaseCon();
	
				$con = $X->connect();
	
				$X->selectDB("zandu",$con);
	
				$stmnt = "insert into sendtobot values($botid,'{$user}','{$t}','{$action}#')";
	
				$X->fireQuery($stmnt);
			}
			
		}
	}
?>

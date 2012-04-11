<?php

	session_start();
	if(isset($_SESSION['uid']))
	{
		$leftVelocity = htmlentities($_POST['left_vel']);
		$rightVelocity = htmlentities($_POST['right_vel']);
	
		
		/*if(($x != null && $y != null))
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
			
		}*/
		
		$t = date("Y:m:d H:i:s");
		$user = $_SESSION['uid'];

		$botid= 100; // BIGGEST THING TO BE DONE.......... for multiple bots i.e. scalability.
		
		require('../Database.php');
		$X = new DatabaseCon();
	
		$con = $X->connect();
	
		$X->selectDB("zandu",$con);
	
		//$stmnt = "insert into sendtobot values($botid,'{$user}','{$t}','{$x}')";


		if( intval($rightVelocity) == -1){
			$stmnt = "update botinfo set l_vel = '{$leftVelocity}'";	
			$X->fireQuery($stmnt);
			$stmnt = "insert into sendtobot values($botid,'{$user}','{$t}','{$leftVelocity}')";
			$X->fireQuery($stmnt);
		}else if( intval($leftVelocity) == -1){
			$stmnt = "update botinfo set r_vel = '{$rightVelocity}'";	
			$X->fireQuery($stmnt);
			$stmnt = "insert into sendtobot values($botid,'{$user}','{$t}','{$rightVelocity}')";
			$X->fireQuery($stmnt);
		}	
	}
?>

<?php
	session_start();
	if(isset($_SESSION['uid']))
	{
				$botid= $_POST['botId'];
				$bi = array();
				$bi[] = $_POST['b0'];
				$bi[] = $_POST['b1'];
				$bi[] = $_POST['b2'];
				$bi[] = $_POST['b3'];
				$bi[] = $_POST['b4'];
				$bi[] = $_POST['b5'];
				$bi[] = $_POST['b6'];
				//$bi[] = $_POST['b7'];
				//$bi[] = $_POST['b8'];
				$bi[9] = $_POST['b9'];
				$bi[10] = $_POST['b10'];

				require('../Database.php');
				$X = new DatabaseCon();

				$con = $X->connect();

				$X->selectDB("zandu",$con);

				$stmnt = "update botinfo set sensor='{$bi[2]}', port_io='{$bi[3]}', bot_x='{$bi[4]}',bot_y='{$bi[5]}',alpha='{$bi[6]}',canvas_x='{$bi[9]}',canvas_y='{$bi[10]}' where bot_id = {$botid}";	//,l_vel='{$bi[7]}',r_vel='{$bi[8]}'

				$X->fireQuery($stmnt);
	 }
	
?>

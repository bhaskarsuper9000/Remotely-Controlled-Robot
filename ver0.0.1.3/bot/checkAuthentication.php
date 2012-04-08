<?php
	$uid = htmlentities($_POST['uid']);
	$pswd = htmlentities($_POST['pswd']);
	
	
	//implement security 
	if(($uid && $pswd) )
	{
		
		
		include('Database.php');
		$X = new DatabaseCon;
		$con = $X->connect();
		$X->selectDB("zandu",$con);
		$stmnt = "select * from user where uid='{$uid}' and password='{$pswd}'";
		$result = $X->fireQuery($stmnt);
		
		$row = mysql_fetch_array($result);
		
		if( ($row['uid'] == $uid ) && ($row['password'] == $pswd) )
		{
				$stmnt = "update user set status=1 where uid='{$uid}' and password='{$pswd}'";
				$X->fireQuery($stmnt);
				session_start();
				$_SESSION['uid'] = $uid;
				header('Location:index.php');
		}
		else
		{
				
			header('Location:login.php');
		}
	}
	
	else
	{
			
		header('Location:login.php');
	}
?>
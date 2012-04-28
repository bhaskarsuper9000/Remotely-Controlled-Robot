<?php
	session_start();
	$b_name = $_POST['b_name'];
	$divType = $_POST['id'];
	$uid = $_SESSION['uid'];
	
	$botId = $b_name;
	$sessionId = $uid.":".$botId;

	//echo $b_name.":".$divType.":".$uid.":".$botId.":".$sessionId.":";

	/* Load database class and initialize */	
	include('../Database.php');
	$X = new DatabaseCon;
	$con = $X->connect();
	$X->selectDB("zandu",$con);

	
	//echo "initialized DB";
	
	if(strcmp($divType,'avail') == 0)
	{
		$stmnt = "select * from session where uid='{$uid}'";
		$result = $X->fireQuery($stmnt);
		$row = mysql_fetch_array($result);

		//echo "inside avail";
		/* If empty result then insert else update */
		if( $row == "" ){
			//echo "row was empty";
			$stmnt = "insert into session values('{$sessionId}','{$uid}','{$botId}')";
		}else{
			//in ideal cases, control shouldn't reach here...it could only happen when the user manually inserts values in the database
			//echo "row wasn't empty";
			$stmnt = "update session set sid='{$sessionId}', bot_id='{$botId}' where uid='{$uid}'";
		}
		$X->fireQuery($stmnt);

	}
	else if(strcmp($divType,'botsInUse') == 0)
	{
		//echo "inside bots in use";
		$stmnt = "delete from session where uid='{$uid}'";
		$X->fireQuery($stmnt);
	}	
	$X->closeConnection($con);
	//echo "done";
?>

<?php
	
	session_start();
	if(isset($_SESSION['uid']))
	{
?>
	<html>
		<head>
				<title>SPARK V</title>
				<?php	include('header.php');	?>
		
		</head>
		<body> <!--onkeyup="handleKeyUp(event);"-->
		
		
				<?php	include('body.php');	?>
		
		</body>	
	</html>
<?php
	}
	else
	{
		header('Location:login.php');
	}
?>

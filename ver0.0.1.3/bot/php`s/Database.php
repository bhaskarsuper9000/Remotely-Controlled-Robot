<?php
	 class DatabaseCon
  {
  				
  		function connect()
  		{	
  			$con = @mysql_connect("localhost","root","");
  			return $con;
			}
  		function selectDB($DBname,$connection)
  		{	
  			@mysql_select_db($DBname,$connection);
  		}
  		
  		function fireQuery($query)
  		{	
  			$result = @mysql_query($query) or die("Query failed with error: ".mysql_error());
  			return $result;
  		}
  		function closeConnection($connector)
  		{
	  		@mysql_close($connector);
  		}
  } 
?>

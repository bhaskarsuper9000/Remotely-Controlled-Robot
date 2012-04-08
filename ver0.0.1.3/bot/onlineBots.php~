<?php

	
	$stmnt = "select botname,botid from bot where status=1";
	$result = $X->fireQuery($stmnt);
	
	while($row = mysql_fetch_array($result))
	{
		echo "<li><img src=\"./images/online.gif\"/>&nbsp;&nbsp;".$row['botid']."--".$row['botname']."</li>";
	}

?>	
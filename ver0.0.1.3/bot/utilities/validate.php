<?php

	$value = $_POST['id_val'];
	$id = $_POST['id'];
	
	$msg = call_user_func($id,$value);
	
	function name($value)
	{
		if(strlen($value) <= 1 || strlen($value) <= 0 )
			echo 'Uid could not be of blank or of small length!';
		//else if()
		
		//echo "uid";
			
	}
	
	function eid($value)
	{
		 if(strlen($value) <= 1 || strlen($value) <= 0 )
			echo 'Password could not be of blank or of small length!';
	}
	
	function c_no($value)
	{
		$pattern="/^\+(?:[0-9] ?){6,14}[0-9]$/";
    if(!preg_match($pattern,$value))
      {
         if(strlen($value) == 10)
            echo "<strong style=\" color:green;\">Valid contact number!</strong> ";
         else
            echo "<strong style=\" color:red;\">Invalid contact number!</strong> ";
      }
       else
         echo "<strong style=\" color:red;\">Invalid contact number!</strong> ";
	}
	
	function colg($value)
	{
		echo "college name";
	}
	
	function six_letters_code($value)
	{
		echo "captcha code ";
	}
	
?>

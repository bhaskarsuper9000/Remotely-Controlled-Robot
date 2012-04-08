
<?php

?>
 
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<title> SPARK V USER REGISTRATION </title>
			<link rel="stylesheet" type="text/css" media="all"  href="./css/libraries.css" />
			<link rel="stylesheet" type="text/css" media="all"  href="./css/template.css" />
			<link rel="stylesheet" type="text/css" media="all" href="./css/content.css" />
			<link rel="stylesheet" type="text/css" media="all" href="./css/ugly.css" />
			<link rel="stylesheet" type="text/css" media="all" href="./css/loginStyle.css" />
			
			<script language="javascript" src="./js/jquery-1.6.2.js"></script>
			<script language="JavaScript" src="./js/ourScripts/gen_validatorv31.js" type="text/javascript"></script>
			<script language='JavaScript' type='text/javascript'>

function refreshCaptcha()
{
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
}


function clearAll()
{
		document.getElementById('name').innerHTML = '';
		document.getElementById('eid').innerHTML = '';
		document.getElementById('c_no').innerHTML = '';
		document.getElementById('colg').innerHTML = '';
		document.getElementById('6_letters_code').innerHTML = '';
		
}

$(function(){
		var cur_id ;
//-----------------------------------------------------------------------------//		
		$("#name").blur( function(){
		
				cur_id = this.id;
				
				var checkValidity = $.ajax({
						url:'./utilities/validate.php',
						type:'POST',
						data:{id:this.id , id_val:this.value}				
				});
				
				checkValidity.done(function(result){
							document.getElementById(cur_id +'_err').innerHTML = result;	
				});

		});
//----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//		
		$("#eid").blur( function(){
		
				cur_id = this.id;
				if(this.value != null)
				{
					var checkValidity = $.ajax({
							url:'./utilities/validate.php',
							type:'POST',
							data:{id:this.id , id_val:this.value}				
					});
				
					checkValidity.done(function(result){
								document.getElementById(cur_id +'_err').innerHTML = result;	
					});
				}
				else
				{
					alert("Enter the value!");
				}

		});
//----------------------------------------------------------------------------//	
//-----------------------------------------------------------------------------//		
		$("#c_no").blur( function(){
		
				cur_id = this.id;
				
				var checkValidity = $.ajax({
						url:'./utilities/validate.php',
						type:'POST',
						data:{id:this.id , id_val:this.value}				
				});
				
				checkValidity.done(function(result){
							document.getElementById(cur_id +'_err').innerHTML = result;	
				});

		});
//----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//		
		$("#colg").blur( function(){
		
				cur_id = this.id;
				
				var checkValidity = $.ajax({
						url:'./utilities/validate.php',
						type:'POST',
						data:{id:this.id , id_val:this.value}				
				});
				
				checkValidity.done(function(result){
							document.getElementById(cur_id +'_err').innerHTML = result;	
				});

		});
//----------------------------------------------------------------------------//	
//-----------------------------------------------------------------------------//		
		$("#six_letters_code").blur( function(){
		
				cur_id = this.id;
				
				var checkValidity = $.ajax({
						url:'./utilities/validate.php',
						type:'POST',
						data:{id:this.id , id_val:this.value}				
				});
				
				checkValidity.done(function(result){
							document.getElementById(cur_id +'_err').innerHTML = result;	
				});

		});
//----------------------------------------------------------------------------//			
		
});






</script>			
			
		</head>
		<body>


			<div class="page">

				<div class="head">
					<div class="line">
						<div class="unit size1of3">
								<h3 align="center">Welcome,Guest!</h3>
						</div>
					
						<div class="unit size1of3 lastUnit">
								<h3 align="center">SPARK V</h3>
						</div>
					
					</div>
				</div>
	
			<!-- ====================================================================================================== -->
				<div class="body">
			<!-- ====================================================================================================== -->	
					<div class="leftCol yahoo"></div>
				<!-- ====================================================================================================== -->	
					<div class="rightCol yahoo"></div>	
				
				<!-- ====================================================================================================== -->
						<!--div class="main"-->
				<div class="line">
				<!-- ====================================================================================================== -->	
						  <div class="unit login">
							<h3><center><span class="registerDesign"><a href="register.php">Register</a></span></center> <span style="font-size:10px;"></span></h3><hr/>
						
								<div class="line">	

						<center><form>
								<div class="line">
									<div class="unit size1of3">Uid</div>		
									<div class="unit size1of3"><input type="text" name="name" id="name" maxlength="100"/></div>
									<div class="unit size1of3" id="name_err"></div>										
								</div>
									<br/>
									
								<div class="line">
									<div class="unit size1of3">Password </div>		
									<div class="unit size1of3"><input type="password" name="eid" id="eid" maxlength="100"/></div>	
									<div class="unit size1of3" id="eid_err"></div>									
								</div>
									<br/>
									
									
									<div class="line">
									<div class="unit size1of3">.</div>		
									<div class="unit size1of3">
										<div class="unit loginBoxButton"><button type="submit" id="submit" style="height: 25px; width: 132px" formaction="registeruser.php"formmethod="post">Register</button></div>
									</div>								
								</div>
									<br/>
													
						
						</form></center>
						
						</div>		        
						
						 </div>
					<!-- ====================================================================================================== -->
						 
						  
					<!-- ====================================================================================================== -->    
						</div>							
															
							
						<!--/div-->
				<!-- ====================================================================================================== -->
					
				</div>
			<!-- ====================================================================================================== -->	
				<div class="foot">
						<p>SPARK V</p>
				</div>	
	
			</div>
			<!-- ====================================================================================================== -->

	</body>
	</html>


<?php

?>

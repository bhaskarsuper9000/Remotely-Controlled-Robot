<?php

?>
<div class="page">
	<div class="head">
		<div class="line">
			<div class="welcome">
				<h3 >Welcome : <span style="font-weight:bold;"><?php echo strtoupper($_SESSION['uid']) ?></span></h3>
			</div>
			
			<div class="welcome">
				<h3 align="center"><span style="font-weight:bold;">SPARK V</span></h3>
			</div>	
			
			<div class="welcome">
				<a href="signout.php"><h3 align="right"> Sign Out</h3> </a>
			</div><!--class unit ends -->
			
		</div><!--  class line ends-->
		
	</div><!-- end of the class head-->
	<div class="body">
		
		<?php
			include('leftCol.php');
			include('rightCol.php');
			include('middleCol.php');		
		?>
	
	</div><!-- end of class body div -->
	<?php
		include('footer.php');//footer class div
	?>
	
</div><!-- end of page div -->
<div class="foot">
						<p>SPARK V</p>
				</div>
<?php

?>
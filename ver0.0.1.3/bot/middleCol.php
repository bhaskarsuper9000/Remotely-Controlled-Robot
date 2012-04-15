<?php

?>

<div class="main oldschool">
			
		<!-- ==================================================================== -->			
				<div class="demo">
		<!-- ==================================================================== -->
					<div id="tabs">
						<ul>
							<li><a href="#tabs-1">Motion Control</a></li>
							<li><a href="#tabs-2">Port IO</a></li>
							<li><a href="#tabs-3">Batch Processing</a></li>
						</ul>
		<!-- ==================================================================== -->
						<div id="tabs-1">
							
								<div class="line">
								
			 						<div class="unit size1of5">
		       		 				<h4 align="center">Left motor</h4><hr/>
		        							<div>        								
												<div id="left_slider-vertical" style="height:125px;margin:0px 0px 0px 45px;"></div>
												<p align="center">
													<label for="left_amount" style="color:#000000;" >Left Velocity </label>
													<input type="text" size="10" id="left_amount" style="border:0; color:#f6931f; font-weight:bold;"align="center">
												</p>
											</div>
	    	  						</div>	
	    	  						
	    	  						<div class="unit size1of2">
		       		 				<h4 align="center">Bot Controls</h4><hr/>
		       		 				
		        							<div class="line" align="center" style="border:none;">
			 									<div class="unit size1of3"></div>
			 									<div class="unit size1of3"><img id="up" src="./images/up.png"/></div>
			 									<div class="unit lastUnit"></div>			  
											</div>
											
											<div class="line" align="center">
			 									<div class="unit size1of3"><img id="left" src="./images/left.png"/></div>
			 									<div class="unit size1of3"><img id="stop" src="./images/stop.png"/></div>
			 									<div class="unit lastUnit"><img id="right" src="./images/right.png"/></div>		  
											</div>
											
											<div class="line" align="center">
			 									<div class="unit size1of3"></div>
			 									<div class="unit size1of3"><img id="down" src="./images/down.png"/></div>
			 									<div class="unit lastUnit"></div>			  
											</div>
											
											
	    	  						</div>	
	    	  						
	    	  						<div class="unit size1of5">
		       		 				<h4 align="center">Right motor</h4><hr/>
		        							<div>        								
												<div id="right_slider-vertical" style="height:125px;margin:0px 0px 0px 45px;"></div>
												<p align="center">
													<label for="right_amount" style="color:#000000;">Right Velocity </label>
													<input type="text" size="10" id="right_amount" style="border:0; color:#f6931f; font-weight:bold;" align="center"/>
												</p>
											</div>
	    	  						</div>			  
								</div>
						</div>
		<!-- ==================================================================== -->
						<div id="tabs-2">
							<!--form action="#"-->
								<!--<input type="text" value="undefined" />
								<input type="button" value="submit" />-->
								<!--input type="text" size="10" id="right" style="border:1; color:#f6931f; font-weight:bold;" align="center"/>
								<input input type="button" value="submit" size="20" id="r" style="color:#f6931f;" align="center"/-->
							<!--/form-->
							<div>
								<input type="button" id="read" value="READ" style="height: 25px; width: 90px"/>
								<input type="button" id="update" value="WRITE" style="height: 25px; width: 90px"/>
							</div>
							<div class="port"> <center><font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">DDR VALUES</font></center>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;DDRA :</font> 
										&nbsp;&nbsp;<input type="text" id="porta" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a1"/>
										<input type="checkbox" name="" value="" id="a2"/>
										<input type="checkbox" name="" value="" id="a3"/>
										<input type="checkbox" name="" value="" id="a4"/>
										<input type="checkbox" name="" value="" id="a5"/>
										<input type="checkbox" name="" value="" id="a6"/>
										<input type="checkbox" name="" value="" id="a7"/>											
										<input type="checkbox" name="" value="" id="a8"/>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;DDRB :</font> 
										&nbsp;&nbsp;<input type="text" id="portb" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a9"/>
										<input type="checkbox" name="" value="" id="a10"/>
										<input type="checkbox" name="" value="" id="a11"/>
										<input type="checkbox" name="" value="" id="a12"/>
										<input type="checkbox" name="" value="" id="a13"/>
										<input type="checkbox" name="" value="" id="a14"/>
										<input type="checkbox" name="" value="" id="a15"/>
										<input type="checkbox" name="" value="" id="a16"/>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;DDRC :</font> 
										&nbsp;&nbsp;<input type="text" id="portc" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a17"/>
										<input type="checkbox" name="" value="" id="a18"/>
										<input type="checkbox" name="" value="" id="a19"/>
										<input type="checkbox" name="" value="" id="a20"/>
										<input type="checkbox" name="" value="" id="a21"/>
										<input type="checkbox" name="" value="" id="a22"/>
										<input type="checkbox" name="" value="" id="a23"/>
										<input type="checkbox" name="" value="" id="a24"/>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;DDRD :</font> 
										&nbsp;&nbsp;<input type="text" id="portd" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a25"/>
										<input type="checkbox" name="" value="" id="a26"/>
										<input type="checkbox" name="" value="" id="a27"/>
										<input type="checkbox" name="" value="" id="a28"/>
										<input type="checkbox" name="" value="" id="a29"/>
										<input type="checkbox" name="" value="" id="a30"/>
										<input type="checkbox" name="" value="" id="a31"/>
										<input type="checkbox" name="" value="" id="a32"/>
										<hr style="margin-bottom:5px;margin-top:5px;">
							</div>
							
							<div class="port"> <center><font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">PIN VALUES</font></center>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;PINA :&nbsp;&nbsp;&nbsp;</font> 
										&nbsp;&nbsp;<input type="text" id="porte" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a33"/>
										<input type="checkbox" name="" value="" id="a34"/>
										<input type="checkbox" name="" value="" id="a35"/>
										<input type="checkbox" name="" value="" id="a36"/>	
										<input type="checkbox" name="" value="" id="a37"/>
										<input type="checkbox" name="" value="" id="a38"/>
										<input type="checkbox" name="" value="" id="a39"/>
										<input type="checkbox" name="" value="" id="a40"/>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;PINB :&nbsp;&nbsp;&nbsp;</font> 
										&nbsp;&nbsp;<input type="text" id="portf" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a41"/>
										<input type="checkbox" name="" value="" id="a42"/>
										<input type="checkbox" name="" value="" id="a43"/>
										<input type="checkbox" name="" value="" id="a44"/>
										<input type="checkbox" name="" value="" id="a45"/>
										<input type="checkbox" name="" value="" id="a46"/>
										<input type="checkbox" name="" value="" id="a47"/>
										<input type="checkbox" name="" value="" id="a48"/>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;PINC :&nbsp;&nbsp;&nbsp;</font> 
										&nbsp;&nbsp;<input type="text" id="portg" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a49"/>
										<input type="checkbox" name="" value="" id="a50"/>
										<input type="checkbox" name="" value="" id="a51"/>
										<input type="checkbox" name="" value="" id="a52"/>
										<input type="checkbox" name="" value="" id="a53"/>
										<input type="checkbox" name="" value="" id="a54"/>
										<input type="checkbox" name="" value="" id="a55"/>
										<input type="checkbox" name="" value="" id="a56"/>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;PIND :&nbsp;&nbsp;&nbsp;</font> 
										&nbsp;&nbsp;<input type="text" id="porth" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a57"/>
										<input type="checkbox" name="" value="" id="a58"/>
										<input type="checkbox" name="" value="" id="a59"/>
										<input type="checkbox" name="" value="" id="a60"/>
										<input type="checkbox" name="" value="" id="a61"/>
										<input type="checkbox" name="" value="" id="a62"/>
										<input type="checkbox" name="" value="" id="a63"/>
										<input type="checkbox" name="" value="" id="a64"/>
										<hr style="margin-bottom:5px;margin-top:5px;">
							</div>	
							
							<div class="port"> <center><font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">PORT VALUES</font></center>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;PORTA :&nbsp;&nbsp;&nbsp;</font> 
										&nbsp;&nbsp;<input type="text" id="porti" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a65"/>
										<input type="checkbox" name="" value="" id="a66"/>
										<input type="checkbox" name="" value="" id="a67"/>
										<input type="checkbox" name="" value="" id="a68"/>
										<input type="checkbox" name="" value="" id="a69"/>
										<input type="checkbox" name="" value="" id="a70"/>
										<input type="checkbox" name="" value="" id="a71"/>
										<input type="checkbox" name="" value="" id="a72"/>	
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;PORTB :&nbsp;&nbsp;&nbsp;</font> 
										&nbsp;&nbsp;<input type="text" id="portj" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a73"/>
										<input type="checkbox" name="" value="" id="a74"/>
										<input type="checkbox" name="" value="" id="a75"/>
										<input type="checkbox" name="" value="" id="a76"/>
										<input type="checkbox" name="" value="" id="a77"/>
										<input type="checkbox" name="" value="" id="a78"/>
										<input type="checkbox" name="" value="" id="a79"/>
										<input type="checkbox" name="" value="" id="a80"/>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;PORTC :&nbsp;&nbsp;&nbsp;</font> 
										&nbsp;&nbsp;<input type="text" id="portk" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a81"/>
										<input type="checkbox" name="" value="" id="a82"/>
										<input type="checkbox" name="" value="" id="a83"/>
										<input type="checkbox" name="" value="" id="a84"/>
										<input type="checkbox" name="" value="" id="a85"/>
										<input type="checkbox" name="" value="" id="a86"/>
										<input type="checkbox" name="" value="" id="a87"/>
										<input type="checkbox" name="" value="" id="a88"/>
									<br><hr style="margin-bottom:5px;margin-top:5px;">
									
									<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">&nbsp;&nbsp;PORTD :&nbsp;&nbsp;&nbsp;</font> 
										&nbsp;&nbsp;<input type="text" id="portl" value="undefined" />
										&nbsp;&nbsp;
										<input type="checkbox" name="" value="" id="a89"/>
										<input type="checkbox" name="" value="" id="a80"/>
										<input type="checkbox" name="" value="" id="a91"/>
										<input type="checkbox" name="" value="" id="a92"/>
										<input type="checkbox" name="" value="" id="a93"/>
										<input type="checkbox" name="" value="" id="a94"/>
										<input type="checkbox" name="" value="" id="a95"/>
										<input type="checkbox" name="" value="" id="a96"/>
										<hr style="margin-bottom:5px;margin-top:5px;">
							</div>						
							
							
						</div>
						
		<!-- ==================================================================== -->
						<div id="tabs-3">
							<font style="color:#DF2B72;font-size:123.1%;font-style:normal;font-weight:normal;">Enter String :&nbsp;</font><input type="text"    id="sendString" value="" />
							<input type="button" id="send" value="SEND" style="height: 25px; width: 90px"/>
						</div>
						
		<!-- ==================================================================== -->
					</div><!-- end tabs -->
		<!-- ==================================================================== -->
				</div><!-- End demo -->

		<!-- ==================================================================== -->			
		</div><!-- end of main content-->

<?php

?>

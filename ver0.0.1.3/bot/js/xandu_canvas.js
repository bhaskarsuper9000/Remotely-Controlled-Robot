// Clean code (please ignore spaces)

/*var dx = 5;
var dy = 5;
var u =150;
var v = 100;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;*/


function draw(scale, x, y){
				
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");

                // clear canvas

                context.clearRect(0, 0, canvas.width, canvas.height);
				
				//rect(0,0,canvas.width,canvas.height);
				context.fillStyle = "#0000ff";
				
                context.save();
				
                context.translate(x, y);
				
                context.scale(scale, scale);

                context.beginPath(); // begin 
					
					context.arc(-30, -30, 2, 0, Math.PI*2, true);
					context.moveTo(0,0);
					//context.arc( 0, 0, 2, 0, Math.PI*2, true);
					
                context.closePath(); // end
				
                context.strokeStyle = "#0000ff";

                context.stroke();

                context.restore();

            }

            

            window.onload = function(){

                var canvas = document.getElementById("myCanvas");

				var x = canvas.width / 2;
				var y = canvas.height / 2;

                var scale = 1.0;

                var scaleMultiplier = 0.7; // Little story behind this value... Ask me if you read this.

                var startDragOffset = {};

                var mouseDown = false;
                
                var dx = 5;
				var dy = 5;

                

                // add button event listeners

                document.getElementById("plus").addEventListener("click", function(){
					if(scale < 4)
					{
						scale /= scaleMultiplier; //This is due to the fact that division increases the value in case of desimal 
								alert("HI");
						draw(scale, x, y);
					}

                }, false);

                

                document.getElementById("minus").addEventListener("click", function(){
					if(scale > 0.3)
                    scale *= scaleMultiplier; //Reverse for the multiplication

                    draw(scale, x, y);

                }, false);

                

                // adding event listner for panning

                canvas.addEventListener("mousedown", function(evt){

                    mouseDown = true;

					//Calculating the value by wich pan happens...
					
                    startDragOffset.x = evt.clientX - x;

                    startDragOffset.y = evt.clientY - y;

                });

                

                canvas.addEventListener("mouseup", function(evt){

                    mouseDown = false;

                });

                

                canvas.addEventListener("mouseover", function(evt){

                    mouseDown = false;

                });

                

                canvas.addEventListener("mouseout", function(evt){

                    mouseDown = false;

                });

                

                canvas.addEventListener("mousemove", function(evt){

                    if (mouseDown) {

                        x = evt.clientX - startDragOffset.x;

                        y = evt.clientY - startDragOffset.y;

                        draw(scale, x, y);

                    }

                });

                

                draw(scale, x, y);
                
				function doKeyDown(evt){
					switch (evt.keyCode) {
					case 87:  /* Up arrow was pressed */
					
					y -= dy;
					draw(scale, x, y);
					
					break;
					case 83:  /* Down arrow was pressed */
					
					y += dy;
					draw(scale, x, y);
					
					break;
					case 65:  /* Left arrow was pressed */
					
					x -= dx;
					draw(scale, x, y);
					
					break;
					case 68:  /* Right arrow was pressed */
					
					x += dx;
					draw(scale, x, y);
					
					break;
					}
				}

				window.addEventListener('keydown',doKeyDown,true);
                

            };
           

/*Key Events*/



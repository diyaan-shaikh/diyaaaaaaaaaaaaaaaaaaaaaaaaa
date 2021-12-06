const { fabric } = require("./fabric");


var canvas = new fabric.canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
fabric.Image.formURL("golf-h.png", function(img){
	hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y,
		top:hole_x
	});
	camvas.add(hole_obj)
})
	new_image();
}

function new_image()
{
	fabric.Image.formURL("ball.png", function(img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			top:ball_x
		});
		camvas.add(ball_obj)
	});
}
	
	

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if((ball_x==hole_x)&&(hole_y==hole_x)){}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
	}

	function down()
	{
		
	}

	function left()
	{
		if(ball_x >5)
		{
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
		}
	}
	
}

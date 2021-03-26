let gif;
let graphics;
let vS;
let fontboi
var z = 3500;
let move = true;
var s = 1.0;
let d = false;
var r = 0;
var i = 0;
// let gif1
// let gif2

function preload(){

	song = loadSound('fm.mp3');
	fontBoi = loadFont('techFont.ttf');
	song.stop();
	// vS = loadModel('smallboi.stl'); //loads model - insert file path into quotations

	gif = loadImage('feedme.png'); //loads image
	// gif.volume(0); //sets volume to zero to comply with CORS
	// gif.hide();


}


function setup(){


	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	textAlign(CENTER, CENTER);

	var options = {
	preventDefault: true
};

// document.body registers gestures anywhere on the page
var hammer = new Hammer(document.body, options);
hammer.get('pinch').set({ enable: true });
hammer.get('rotate').set({ enable: true });
hammer.on("pinch", scaleRect);
hammer.on("rotate", rotateRect);

	// graphics = createGraphics(1000, 1000); //loads separate canvas off screen - named 'graphics'
	// gif.hide(); //hides mov file
	// gif.loop(); //loops the mov file

	// fft = new p5.FFT();
}

function draw(){




	// graphics.fill(0,0,0,150);
	// graphics.tint(255, 100); // Apply transparency without changing color

	// graphics.image(gif, 0, 0, 1000, 1000); //draws movie on the entirety of the graphics canvas

	background(0,0,0,0);

	//ambientLight(56, 56, 56); //this code block adds some ambient light
	//ambientMaterial(random(200), random(100));
	//let dirX = (mouseX / width - 0.5) * 2;
  	//let dirY = (mouseY / height - 0.5) * 2;
  	//directionalLight(250, 250, 250, -dirX, -dirY, -1);

		rotate(r);
	  scale(s);
		if(move == true && z<= 4500){
			z+= 100;
		}else if(move == false && z>=1000){
			z-= 100;
		}
		push();
		camera(z, z*2, -z, 0, -z*2, z, z, 1, z); //sets object back in z-direction
		if(d  == true && i <=50){
			i++;
			rotateX(millis() / 1000);
		}else if(i > 50){
			d = false;
			i = 0;
		}
		box(width/2);
		pop();

  	camera(0, 0, -1500, 0, 0, 0, 0, 1, 0); //sets object back in z-direction

  	texture(gif); //textures following 3D object with graphics
  	if(song.isPlaying()){
		rotateX(millis()/1000);  //rotation code block
  	rotateY(millis()/1000);
  	rotateZ(millis()/1000);
  	box(width/2);
  	}
  	else{
	  	fill(255,255,255);
	  	rotateX(-180);
	  	rotateZ(3.14);
	  	textFont(fontBoi);
	  	textSize(width/2);
			if(z>3000){
	  	text("tap here",0,0);
		}
	  	}


	// model(vS); //draws model vS

  	// let waveform = fft.waveform();

	// beginShape();
	//   for (var i = 0; i< waveform.length; i++){
	//     let x = map(i, 0, waveform.length, 0, width);
	//     let y = map( waveform[i], -1, 1, 0, height);
	//     stroke(0);
	//     texture(graphics);
	// 	box(y/2)
	// }
	// endShape();


}


function rotateRect(event) {
  console.log(event);
  r = radians(event.rotation);
}


function scaleRect(event) {
  console.log(event);
  s = event.scale;
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
			move = true;
  } else if (keyCode === DOWN_ARROW) {
			move = false;
} else if(key === 'd'){
	d = true;
	i = 0;
}
}

 async function mousePressed(){
	 if(z > 3000){
 	if (song.isPlaying()) {
     song.stop();
   } else {
     song.play();
   }
 }
}

async function touchStarted(){
 	mousePressed();
 	return false;
}

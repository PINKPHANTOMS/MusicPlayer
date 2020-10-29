let gif;
let graphics;
let vS;
let fontboi
// let gif1
// let gif2

function preload(){
	
		song = loadSound('fm.mp3');
	fontBoi = loadFont('techFont.ttf');

	// vS = loadModel('smallboi.stl'); //loads model - insert file path into quotations

	gif = loadImage('feedme.png'); //loads image
	// gif.volume(0); //sets volume to zero to comply with CORS
	// gif.hide();


}


function setup(){


	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	textAlign(CENTER, CENTER);

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
	  	text("tap here",0,0);
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

 async function mousePressed(){
 	if (song.isPlaying()) {
     song.stop();
   } else {
     song.play();
   }
 }

async function touchStarted(){
 	mousePressed();
 	return false;
}
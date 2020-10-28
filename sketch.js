let gif;
let graphics;
let vS;
// let gif1
// let gif2

function preload(){

	// song = loadSound('thisdot.mp3');

	vS = loadModel('smallboi.stl'); //loads model - insert file path into quotations

	gif = createVideo('no.mov'); //loads video
	gif.volume(0); //sets volume to zero to comply with CORS

}


function setup(){

	createCanvas(windowWidth, windowHeight, WEBGL);

	graphics = createGraphics(1000, 1000); //loads separate canvas off screen - named 'graphics'
	gif.hide(); //hides mov file
	gif.loop(); //loops the mov file

	// fft = new p5.FFT();
}

function draw(){

	


	// graphics.fill(0,0,0,150);
	// graphics.tint(255, 100); // Apply transparency without changing color

	graphics.image(gif, 0, 0, 1000, 1000); //draws movie on the entirety of the graphics canvas

	background(0,0,0,0);

	ambientLight(56, 56, 56); //this code block adds some ambient light
	ambientMaterial(random(200), random(100));
	let dirX = (mouseX / width - 0.5) * 2;
  	let dirY = (mouseY / height - 0.5) * 2;
  	directionalLight(250, 250, 250, -dirX, -dirY, -1);

  	camera(0, 0, -1500, 0, 0, 0, 0, 1, 0); //sets object back in z-direction

  	rotateX(millis()/1000); //rotation code block
  	rotateY(millis()/1000);
  	rotateZ(millis()/1000);
  	scale(50);

  	texture(graphics); //textures following 3D object with graphics
	model(vS); //draws model vS

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

// async function mousePressed(){
// 	if (song.isPlaying()) {
//     song.stop();
//   } else {
//     song.play();
//   }
// }

// function touchStarted(){
// 	mousePressed()
// }
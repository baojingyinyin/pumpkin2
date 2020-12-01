// ██████████████████████████████████████
// ★
// ART102 MM Fall 2020 Studio 3: Interactivity II
// Code:  YIN YU 
// ★                           
// ██████████████████████████████████████


// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
// setup a variable 

let pumpkinLaughing = false;
let sound;
let img;


// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
// load material

function preload(){
  sound = loadSound("Evil_Laugh.mp3");
  img = loadImage('a-haunted-housey.jpg');
  
}


// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
// setup a canvas 
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();  
  
}




// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
// Draw the interactive pumpkin

function draw() {
  
  ////// paint the background in black //////
  background(0,0,0,5);
  
  
  
  /////// The hauted house //////
  var ratio = img.height/img.width;
  var imageHeight = windowHeight;
  var imageWidth = imageHeight/ratio;
  imageMode(CENTER);
  image(img,windowWidth/2,windowHeight/2, imageWidth, imageHeight);
  
  
  
  //////// use pixels color //////
  
  let pxColor = get (mouseX, mouseY);
  noStroke();
  fill(pxColor);
  var x = mouseX + random(-100,100);
  var y= mouseY + random(-50,50);
  rect (x,y,random(40,80));
  
  
   
  rect (x,y, random(50,100));
  
  //////// the shape of the face  ///////////
  if(pumpkinLaughing){
    fill(random(35,250), random(200,250),random(80,240));
    
  }else{
    fill(242,140,25);
    
  }
  
  
  noStroke();
  ellipse(windowWidth/2, windowHeight/2,350,250);
  
  
  ///////////////  eyes  ////////////////
  fill(0);  
  triangle (windowWidth/2-60,windowHeight/2-45,windowWidth/2-40,windowHeight/2,windowWidth/2-80,windowHeight/2);
  triangle (windowWidth/2+60,windowHeight/2-45,windowWidth/2+40,windowHeight/2,windowWidth/2+80,windowHeight/2);

  ///////////////  mouth  ////////////////  
  fill(0);
  beginShape();
  vertex(windowWidth/2-80,windowHeight/2+60);
  vertex(windowWidth/2-45,windowHeight/2+80);
  vertex(windowWidth/2-25,windowHeight/2+60);
  vertex(windowWidth/2,windowHeight/2+80);
  vertex(windowWidth/2+25,windowHeight/2+60);
  vertex(windowWidth/2+45,windowHeight/2+80);
  vertex(windowWidth/2+80,windowHeight/2+60);
  vertex(windowWidth/2+50,windowHeight/2+100);
  vertex(windowWidth/2+30,windowHeight/2+80);
  vertex(windowWidth/2,windowHeight/2+110);
  vertex(windowWidth/2-30,windowHeight/2+80);
  vertex(windowWidth/2-50,windowHeight/2+100);
  vertex(windowWidth/2-80,windowHeight/2+60);
  endShape();  
    
  // ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
  // Draw the bat follow with mouse
  
  stroke(242,140,25);
  strokeWeight(1);
  
  beginShape();
  vertex(mouseX-25,mouseY-5);
  vertex(mouseX-10,mouseY);
  vertex(mouseX-5,mouseY-10);
  vertex(mouseX,mouseY);
  vertex(mouseX+5,mouseY-10);
  vertex(mouseX+10,mouseY);
  vertex(mouseX+25,mouseY-5);
  vertex(mouseX+10,mouseY+10);
  vertex(mouseX+8,mouseY);
  vertex(mouseX,mouseY+8);
  vertex(mouseX-8,mouseY);
  vertex(mouseX-10,mouseY+10);
  vertex(mouseX-25,mouseY-5);
  endShape();
 
  
  
}

// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
// mouse pressed change pumpkin color 


function touchStarted() {
  
  pumpkinLaughing = !pumpkinLaughing;
  sound.play();
  
}
let model3D;

function preload() {
  model3D = loadModel('Laelaps_figurine_model.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(240);

  stroke(0);
  noFill();
  
  lights();

  // Rotate for better visualization
  rotateX(PI); 
  rotateY(millis() / 2000); // Smooth rotation over time
  
  //noStroke();
  stroke(0,255,0);
  fill(255,0,0);
  model(model3D);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




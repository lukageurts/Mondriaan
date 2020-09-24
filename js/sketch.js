function setup() {
  createCanvas(500,500);
  background(240);

  noStroke();
  fill(215,62,25);
  rect(100,0,400,400);

  fill(130,150,195);
  rect(0,400,100,100);

  fill(255,255,240);
  rect(0,0,100,400);
  rect(100,400,400,100);

  fill(255,252,145);
  rect(475,450,25,50);

  stroke(35);
  strokeWeight(10);
  line(100,0,100,500); 

  strokeCap(SQUARE);
  stroke(35);
  strokeWeight(16);
  line(0,150,100,150); 

  stroke(35);
  strokeWeight(10);
  line(0,400,500,400); 

  stroke(35);
  strokeWeight(10);
  line(475,400,475,500);
  
  stroke(35);
  strokeWeight(10);
  line(475,450,500,450); 

  
}

function draw() {
}
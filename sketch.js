let img;

function preload() {
  img = loadImage('images/reference20.png');
}

function setup() {
  createCanvas(400, 269);
  
}

function draw() {
  background(0); 
  
  fill(105, 19, 11);
  rect(0, 214, 400, 55);
  rect(0, 180, 400, 28);
  rect (0, 138, 400, 35);

  
  fill(230, 230, 230);
  stroke(0);
  beginShape();
  vertex(274, 100);
  vertex(400, 98);
  vertex(400, 130);
  vertex(278, 128);
  endShape(CLOSE);

  beginShape();
  vertex(238, 128);
  vertex(216, 0);
  vertex(248, 0);
  vertex(269, 128);
  endShape(CLOSE);

  fill(203, 191, 173);
  stroke(0);
  beginShape();
  vertex(217, 68);
  vertex(211, 17);
  vertex(172, 0);
  vertex(66, 0);
  vertex(50, 53);
  endShape(CLOSE);
  
  beginShape();
  vertex(50, 63);
  vertex(31, 75);
  vertex(25, 109);
  vertex(14, 133);
  vertex(229, 129);
  vertex(219, 78);
  endShape(CLOSE);

  beginShape();
  vertex(263, 35);
  vertex(272, 94);
  vertex(313, 94);
  vertex(315, 83);
  vertex(306, 58);
  endShape(CLOSE);

  beginShape();
  vertex(260, 24);
  vertex(305, 45);
  vertex(302, 16);
  vertex(293, 0);
  vertex(257, 0);
  endShape(CLOSE);

  fill(170, 170, 187);
  beginShape();
  vertex(34, 61);
  vertex(0, 11);
  vertex(0, 0);
  vertex(56, 0);
  vertex(45, 54);
  endShape(close);

  beginShape();
  vertex(322, 0);
  vertex(310, 21);
  vertex(311, 52);
  vertex(319, 68); 
  vertex(323, 93);
  vertex(400, 91);
  vertex(400, 69);
  vertex(388, 0);
  endShape(CLOSE);

  beginShape();
  vertex(303, 0);
  vertex(314, 0);
  vertex(306, 10);
  endShape(CLOSE);

  fill(0, 0, 80);
  beginShape();
  vertex(0, 28);
  vertex(0, 132);
  vertex(6, 132);
  vertex(17, 107);
  vertex(20, 75);
  vertex(25, 66);
  vertex(30, 63);
  endShape(CLOSE);

  

}

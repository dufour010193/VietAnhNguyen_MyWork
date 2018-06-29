// Multimedia Programming
// Assignment 1 / Static Image
// 2957492 – 2957492 – vietanh22193@gmail.com
function setup() {
 createCanvas(800,800);
}

function draw() {
   background(204);
  //hand
  fill(255, 87, 51);
  ellipse(300,220,90,30);
  ellipse(400,220,90,30);
  //body
  fill(255);
  strokeWeight(1);
  triangle(300,200,400,200,350,400);
  //face
  ellipse(425,160,20,30);
  fill(255);
  ellipse(275,160,20,30);
  fill(255)
  rect(275,125,150,75);
  //eyes
  fill(255, 87, 51);
  ellipse(300,150,20,20);
  ellipse(400,150,20,20);
  //hair
  line(330,60,350,125);
  line(370,60,350,125);
  fill(0);
  ellipse(330,60,5,5);
  fill(0);
  ellipse(370,60,5,5);
  //smile
  fill(255);
  strokeWeight(3);
  arc(350,160,50,50,radians(0),radians(180));
  //leg
  strokeWeight(1);
  fill(0);
  arc(350,420,80,50,radians(180),radians(180));
  line(310,420,390,420);
  //tie
  triangle(340,201,360,201,350,220);
  quad(350,220,360,270,350,290,340,270);
}
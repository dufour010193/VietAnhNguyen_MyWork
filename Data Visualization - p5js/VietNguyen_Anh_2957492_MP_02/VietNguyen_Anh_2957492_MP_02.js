// Multimedia Programming
// Assignment 2 / Dynamic Image
// 2957492 – 2957492 – vietanh22193@gmail.com
var x;
var y;
var r;
var w;
var h;

function setup() {
//background and canvas
  createCanvas(800,800);
   background(255);
//vertical rectangle
    for(var y = 20; y <= random(600,800); y+=40){
    for(var x = 100; x <= random(600,800);x+=40){
     fill(58, 65, 30);
     w=random(10,40)
     h=random(10,700)
     rect(x,y,w,h);
   }
  }
//horizonal rectangle 
   for(var y = 100; y <= random(600,800); y+=40){
    for(var x = 20; x <= random(600,800);x+=40){
     fill(58, 65, 30);
     w=random(10,700)
     h=random(10,40)
     rect(x,y,w,h);
   }
  }
//ellipse   
  for(var y = 100; y <= random(600,800); y+=40){
    for(var x = 100; x <= random(600,800);x+=40){
     fill(random(255,204),random(224,122),random(179,0));
     r=random(10,80)
     ellipse(x,y,r,r);
   }
  }
}

function draw() {
  
}
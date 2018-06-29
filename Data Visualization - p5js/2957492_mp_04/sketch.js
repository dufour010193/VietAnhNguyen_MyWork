// Multimedia Programming
// Assignment 4 /
// 2957492 – 2957492 – vietanh22193@gmail.com

//var data
//var link for data query
var apiKey="?appid=091cb9336d983e7740b3aaa4834ebb9b";
var api="http://api.openweathermap.org/data/2.5/weather";
var units="&units=metric";
var id="&id=2964574";
var weather;
var main="Dublin";
var data;
var type="";
var Name="";
//var button
var textInput;
var button;
var img;
//var rain
var rainy=[];
var s=500;
var sp=3;
//var cloud
var array=[];
//var snow
var flakes=[];
//var thunder;
var arrayThunder=[];

//--------------------------------------------------
function setupThunder() {
  for (var j=0;j<100;j++){
    arrayThunder[j]= new thunder(); //use for loop to install thunder oject into an array
  }
}

function drawThunder() {
  for (var j=0;j<arrayThunder.length;j++){
    arrayThunder[j].moveThunder(); //use for loop to draw and move thunder
    arrayThunder[j].displayThunder();
  }
}
function thunder() {
  //var the color for the thunder
  this.m=230;
  this.n=230;
  this.l=230;
  this.k=2;
  //var the random coordinates for the thunder
  var p = random(-1,1);
  var q= random(width);
  var w=random(height/3);
  this.moveThunder = function(){ //move thunder function
    this.m-=this.k;//make the color change automatically
    this.n-=this.k;
    this.l-=this.k;
    q = q + p; //make the thunder move horizontally
    //this.y = this.y + this.pos;
    this.resetThunder(); //make the thunder appear again
  }
  this.displayThunder = function(){ //function to display thunder
    fill(this.m,this.n,this.l);
    noStroke();
    triangle(q,w,q,w-50,q-30,w);
    triangle(q,w,q,w+50,q+30,w);
  }
  
  this.resetThunder = function(){
    if (this.m===0 & this.n===0 & this.l===0) { // if thunder's color is back, thunder's color will be reset to (230,230,230) and then change to black again
      this.m=230;
      this.n=230;
      this.l=230;
      q =  q + p;
      w = random(height/3);
    } else {
      this.a-=this.d;
      this.b-=this.d;
      this.c-=this.d;
      q =  q + p;
    }
  }
}
//--------------------------------------------------
function setupCloud() { // add many clouds into an array
  for (var n=0;n<100;n++){
    array[n]= new cloud();
  }
}

function drawCloud() {
  for (var n=0;n<array.length;n++){ //use for loop to show and move the cloud
    array[n].mo();
    array[n].dis();
  }
}
function cloud() {
  this.a=230; //var the color of cloud which is the same as thunder
  this.b=230;
  this.c=230;
  this.d=2;
  var pos = random(-1,1);
  var x= random(width); //var the position of cloud which is the same as thunder
  var y=random(height/3);
  this.mo = function(){ //function moving same as thunder
    this.a-=this.d;
    this.b-=this.d;
    this.c-=this.d;
    x = x + pos;
    //this.y = this.y + this.pos;
    this.re();
  }
  this.dis = function(){ //function display same as thunder
    fill(this.a,this.b,this.c);
    noStroke();
    ellipse(x,y,50,50);
    ellipse(x+17,y+17,50,50);
    ellipse(x-17,y+17,50,50);
  }
  
  this.re = function(){ //function reset the same as thunder 
    if (this.a===0 & this.b===0 & this.c===0) {
      this.a=230;
      this.b=230;
      this.c=230;
      x =  x + pos;
      y = random(height/3);
    } else {
      this.a-=this.d;
      this.b-=this.d;
      this.c-=this.d;
      x =  x + pos;
    }
  }
}
//--------------------------------------------------
function setupRain() {
  for (var i=0; i<200;i++) {
    rainy[i]= new rain();
  }
}

function drawRain() {
  for (var i=0;i<rainy.length;i++) {
    rainy[i].show();
    rainy[i].move();
  }
}

function rain() {
  this.a = random(0,width);
  this.b = random(0,height);
  this.bspeed = random(5,7);
  this.len = random(5,10);
  
  this.move = function() {
    this.b= this.b + this.bspeed; //this makes the liquid moving down
    this.reset();
  }
  
  this.show = function() {
    stroke(179, 204, 255);
    line(this.a, this.b, this.a, this.b+this.len); //draw liquid by line with random in initial position and length of line
  }
  
  this.reset = function() { //if the liquid surpasses the height of screen, set this.b=0 to move the liquip on the top
    if (this.b >= height) {
      this.b = 0;
    } else {
      this.b= this.b + this.bspeed; //else continue to drop
    }
  }
}
//--------------------------------------------------
function setupFlakes() {
    for (var n = 0; n < 100; n++) { //add flakes into an array
        flakes[n] = new Flake();
    }
}

function drawFlakes() {
    for (var n = 0; n < flakes.length; n++) { // draw flakes
        flakes[n].move();
        flakes[n].display();
    }
}
  
function Flake() {
    this.x = random(0, width); // Start position of snowflakes
    this.y = random(0, height);
    
    this.xspeed = random(-1,2) // Speed of snowflakes
    this.yspeed = random(1,2)

    this.display = function() {
        stroke(255);
        strokeWeight(4);
        point(this.x, this.y, 50,50) // Draws snow by point
    }

    this.move = function() {
        this.x = this.x + this.xspeed; // Adds speed to x and y
        this.y = this.y + this.yspeed;
        this.reset();
    }
    
    this.reset = function () { // reset this.y when the snow reaches the bottom
        if (this.y >= height) {
            this.y = 0;
        } else {
            this.y += this.yspeed
        }
    }
}
//--------------------------------------------------
function preload() { //load image and data JSON
  img=loadImage('image/map.png');
  data=loadJSON("http://api.openweathermap.org/data/2.5/weather?appid=091cb9336d983e7740b3aaa4834ebb9b&id=2964574&units=metric");
}
//--------------------------------------------------
function setup() {
  createCanvas(1100,700);
  background(0);
  image(img,430,160,500,400);
  setupThunder(); //setup thunder,rain,cloud and flake by the function setup above
  setupRain();
  setupCloud();
  setupFlakes();
  //create input
    textInput=createInput();
    textInput.position(20,20);
  //create the button
    button=createButton("Search");
    button.position(150,20);
    button.mousePressed(datalookup);
}
//--------------------------------------------------
function gotData() { //get data from link JSON
  temp = data.main.temp; 
  type = data.weather[0].main;
}

//--------------------------------------------------
function draw() {
  background(0);
  image(img,430,160,500,400);
  fill(255);
 textFont('FFF Forward');
 text(Name,150,100);
  if (Name=='Iceland' || Name=='iceland') { //use if to draw the position of Europe country
   this.x=459;
   this.y=204;
 } if (Name=='Ireland' || Name=='ireland') {
   this.x=505;
   this.y=323;
 } if (Name=='United Kingdom' || Name=='united kingdom') {
   this.x=541;
   this.y=330;
 } if (Name=='Norway' || Name=='norway') {
   this.x=608;
   this.y=275;
 } if (Name=='Sweden' || Name=='sweden') {
   this.x=661;
   this.y=247;
 } if (Name=='Denmark' || Name=='denmark') {
   this.x=610;
   this.y=323;
 } if (Name=='NetherLands' || Name=='netherlands') {
   this.x=581;
   this.y=365;
 } if (Name=='Germany' || Name=='germany') {
   this.x=607;
   this.y=370;
 } if (Name=='Finland' || Name=='finland') {
   this.x=699;
   this.y=262;
 } if (Name=='Portugal' || Name=='portugal') {
   this.x=444;
   this.y=467;
 } if (Name=='Spain' || Name=='spain') {
   this.x=478;
   this.y=477;
 } if (Name=='France' || Name=='france') {
   this.x=547;
   this.y=410;
 } if (Name=='Belgium' || Name=='belgium') {
   this.x=577;
   this.y=368;
 } if (Name=='Italy' || Name=='italy') {
   this.x=597;
   this.y=433;
 } if (Name=='Switzerland' || Name=='switzerland') {
   this.x=594;
   this.y=416;
 } if (Name=='Russia' || Name=='russia') {
   this.x=770;
   this.y=320;
 } if (Name=='Estonia' || Name=='estonia') {
   this.x=704;
   this.y=300;
 } if (Name=='Latvia' || Name=='latvia') {
   this.x=709;
   this.y=320;
 } if (Name=='Lithuania' || Name=='lithuania') {
   this.x=698;
   this.y=329;
 } if (Name=='Belarus' || Name=='belarus') {
   this.x=724;
   this.y=343;
 } if (Name=='Ukrain' || Name=='ukrain') {
   this.x=743;
   this.y=380;
 } if (Name=='Poland' || Name=='poland') {
   this.x=661;
   this.y=359;
 } if (Name=='Austria' || Name=='austria') {
   this.x=627;
   this.y=411;
 } 
  
  if (type=="Drizzle") { //use if to draw weather
   drawRain();
 } if (type=="Rain") {
   drawRain();
   drawCloud();
 } if (type=="Snow") {
   drawFlakes();
 } if (type=="Clear") {
    s-=sp;
    if (s<200) {
    s=200;
  }
  fill(255,255,0);
  ellipse(100,s,100,100); // draw sun
 } if (type=="Clouds") {
   drawCloud();
 } if (type=="Thunderstorm") {
   drawRain();
   drawThunder();
}
  fill(230, 0, 230);
 ellipse(this.x,this.y,20,20); //point of coordinate of Europe countries
}
//--------------------------------------------------
//function mousePressed () {          //this function is to find coordinate
 // fill("Salmon");
 // textSize(16);
 // textAlign(CENTER);
  //text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
//}


//--------------------------------------------------
function datalookup(){ //divide link JSON into part to get the input data from search bar
  Name = textInput.value();
  searchQuery = api + apiKey + id + units + "&q=" + Name;
  data = loadJSON(searchQuery, gotData);
}
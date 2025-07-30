 //assign variables for the start button
  SBX = 525;
  SBY = 400;
  SBW = 200;
  SBH = 50;
  //assign values for brown cat 
  BrCX = 1000;
  BrCY = 50; 
  BrCW = 25;
  BrCH =25;
  //assign variable for black cat
  BlCX = 100;
  BlCY = 50; 
  BlCW = 25;
  BlCH =25;
  //assign variable values for white cat
  WCX = 100;
  WCY = 200; 
  WCW = 25;
  WCH =25;
  //assign var values for grey cat
  GCX = 1000;
  GCY = 200; 
  GCW = 25;
  GCH =25;
  //assing var values for calico
  CCX = 650;
  CCY = 150;
  CCW = 25;
  CCH = 25;
  //setting a game state as to not confuse mouse click
  let screen = "Title";

function preload() {
  //preload the images and assign to variables so the later code can run it
  MiloPlusF = loadImage("group-of-cute-kitty-cat-family-greeting-cartoon-png.webp");
  KitchenBG = loadImage("Kitchen.jpg");
  Bedroom1 = loadImage("bedroom.jpeg");
  House = loadImage("HouseExt.jpeg");
  Stairs = loadImage("stairs.jpeg");
}

function setup() {
  createCanvas(1250, 900);
  drawIntroduction();
}
let x = 0; //declare a variable that sets x position for block
let y = 875; // declare a variavle that sets y position for the block
let speed = 2; // this is the speed of the block
  //this moves the rectangle horizontally

function SpriteMovement() { // this function defines all the movement required to make the block move.
  if (keyIsDown(65)){//a
      x -= speed;
    }
  if (keyIsDown(68)){//d
    x += speed;
  }
  if (keyIsDown(87)){//w
    y -= speed;
  }
   if (keyIsDown(83)){//s
    y += speed;
  }
 }
function draw() {
  if (screen === "stairsBr"){
     background(Stairs);
    SpriteMovement();
    fill('brown');
    rect(x,y,25,25);
  }
  else if (screen === "stairsBl"){
    background(Stairs);
    SpriteMovement();
    fill('black');
    rect(x,y,25,25);
  }
  else if (screen === "stairsG"){
    background(Stairs);
    SpriteMovement();
    fill('grey');
    rect(x,y,25,25);
  }
  else if (screen === "stairsW") {
    background(Stairs);
    SpriteMovement();
    fill('white');
    rect(x,y,25,25);
  }
  else if (screen === "stairsCC"){
    background(Stairs);
    SpriteMovement();
    fill('orange');
    rect(x,y,25,25);
  }
}



// create a function that allows the intro page to be drawn
function drawIntroduction() {
  background(KitchenBG);
  textFont('antique');
  textSize(50);
  fill(255,215,0);
  stroke(0);
  strokeWeight(10);
  text("Milo's Search for His Lost Mouse", 250,200);
  image(MiloPlusF, 200, 525);
// draw start button and the "start" text.
  fill(255,215,0);
  noStroke();
  rect(SBX, SBY, SBW, SBH);
  fill(255);
  textSize(25);
  stroke(0);
  strokeWeight(5);
  text("Start", 600, 434);
}
// create a function that can be called to. create the select character screen
function drawSelecCharc (){
  background(House);
    fill(255);
    text("Pick your Chatacter",550, 50);
    noStroke();
/*all this below is a labeling system just for organization purposes atp, will change into the actual cat/sprite images later
rn, this is just to get the basic structure down*/
    text("1", BrCX, BrCY);
    text("2", BlCX, BlCY);
    text("3", GCX, GCY);
    text("4", WCX, WCY);
    text("5", CCX, CCY); 
    fill('brown');
    //this sets up the 'cats' with coordinates set as var to make if statements later easier
    rect(BrCX,BrCY, BrCW,BrCH);
    fill('black'); //black cat
    rect(BlCX,BlCY, BlCW,BlCH);
    fill('white');//white cat
    rect(WCX, WCY, WCW,WCH);
    fill('grey');//grey cat
    rect(GCX,GCY, GCW,GCH);
    fill('orange');//calico cat 
    rect(CCX,CCY, CCW,CCH);
  }


function mouseClicked () {
  //this checks if the mouse click is in the area of the start button.
  // The && workds to check if both conditions are true, this state then will lead to charcSelect
  if ( screen === "Title") {
    if (
    mouseX >= SBX &&
    mouseX <= SBX + SBW &&
    mouseY >= SBY &&
    mouseY <= SBY + SBH){
      screen = "selectCharc";
      drawSelecCharc(); //calls the previously defined function
    }
  }
  //bring to new screen if cat 1 is clicked
    else if (screen === "selectCharc") {
      //check for mouse in brown cat
      if(mouseX >= BrCX && 
        mouseX <= BrCX + BrCW &&
        mouseY >= BrCY &&
        mouseY <= BrCY + BrCH
        ){
          screen = "stairsBr";
          background(Stairs);
          fill('brown');
          rect(0,875,25,25);
           }
      else if(
        //check is mouse is clicking black cat
        mouseX >= BlCX &&
        mouseX <+ BlCX + BlCW &&
        mouseY >= BlCY &&
        mouseY <= BlCY + BlCH) {
          screen = "stairsBl";
          background(Stairs);
          fill('black');
          rect(0,875,25,25);
        }
      //check for clicking grey cat
      else if (
        mouseX >= GCX &&
        mouseX <= GCX + GCW &&
        mouseY >= GCY &&
        mouseY <= GCY + GCH) {
          screen = "stairsG";
          background(Stairs);
          fill('grey');
          rect(0,875,25,25);
        }
      //check for white car
      else if (
        mouseX >= WCX &&
        mouseX <= WCX + WCW &&
        mouseY >= WCY &&
        mouseY <= WCY + WCH) {
          screen = "stairsW";
          background(Stairs);
          fill('white');
          rect(0,875,25,25);
        }
        //check for calico cat
        else if (
          mouseX >= CCX &&
          mouseX <= CCX + CCW &&
          mouseY >= CCY &&
          mouseY <= CCY + CCH) {
          screen = "stairsCC";
          background(Stairs);
          fill('orange');
          rect(0,875,25,25);
          }
 } 
}//this is the bracket for lthe entire mouseClicked functions


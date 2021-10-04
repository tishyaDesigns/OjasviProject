const accessCode1 = "ADORABLE REPRESENTATITIVE M.C FOR YOUTH";
const accessCode2 = "KIM NAMJOON";
const accessCode3 = "JIN";
const accessCode4 = "NO MORE DREAMS";
const accessCode5 = "TAEHYUNG";

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,bg2,form,system,code,security;
var score=0;
var flag = 0;
var gameState ="start";
var placeHolder1,placeHolder2,placeHolder3,placeHolder4,placeHolder5,placeHolder6,placeHolder7,placeHolder8,placeHolder9;
function preload() {
  bg = loadImage("png/bts.jpg");
  bg2 = loadImage("png/bts2.jpg");
  b1= loadImage("png/boys/image_part_001.jpg");
  b2= loadImage("png/boys/image_part_002.jpg");
  b3= loadImage("png/boys/image_part_003.jpg");
  b4= loadImage("png/boys/image_part_004.jpg");
  b5= loadImage("png/boys/image_part_005.jpg");
  b6= loadImage("png/boys/image_part_006.jpg");
  b7= loadImage("png/boys/image_part_007.jpg");
  b8= loadImage("png/boys/image_part_008.jpg");
  b9= loadImage("png/boys/image_part_009.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createCanvas(1000,500);
  if(gameState === "start"){
    

    quizButton = createButton("QUIZ");
    quizButton.position(150, height/2+150);
    quizButton.size(200,70);
    quizButton.style('background', 'pink'); 
    quizButton.mousePressed(()=>{
      gameState = "quiz";
      clear();
      system = new System();
      security = new Security();
      code = new Code();
    })

    puzzleButton = createButton("PUZZLE");
    puzzleButton.position(550, height/2+150);
    puzzleButton.size(200,70);
    puzzleButton.style('background', 'pink'); 
    puzzleButton.mousePressed(()=>{
      gameState = "puzzle";
      clear();
    var options = {isStatic:true}
    ground1 = Bodies.rectangle(500,380,1000,20,options);
    World.add(world,ground1);
    ground2 = Bodies.rectangle(500,280,1000,20,options);
    World.add(world,ground2);
    ground3 = Bodies.rectangle(500,181,1000,20,options);
    World.add(world,ground3);
    p1 = new Puzzle(143,132,b1)

    
    })

    placeHolder1 = createSprite(143,132,98,78)
    placeHolder2 = createSprite(243,132,98,78)
    placeHolder3 = createSprite(343,132,98,78)
    placeHolder4 = createSprite(143,232,98,78)
    placeHolder5 = createSprite(243,232,98,78)
    placeHolder6 = createSprite(343,232,98,78)
    placeHolder7 = createSprite(143,332,98,78)
    placeHolder8 = createSprite(243,332,98,78)
    placeHolder9 = createSprite(343,332,98,78)
    
    placeHolder11 = createSprite(543,132,98,78)
    placeHolder12 = createSprite(643,132,98,78)
    placeHolder13 = createSprite(743,132,98,78)
    placeHolder14 = createSprite(543,232,98,78)
    placeHolder15 = createSprite(643,232,98,78)
    placeHolder16 = createSprite(743,232,98,78)
    placeHolder17 = createSprite(543,332,98,78)
    placeHolder18 = createSprite(643,332,98,78)
    placeHolder19 =createSprite(743,332,98,78)
  }
    }

function draw() {
  background(bg);
 
  if(gameState === "quiz"){
    clear();
    flag = 1;
    background(bg2);
    code.clues();
    security.display();
    textSize(20);
    fill("black");
    text("Score: " + score, 450, 50);
  }
  if(gameState === "puzzle"){
    clear();
    background("pink");
    if(flag == 1){
      security.hide();
      flag = 0;
    }
    drawSprites();
    p1.display();
  }
  
  if(score === 5) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }
 
  
  
  textSize(20);
  fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY);
}

function mouseDragged(){
  Matter.Body.setStatic(p1.body,false);
  Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY});
}
  


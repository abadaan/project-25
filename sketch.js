const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    trash1=new Dustbin(1200,510,20,200);
	trash2=new Dustbin(1000,510,20,200);
	trash3=new Dustbin(1100,600,200,20);


}

function draw(){
    background("black");
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
    crumpledPaper.display();
    trash1.display();
    trash2.display();
    trash3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}

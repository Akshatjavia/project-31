const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var canvas;
var drops = [];
var maxDrops = 100;
var umbrella;
var thunder,t1,t2,t3,t4;
var thunderCreatedFrame = 0;
var rand;


function preload(){
    t1 = loadImage("thunderbolt/1.png");
    t2 = loadImage("thunderbolt/2.png");
    t3 = loadImage("thunderbolt/3.png");
    t4 = loadImage("thunderbolt/4.png");
}

function setup(){
   canvas = createCanvas(500,700);

   engine = Engine.create();
   world = engine.world;
    
   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i++){
       drops.push(new createDrops(random(0,500),random(0,500)));
   }

}

function draw(){
    Engine.update(engine);

    background("black");

    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(t1);
            break;
            case 2: thunder.addImage(t2);
            break; 
            case 3: thunder.addImage(t3);
            break;
            case 4: thunder.addImage(t4);
            break;
            default: break;
        }
        thunder.scale = random(0.4,0.7);
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   


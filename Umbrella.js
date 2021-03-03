class Umbrella{
    constructor(x,y){
         var options = {
             'isStatic':true,
         }
         this.body=Bodies.circle(x,y,50,options);
         this.radius=50;
         this.image=loadImage("WalkingFrame/walking_8.png")
         World.add(world,this.body);
        }

    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.image,position.x,position.y+70,300,300);
    }
}
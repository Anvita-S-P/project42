class Umbrella{
    constructor(x,y){
        var  options={
            isStatic:true,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
   
       this.body=Matter.Bodies.circle(x,y,30,options);
       
       World.add(world,this.body);
       this.img=loadImage("images/walkingFrame/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png");
   
   
   }
   
    display(){
        var pos=this.body.position;
        push ();
        imageMode(CENTER);
        fill("pink");
         image(this.img,pos.x,pos.y,70,70);
    }
   }
    

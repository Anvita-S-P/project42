class Drop{

constructor(x,y){


    
    var  options={
         isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.body=Matter.Bodies.circle(x,y,30,options);
    World.add(world,this.body);


}

 display(){
     var pos=this.body.position;
     var maxDrops=100;
     for(var i=0;i<maxDrops;i++){
         drops.push(new createDrop(random(0,400),random(0,400)));
     }
     if(this.rain.position.y>height){
         Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
     }
     push ();
     ellipseMode(radius);
     fill("pink");
     ellipse(pos.x,pos.y,70,70);
 }
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var umbrella;


function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    umbrella=new Umbrella(500,500);


   
    
}

function draw(){
    background(0);
    Engine.update(engine);

    umbrella .display();
    drops.display();
    
}   


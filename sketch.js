
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300
var engine,world








function setup() {
  createCanvas(800,800);
  engine=Engine.create()
  world= engine.world
  ground = new Ground(400,800,800,20);

  
  for (var i=0;i<800;i=i+80){

    divisions.push(new Divisions(i,650,10,300))


  }

  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,75,10));
}

for (var j = 50; j <=width-10; j=j+50){
  plinkos.push(new Plinkos(j,175,10));
}

for (var j = 75; j <=width; j=j+50){
  plinkos.push(new Plinkos(j,275,10));
}

for (var j = 50; j <=width-10; j=j+50){
plinkos.push(new Plinkos(j,375,10));
}

}

function draw() {
  background(0); 
     
  drawSprites();

  Engine.update(engine);

  ground.display();
  
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var l = 0; l < plinkos.length; l++) {

    plinkos[l].display();

  }





 

   
}


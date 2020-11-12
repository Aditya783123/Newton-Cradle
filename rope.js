

class Rope{
    constr = Matter.Constraint;
    constructor(body1, body2, offsetX, offsetY){
     this.offsetX=offsetX;
     this.offsetY=offsetY;
     var options = {
         bodyA : body1,
         bodyB : body2,
         length:300,
         stiffness:0.5
     };
     console.log(options);
     this.rope = this.constr.create(options);
     World.add(world, this.rope);
    }
    display(){
         var pointA = this.rope.bodyA.position;
         var pointB = this.rope.bodyB.position;
         strokeWeight(3);
         fill("white");
         line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
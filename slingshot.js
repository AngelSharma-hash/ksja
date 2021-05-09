class Rope{
    constructor( bodyA, bodyB, offsetX , offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:offsetX, y:offsetY},
            stiffnes: 0.1,
            length:10

        }
        
        this.rope=Constraint.create(options);
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        World.add(world, this.rope);
        
    }
    display(){
        
        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;

        stroke("blue");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        
    }
}
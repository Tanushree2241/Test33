class SlingShot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA , 
            pointB : pointB ,
            length : 10,
            stiffness : 0.04 
        }
        this.sling1 = loadImage("Sprites/sling1.png");
        this.sling2 = loadImage("Sprites/sling2.png");
        this.sling3 = loadImage("Sprites/sling3.png");
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(myWorld,this.sling);

    }

    fly  () {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    display() {
        image(this.sling1 , 200,28);
        image(this.sling2, 170,28);
         if(this.sling.bodyA) {

        var PointA = this.sling.bodyA.position;
        var PointB = this.pointB;
       // push();
       if(PointA.x < 220 ) {
        strokeWeight(5);
        stroke(48,22,8);
        line(PointA.x-20 , PointA.y , PointB.x-15 , PointB.y );
        line(PointA.x +20 , PointA.y , PointB.x +20 , PointB.y);
        image(this.sling3 , PointA.x -25 , PointA.y - 15 , 15,30); 
        //pop();
       } else {
           line(PointA.x +10 , PointA.y , PointB.x -15 , PointB.y);
           line(PointA.x +20 , PointA.y , PointB.x +20 , PointB.y);
        image(this.sling3 , PointA.x +20 , PointA.y - 5 , 10,20); 
       }
        
    }
}
}
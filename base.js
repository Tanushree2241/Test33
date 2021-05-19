class base {
    constructor (x,y,width,height,angle) {
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Sprites/base.png");
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }

    display() {
        var pos  = this.body.position;
        var angle = this.body.angle; 
        push ();
        translate (pos.x , pos.y);
        rotate (angle);
       // rectMode(CENTER);
        //strokeWeight(4);
       // stroke("pink");
        //fill ("blue");
        //rect (0,0, this.width , this.height );
        imageMode (CENTER);
        image(this.image,0,0,this.width,this.height);   
        pop ();
    }
}
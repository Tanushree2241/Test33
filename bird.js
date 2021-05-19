class bird extends base{
    constructor (x,y) {
        super(x,y,50,50);
        this.image = loadImage("Sprites/bird.png");
        this.smokeimage = loadImage("Sprites/smoke.png");
        this.trajectory = [];
    }

    display() {
     //this.body.position.x = mouseX;
     //this.body.position.y = mouseY;
     super.display();  
     console.log(this.body.position);
     if( this.body.position.x>200 && (this.body.velocity.x>5 || this.body.velocity.x <-1) ) {
        var pos = [this.body.position.x , this.body.position.y];
        this.trajectory.push(pos);
     }

     for(var i =0 ; i<this.trajectory.length ; i++) {
        image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);
    }
    }
}
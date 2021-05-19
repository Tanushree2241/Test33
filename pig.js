class pig extends base {
    constructor (x,y) {
       super(x,y,50,50);
       this.image = loadImage("Sprites/enemy.png");
       this.visiblity = 255;
    }

    display() {
        console.log(this.body.speed);
        if(this.body.speed<4) {
            super.display();    
        } else {
            World.remove(myWorld,this.body);
            push();
            this.visiblity = this.visiblity - 5;
            tint(255,this.visiblity);
            image(this.image,this.body.position.x , this.body.position.y,);
            pop();
        }
    }

    score() {
        if(this.visiblity > 0 && this.visiblity < 250) {
        score++;
        }
    }
}
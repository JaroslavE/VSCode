class Projectile extends GameObject {
    constructor(game, x, y, direction) {
        super(game, x, y, 60, 60)
        this.maxLife = 8    
        this.life = 0
        this.img = document.getElementById("projectile")
        this.direction = direction;
        //this.polomer = 20;
    }
  
    onDraw(context) {
        var frame = Math.round((this.life/this.maxLife)*8)
        context.save()
        context.translate(this.x, this.y)
        //context.rotate(this.life)
        // use frame to select part of an image
        context.drawImage(this.img, 64*frame, 0, 64, 64, -20, -30, this.w, this.h)
        context.restore()
    }
  
    onMove(posun) {
        if(this.direction == 0) if(this.isAtWall(this.game, this.x, this.y, -2, 0) == false) this.life = 10; //Vlavo
        if(this.direction == 1) if(this.isAtWall(this.game, this.x, this.y,  2, 0) == false) this.life = 10; //Vpravo
        if(this.direction == 2) if(this.isAtWall(this.game, this.x, this.y, 0,  2) == false) this.life = 10; //Hore
        if(this.direction == 3) if(this.isAtWall(this.game, this.x, this.y, 0, -2) == false) this.life = 10; //Dole
        // increase life
        this.life += 0.1;
  
        // Die when reaching maxLife
        if (this.life > this.maxLife) this.game.removeObs(this);
    }
  }
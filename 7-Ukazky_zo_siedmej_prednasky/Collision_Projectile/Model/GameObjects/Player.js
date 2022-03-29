class Player extends GameObject{
    constructor(game){
        super(game, 25,25, game.canvas.width, game.canvas.height);
        this.polomer = 25;
        this.rof = 90 // rate of fire
        this.fireTimer = false
        this.direction = 3;
    }

    startFiring() {
        // if timer is set, then skip
        if (this.fireTimer) return
    
        var player = this
        this.fireTimer = setInterval( function() { player.fire() }, this.rof )
      }
    
      stopFiring() {
        // if timer is no set, then skip
        if (!this.fireTimer) return
    
        clearInterval(this.fireTimer)
        this.fireTimer = false
      }
    

    fire() {
        var projectile = new Projectile(this.game, this.x, this.y, this.direction);
        // add the new projectile to game object
        this.game.addObs(projectile);
    }

    onMove(posun){
        if (keys[37]){
            this.direction = 0;
            this.isAtWall(this.game, this.x, this.y, -5, 0); //Left
        } 
        if (keys[39]){
            this.direction = 1;
            this.isAtWall(this.game, this.x, this.y,  5, 0); //Right
        } 
        if (keys[38]){
            this.direction = 3;
            this.isAtWall(this.game, this.x, this.y, 0, -5); //Up
        } 
        if (keys[40]){
            this.direction = 2;
            this.isAtWall(this.game, this.x, this.y, 0,  5); //Down
        } 
        if (keys[32]) this.startFiring();
        else this.stopFiring();
    }

    onDraw(context){
        // Render a circle
        context.fillStyle = "red";
        context.beginPath();
        context.arc(this.x, this.y, this.polomer, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }
}
class Enemy extends GameObject{
    
    constructor(game, player){
        super(game, 325,325, game.canvas.width, game.canvas.height);
        this.polomer = 25;
        this.player = player;
    }

    onMove(posun){
        if (this.player.x < this.x) this.isAtWall(this.game, this.x, this.y, -1, 0); //Left
        if (this.player.x > this.x) this.isAtWall(this.game, this.x, this.y,  1, 0); //Right
        if (this.player.y < this.y) this.isAtWall(this.game, this.x, this.y, 0, -1); //Up
        if (this.player.y > this.y) this.isAtWall(this.game, this.x, this.y, 0,  1); //Down
    }

    onDraw(context){
        // Render a circle
        context.fillStyle = "yellow";
        context.beginPath();
        context.arc(this.x, this.y, this.polomer, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }

}
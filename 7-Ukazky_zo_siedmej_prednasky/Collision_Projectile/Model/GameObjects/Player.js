class Player extends GameObject{
    constructor(game){
        super(game, 25,25, game.canvas.width, game.canvas.height);
        this.polomer = 25;
    }

    onMove(posun){
        if (keys[37]) this.isAtWall(this.game, this.x, this.y, -5, 0); //Left
        if (keys[39]) this.isAtWall(this.game, this.x, this.y,  5, 0); //Right
        if (keys[38]) this.isAtWall(this.game, this.x, this.y, 0, -5); //Up
        if (keys[40]) this.isAtWall(this.game, this.x, this.y, 0,  5); //Down
    }

    isAtWall(game, xActual, yActual, xMove, yMove){
        var xUpdated = xActual + xMove;
        var yUpdated = yActual + yMove;

        for(var i in game.level.observerCollection){
            var x = game.level.observerCollection[i].x;
            var y = game.level.observerCollection[i].y;
            var w = game.level.observerCollection[i].x + game.level.observerCollection[i].w; //X
            var h = game.level.observerCollection[i].y + game.level.observerCollection[i].h; //Y
            //Kontrola hranic voci objektom
            if((xUpdated + this.polomer > x) && (xUpdated - this.polomer < w) && (yUpdated + this.polomer > y) && (yUpdated - this.polomer < h)) return;
            //Kontrola hranic voci canvasu
            if(xUpdated - this.polomer < game.x) return;
            if(xUpdated + this.polomer > game.w) return;
            if (yUpdated - this.polomer < game.y) return;
            if (yUpdated + this.polomer > game.h) return;
        }
        this.x = xUpdated;
        this.y = yUpdated;
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
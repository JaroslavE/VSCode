class GameObject extends Node{
    
    constructor(game, x, y, w, h){
        super();
        this.game = game;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    move(posun){
        this.onMove(posun);
        this.notify("move",posun);
    }

    draw(context){
        this.onDraw(context);
        this.notify("draw", context);
    }

    onMove(posun){}

    onDraw(context){}

    isAtWall(game, xActual, yActual, xMove, yMove){
        var xUpdated = xActual + xMove;
        var yUpdated = yActual + yMove;

        for(var i in game.level.observerCollection){
            var x = game.level.observerCollection[i].x;
            var y = game.level.observerCollection[i].y;
            var w = game.level.observerCollection[i].x + game.level.observerCollection[i].w; //X
            var h = game.level.observerCollection[i].y + game.level.observerCollection[i].h; //Y
            //Kontrola hranic voci objektom
            if((xUpdated + this.polomer > x) && (xUpdated - this.polomer < w) && (yUpdated + this.polomer > y) && (yUpdated - this.polomer < h)) return false;
            //Kontrola hranic voci canvasu
            if(xUpdated - this.polomer < game.x) return false;
            if(xUpdated + this.polomer > game.w) return false;
            if (yUpdated - this.polomer < game.y) return false;
            if (yUpdated + this.polomer > game.h) return false;
        }
        this.x = xUpdated;
        this.y = yUpdated;
        return true;
    }
}
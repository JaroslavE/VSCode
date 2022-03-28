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
}
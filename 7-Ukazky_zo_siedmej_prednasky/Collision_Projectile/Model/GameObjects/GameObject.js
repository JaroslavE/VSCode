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
        console.log("Posuvam sa");
        this.onMove(posun);
        this.notify("onMove",posun);
    }

    draw(context){
        console.log("Kreslim sa");
        this.onDraw(context);
        this.notify("onDraw", context);
    }

    onMove(posun){}

    onDraw(context){}
}
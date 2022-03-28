class Background extends GameObject{

    constructor(game){
        super(game, 0, 0, game.canvas.width, game.canvas.height);
        this.img = document.getElementById("background");
    }

    onDraw(context){
        context.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}
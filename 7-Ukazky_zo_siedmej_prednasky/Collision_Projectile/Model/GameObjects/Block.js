class Block extends GameObject{

    //Pozicia blocku
    constructor(game, x, y, w, h){
        super(game, x, y, w, h);
        this.img = document.getElementById("block");
    }

    onDraw(context){
        context.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}
class Block{

    //Pozicia blocku
    constructor(x,y){
        //v principe rozmery bloku
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 50;
        this.img = document.getElementById("block");
    }

    notify(ctx){
        this.draw(ctx);
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}
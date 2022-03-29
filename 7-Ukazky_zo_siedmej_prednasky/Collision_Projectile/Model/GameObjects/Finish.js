class Finish extends GameObject{

    //Pozicia finish
    constructor(game, x, y, w, h, player){
        super(game, x, y, w, h);
        this.img = document.getElementById("block");
        this.player = player;
    }

    //v princípe tu môžem,e skontrolovať či je player vo finishi
    onMove(posun){
        if(this.player.x > this.x && this.player.y >this.y && this.player.x < this.x + this.w 
            && this.player.y < this.y + this.h) game.newLevel();
    }

    onDraw(context){
        var pair = 0;
        for(var i = 0; i<this.w; i+=10){
            for(var j = 0; j<this.h; j+=10){
                if(pair%2 == 0) context.fillStyle = "black";
                else context.fillStyle = "white"; 
                context.fillRect(this.x + i, this.y + j,10,10);
                pair++;
            }
        }
    }
}
class Finish extends GameObject{

    //Pozicia finish
    constructor(game, x, y, w, h){
        super(game, x, y, w, h);
        this.img = document.getElementById("block");
    }

    onDraw(context){
        context.textAlign = "center";
        context.fillStyle = "white";
        context.fillText("F", this.x, this.y);
        //Stvorec
        //context.fillRect(x,0,50,50);
        var pair = 0;
        for(var i = 0; i<this.w; i+=10){
            for(var j = 0; j<this.h; j+=10){
                if(pair%2 == 0) context.fillStyle = "black";
                else context.fillStyle = "white"; 
                context.fillRect(this.x,this.y,this.x+10,this.y+10);
                pair++;
            }
        }
    }
}
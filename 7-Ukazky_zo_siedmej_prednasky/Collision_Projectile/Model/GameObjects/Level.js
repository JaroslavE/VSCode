class Level extends GameObject{
    
    xPosList = [0];
    yPosList = [0];
    
    constructor(game){
        super(game, 0, 0, game.canvas.width, game.canvas.height);
        this.makeMap();
    }

    //Nahodne vytvorená mapa
    makeMap(){
        var w = this.w/50;
        var h = this.h/50;
        var tick = 0;
        var generatedBlocks = 0;
        while(generatedBlocks<20){
            if(tick >= 50) break;
            var x = Math.floor(Math.random() * w);
            var y = Math.floor(Math.random() * h);
            if(this.xPosList.includes(x) == false || this.xPosList.includes(y) == false){
                this.xPosList.push(x);
                this.yPosList.push(y);
                this.addBlock(x,y);
                generatedBlocks++
            }
            tick++;
        }
    };

    addBlock(x,y){
        var block = new Block(this.game, x*50,y*50,50,50);
        this.addObs(block);
    }
}
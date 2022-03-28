class Level extends GameObject{
    constructor(game){
        super(game, 0, 0, game.canvas.width, game.canvas.height);
        this.init();
    }

    init(){
        var block = new Block(this.game, 0,50,50,50);
        this.addObs(block);
        var block = new Block(this.game, 0, 0, 50, 50);
        this.addObs(block);
    };
}
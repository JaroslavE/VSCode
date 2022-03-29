class Game extends GameObject{

    level;
    levelCount = 0;

    constructor(canvas){
        super(undefined, 0, 0, canvas.width, canvas. height);
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.init();
    }

    init(){
        var background = new Background(this);
        this.addObs(background);
        var level = new Level(this);
        this.addObs(level);
        this.level = level;
        var player = new Player(this);
        var finish = new Finish(this.game, this.w-50,this.h-50,50,50, player);
        this.addObs(finish);
        this.addObs(player);
        var enemy = new Enemy(this, player);
        this.addObs(enemy);
    }

    newLevel(){
        this.observerCollection = [];
        this.init();
        this.levelCount++;
    }

    onLoop(){
        this.move(1);
        this.draw(this.context);
    }
}

var game = new Game(document.getElementById("canvas"));
var requestForCancelFrameRefresh;

function mainLoop(){
    game.onLoop();
    requestAnimationFrame(mainLoop);
}

window.onload = function(){
    requestAnimationFrame(mainLoop);
}
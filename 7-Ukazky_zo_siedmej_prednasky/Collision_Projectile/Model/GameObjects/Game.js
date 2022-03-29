class Game extends GameObject{

    level;

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
        this.addObs(player);
        var enemy = new Enemy(this, player);
        this.addObs(enemy);
    }

    newLevel(){
        var index = this.game.observerCollection.indexOf(this.level);
        var nextLevel = new Level(this);
        this.game.observerCollection[index] = nextLevel;
        this.level = nextLevel;
    }

    onLoop(){
        this.move(1);
        this.draw(this.context);
    }
}

var game = new Game(document.getElementById("canvas"));

function mainLoop(){
    game.onLoop();
    requestAnimationFrame(mainLoop);
}

window.onload = function(){
    requestAnimationFrame(mainLoop);
}
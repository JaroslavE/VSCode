class Game extends GameObject{

    constructor(canvas){
        super(undefined, 0, 0, canvas.width, canvas. height);
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.init();
        //Toto je takzvany call back - my v principe vzdy volame samy seba a takzvanou call back funkciou potrebujeme
        //ulozit data o sebe aby sme mohli zavolat funkciu a potom sami seba vratit
    }

    init(){
        var background = new Background(this);
        this.addObs(background);
        var level = new Level(this);
        this.addObs(level);
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
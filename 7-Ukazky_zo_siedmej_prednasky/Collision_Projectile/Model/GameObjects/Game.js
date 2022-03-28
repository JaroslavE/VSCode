class Game extends GameObject{
    constructor(canvas){
        super(undefined, 0, 0, canvas.width, canvas. height);
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.init();
    }

    init(){
        var background = new Background(this);
        this.addObs(background);
    }

    loop(){
        console.log("Som TU Jeden");
        this.move(1);
        console.log("Som TU Dva");
        this.draw(this.context);
        requestAnimationFrame(this.loop);
    }
}

window.onload = function(){
    var game = new Game(document.getElementById("canvas"));
    game.loop();
}
class Level{
    constructor(ctx){
        this.ctx = ctx;
        this.collectionObservers = [];
        this.inicializeLevel();
    }

    addObserver(block){
        this.collectionObservers.push(block);
    }

    removeObserver(block){
        var index = this.collectionObservers.indexOf(block);
        delete this.collectionObservers[index];
    }

    notifyObservers(){
        for(var i in this.collectionObservers){
            this.collectionObservers[i].notify(this.ctx);
        }
    }

    draw(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.notifyObservers();
    }

    inicializeLevel(){
        for(var i = 0; i<200; i+=50){
            var b1 = new Block(i,0);
            this.addObserver(b1);
        }

        for(var i = 150; i<300; i+=50){
            var b1 = new Block(0,i);
            this.addObserver(b1);
        }

        for(var i = 150; i<300; i+=50){
            var b1 = new Block(300,i);
            this.addObserver(b1);
        }
    }
}
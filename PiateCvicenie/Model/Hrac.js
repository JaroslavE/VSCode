class Hrac{

    constructor(Name ,Zdravie, Sila, Zbroj, Polomer){
        this.name = Name;
        this.zdravie= Zdravie;
        this.sila= Sila;
        this.zbroj= Zbroj;
        this.range = Polomer + 60;

        this.farba = "green";
        this.velkost = Polomer;
        this.position= {
            x: Math.random() * 100 + 100, 
            y: Math.random() * 100 + 100
        }
    }

    utok(enemy){
        if(this.isInRange(enemy) == true){
            var upravZdravie = enemy.getZdravie() + enemy.obrana() - this.sila;
            enemy.setZdravie(upravZdravie);   
        } 
    }

    //Range je rieseny ako stvorec
    isInRange(enemy){
        var enemyPos = enemy.getPosition();
        
        if((this.position.x + this.range > enemyPos.x) && (this.position.x - this.range < enemyPos.x)
        && (this.position.y + this.range > enemyPos.y) && (this.position.y - this.range < enemyPos.y)){
            return true;
        }
        else return false;

    }

    nakresliSa(canvas){
        ctx = canvas.getContext("2d");
        // Render a circle
        ctx.fillStyle = this.farba;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.velkost, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }

    pohniSa(canvas){
        //ASCII representation of arrows, for A D S W use numbers 65, 68, 83 a 87 for a, d, s, w use 97, 100, 115 a 119 
        if (keys[37]) this.isInCanvas(canvas,-5,0);//Left
        if (keys[39]) this.isInCanvas(canvas, 5,0);//Right
        if (keys[38]) this.isInCanvas(canvas,0,-5);//Up
        if (keys[40]) this.isInCanvas(canvas,0, 5);//Down
    }

    //Check borders of canvas
    isInCanvas(canvas,x,y){
        var newX = this.position.x+x;
        var newY = this.position.y+y;
        //console.log("Debug Hrac: X: " + this.position.x + " Y: " + this.position.y);
        if(newX>canvas.width) this.position.x=0;
        else if(newX<0) this.position.x=canvas.width;
        else if(newY>canvas.height) this.position.y=0;
        else if(newY<0) this.position.y=canvas.height;
        else {
            this.position.y += y;
            this.position.x += x;
        } 
    }

    obrana(){
        return this.zbroj;
    }

    getZdravie(){
        return this.zdravie;
    }

    setZdravie(hodnota){
        this.zdravie = hodnota;
    }

    getSila(){
        return this.sila;
    }

    setSila(hodnota){
        this.sila = hodnota;
    }

    getZbroj(){
        return this.zbroj;
    }

    setZbroj(hodnota){
        this.zbroj = hodnota;
    }

    getPosition(){
        return this.position;
    }

    setPosition(x, y){
        this.position.x = x;
        this.position.y = y;
    }

    getVelkost(){
        return this.velkost;
    }

    getName(){
        return this.name;
    }

    showAtributes(){
        var textPreHTML = document.getElementById("ako");
        textPreHTML.innerHTML = this.getName() +  " Zdravie: " + this.getZdravie() + " Sila: " + this.getSila() + " Zbroj: " + this.getZbroj();
    }
}
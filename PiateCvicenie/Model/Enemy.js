class Enemy{

    constructor(Name ,Zdravie, Sila, Zbroj, Polomer){
        this.name = Name;
        this.zdravie= Zdravie;
        this.sila= Sila;
        this.zbroj= Zbroj;
        this.range = Polomer + 30;

        this.farba = "red";
        this.velkost = Polomer;
        this.position= {
            x: 300, 
            y: 350
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

    pohniSa(enemy,level){
        var enemyPos = enemy.getPosition();
        if (enemyPos.x < this.position.x)
            if(isAtWall(this, level, this.position.x-1, this.position.y) == false) 
                this.position.x -= 1;  
        if (enemyPos.x > this.position.x)
            if(isAtWall(this, level, this.position.x+1, this.position.y) == false)
                this.position.x += 1;
        if (enemyPos.y < this.position.y)
            if(isAtWall(this, level, this.position.x, this.position.y-1) == false)
                this.position.y -= 1;
        if (enemyPos.y > this.position.y)
            if(isAtWall(this, level, this.position.x, this.position.y+1) == false)
                this.position.y += 1;
        console.log(this.position.x + " " + this.position.y)
        //if(isAtWall(this, level, newX, newY) == true) return
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
        textPreHTML.innerHTML = this.getName() + " Zdravie: " + this.getZdravie() + " Sila: " + this.getSila() + " Zbroj: " + this.getZbroj();
    }
}
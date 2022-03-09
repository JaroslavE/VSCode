class Enemy{

    constructor(Sila, Zdravie, Zbroj){
        this.sila = Sila;
        this.zdravie = Zdravie;
        this.zbroj = Zbroj;
    }

    utok(){
        return this.sila + this.zbroj;
    }

    obrana(dostavamUtok){
        this.zdravie = this.zdravie + this.zbroj - dostavamUtok; 
    }
}
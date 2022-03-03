class Hrac{

    inventar;

    constructor(health, name, surname){
        this.health = health;
        this.name = name;
        this.surname = surname;
    }

    set_inventar(inventar){
        
        if(typeof this.inventar == "undefined"){
            //alert("Log: som prazdny");
            this.inventar = inventar;
        }
        else{
            alert("Log: Teraz menite inventar");
            this.inventar = inventar;
        }
    }

    inspectOtherPlayer(inventar){
        inventar.getAllItems();
    }

    set_health(value){
        this.health = value;
    }

    get_health(){
        return this.health;
    }

    get_name(){
        return this.name;
    }

    get_surname(){
        return this.surname;
    }

    get_inventar(){
        return this.inventar;
    }
}
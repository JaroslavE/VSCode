class Armor{
    constructor(name, stamina, strength, intelect){
        this.name = name;
        this.stats={
            stamina: stamina,
            strength: strength,
            intelect: intelect
        }
    }

    get_name(){
        return this.name;
    }

    set_stats(stamina, strength, intelect){
        this.stats.stamina += stamina;
        this.stats.strength += strength;
        this.stats.intelect += intelect;
    }

    get_stats(){
        return this.stats;
    }

    zazracnaVlastnost(){
        console.log("Nemam zazracnu vlastnost");
    }
}
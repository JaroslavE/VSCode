class ZazracneNohavicePriskrtenehoRozkroku extends Armor{
    /*
    Tato trieda dedi vsetky dolezite vlastnosti od triedy armor
    a pomocou polymorfizmu upravuje metodu zazracnaVlastnos
    */ 
    zazracnaVlastnost(){
        var silaPrdu = this.stats.intelect*this.stats.stamina+this.stats.strength;
        console.log("Zazaracna vlastnost vyprodukovala prd o sile: " + silaPrdu);
    }
}
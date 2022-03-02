class ZazracneNohavicePriskrtenehoRozkroku extends Armor{
    zazracnaVlastnost(){
        var silaPrdu = this.stats.intelect*this.stats.stamina+this.stats.strength;
        console.log("Zazaracna vlastnost vyprodukovala prd o sile: " + silaPrdu);
    }
}
class FajkaMieruPoKtorejOstanemSfukanyAkoBomba extends Armor{
    /*
    Tato trieda dedi vsetky dolezite vlastnosti od triedy armor
    a pomocou polymorfizmu upravuje metodu zazracnaVlastnos
    */ 
    zazracnaVlastnost(){
        var silaSfajcenia = this.stats.intelect*this.stats.strength-this.stats.stamina;
        console.log("Zazaracna vlastnost vyprodukovala sfajcenie o sile: " + silaSfajcenia);
    }
}
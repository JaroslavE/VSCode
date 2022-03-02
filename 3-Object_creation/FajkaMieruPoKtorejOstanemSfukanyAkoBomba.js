class FajkaMieruPoKtorejOstanemSfukanyAkoBomba extends Armor{
    zazracnaVlastnost(){
        var silaSfajcenia = this.stats.intelect*this.stats.strength-this.stats.stamina;
        console.log("Zazaracna vlastnost vyprodukovala sfajcenie o sile: " + silaSfajcenia);
    }
}
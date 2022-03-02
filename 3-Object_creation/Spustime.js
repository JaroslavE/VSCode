function spustimeNasSkript(){
    //Vytvorenie si objektov
    var hrac1 = new Hrac(100, "Pepek", "Namornik");
    /*hrac1.set_health(200);
    console.log(hrac1.get_health());
    hrac1.health = 300;
    console.log(hrac1.get_health());
    */
    console.log("Meno: " + hrac1.get_name() + ", priezvisko: " + hrac1.surname);
    var item = new ZazracneNohavicePriskrtenehoRozkroku("Neskutocne nohavice priskrteneho rozkroku s dierou na tiche prdy",20,30,50);
    var item2 = new Armor("Brnenie", 20, 20, 20);
    var item3 = new Armor("Opasok",50,23,65);
    var item4 = new Armor("Helma", 10, 100, 12);
    var item5 = new FajkaMieruPoKtorejOstanemSfukanyAkoBomba("Sfajcena fajka silnej kokainovej zavislosti",400,200,1500);
    
    var inventar = new Inventar();
    
    /*console.log("Predmet: " + item.get_name());
    console.log("Predmet: " + item2.get_name());
    console.log("Predmet: " + item5.get_name());*/

    //naplnenie Inventara
    inventar.addNewItem(item); inventar.addNewItem(item2); inventar.addNewItem(item3); inventar.addNewItem(item4); inventar.addNewItem(item5);
    
    //priradenie inventara hracovi
    for(let i = 0; i<2; i++){
        hrac1.set_inventar(inventar);
    }
    
    //vypisanie inventara
    for(let i = 0; i<inventar.items.length; i++){
        console.log("Debug: " + inventar.items[i].name);
    }

    //odstranenie s inventara
    inventar.deleteItem("Helma");
    console.log(inventar.items.length);

    //bodkova notacia

    console.log(hrac1.inventar.items[1].get_name());
}


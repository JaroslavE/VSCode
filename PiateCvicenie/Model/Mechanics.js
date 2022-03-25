function enemiesAttackPlayer(hrac, enemies){
    for(var i in enemies ){
        hrac.utok(enemies[i]);
        enemies[i].utok(hrac);
    }
    //console.log("Zdravie hraca:" + hrac.getZdravie() + " Zbroj: " + hrac.getZbroj());
    //console.log("Zdravie enemy:" + enemy.getZdravie());*/
}

//tu sa robia nove mechaniky napriklad ak mam viac nepriatelov a jedneho zabijem aby sa hra aktualizovala a jeden enemy prestal existovat
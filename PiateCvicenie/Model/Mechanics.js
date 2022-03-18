function enemiesAttackPlayer(hrac, enemies){
    for(var i in enemies ){
        hrac.utok(enemies[i]);
        enemies[i].utok(hrac);
    }
    console.log("Zdravie hraca:" + hrac.getZdravie() + " Zbroj: " + hrac.getZbroj());
    //console.log("Zdravie enemy:" + enemy.getZdravie());*/
}
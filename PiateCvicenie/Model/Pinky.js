class Pinky{
    
    //Polymorfizmus
    utok(enemy){
        if(this.isInRange(enemy) == true){
            var upravZdravie = enemy.getZdravie() + enemy.obrana() - this.sila - this.zdravie;
            enemy.setZdravie(upravZdravie);   
        } 
    }
}
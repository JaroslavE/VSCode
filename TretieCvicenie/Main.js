var hrac = new Hrac(50, 5000, 30);
var enemy = new Enemy(30, 3000, 40);


while(hrac.zdravie>0 || enemy.zdravie>0){
    enemy.obrana(hrac.utok());
    hrac.obrana(enemy.utok());
}
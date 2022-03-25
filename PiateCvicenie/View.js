function pohniVsetkymiNepriatelmi(enemies, hrac){
    for(var i in enemies ){
        enemies[i].pohniSa(hrac);
    }
}

function nakresliVsetkychNepriatelov(enemies, canvas){
    for(var i in enemies){
        enemies[i].nakresliSa(canvas);
    }
}

//Main loop - tu ide o volanie metod z modelu aby ste vo view videli ako sa pohybuju
function mainLoop() {
    refreshCanvas(canvas);
    hrac.pohniSa(canvas);
    //Ak chceme viac enemy tak vytvorit pole enemy a pushnut ich tam a aktualizovat poziciu v cykle 
    pohniVsetkymiNepriatelmi(enemies, hrac);
    hrac.nakresliSa(canvas);
    //Ak mame viac enemy tak aktualizovat vykreslenie v cykle
    nakresliVsetkychNepriatelov(enemies, canvas);
    //Tu na seba utocia a vo vypise vidite ze HP ide dole
    enemiesAttackPlayer(hrac, enemies);
    requestForCancelFrameRefresh = requestAnimationFrame(mainLoop);
    //podmienka ak je hrac alebo enemy na 0 so zivotmi tak hra konci - do funkcie cancel animation musite dat premennut
    //requestForCancelFrameRefresh, aby vam ukoncilo animaciu pre konkretny canvas
    //if(hrac.getZdravie() <= 0 || enemy.getZdravie() <= 0) cancelAnimationFrame(requestForCancelFrameRefresh);
}
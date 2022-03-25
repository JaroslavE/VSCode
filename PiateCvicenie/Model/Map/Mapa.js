function refreshMap(level){
    level.draw();
}

function isAtWall(object, level,xUpdated,yUpdated){
    //var xUpdated = object.getPosition().x + x;
    //var yUpdated = object.getPosition().y + y;
    var polomer = object.getVelkost();
   // console.log("Debug" + xUpdated + " " + yUpdated + " " + level.collectionObservers.lenght);
    for(var i in level.collectionObservers){
        x = level.collectionObservers[i].x;
        y = level.collectionObservers[i].y;
        w = level.collectionObservers[i].x + level.collectionObservers[i].w; //X
        h = level.collectionObservers[i].y + level.collectionObservers[i].h; //Y
        //console.log(x + " " + y + " " + w + " " + h);
        if((xUpdated + polomer > x) && (xUpdated - polomer < w) && (yUpdated + polomer > y) && (yUpdated - polomer < h)) return true;
    }
    //console.log("Debug - OUT of CYCLE");

    return false;
}


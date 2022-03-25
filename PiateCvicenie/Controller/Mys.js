function kliknutieMysou(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
  
    // Test each square for click
    for (var i in zoznamObjektov) {
      var objekt = zoznamObjektov[i];
      objPos = objekt.getPosition();
      rozdielX = objPos.x - x;
      rozdielY = objPos.y - y;
      x2 = rozdielX * rozdielX;
      y2 = rozdielY * rozdielY;
      r2 = objekt.getVelkost() * objekt.getVelkost();
      
      //Range kliknutia je rieseny ako kruh
      if (x2+y2<=r2) {
          objekt.showAtributes();
      }
    }
}

function pohybMysou(event){
  var x = event.pageX - canvas.offsetLeft;
  var y = event.pageY - canvas.offsetTop;

  var element = document.getElementById("MP");
  element.innerHTML = "X: " + x + " Y:" + y;

}
var keys = {};

window.onkeydown = function(event) {
    keys[event.keyCode] = true;
    //console.log(keys);
  };
  
window.onkeyup = function(event) {
    keys[event.keyCode] = false;
};
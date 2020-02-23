function Potatoes_What() {
  var potatoes = ""; 
  var x= 1;

    while (x < 8) {
        potatoes = "<br>" +  x;
        x++;
    }
    document.getElementById("Answer").innerHTML = potatoes + " potatoe, "
    }
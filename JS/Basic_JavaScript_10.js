function Potatoes_What() {
var x= 1;
var  count="";

   
    while (x < 7) {
     count = x + " potatoe,<br>";
     x++;
     document.write(count);
    } 
    if (x=7){
        document.write( x + " potatoe MORE!!!!<br>");
    }
    else if 
        (x > 7); {document.write("The End");
}
}



function for_Loop() {
var Instruments = ["Tambourine", "Cello","Bass Viola","Flute", "Tuba", "Oboe", "Bass Guitar","Acoustic Guitar", "Electric Guitar", "Xylophone"];
var Content = "";
var i;
    for (i = 0; i < Instruments.length;) {
        Content += Instruments[i] + "<br>";
        i++;
    } 
        document.getElementById("List_of_Instruments").innerHTML = Content;
  
}


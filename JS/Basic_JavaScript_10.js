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

function array_Function() {
    var kiddos = [];
    kiddos[0] = "Jordan Rebecca";
    kiddos[1] = "Lawrence Niles";
    kiddos[2] = "Frankie Paige";
    kiddos[3] = "Dyson Gregory";
    kiddos[4] = "Li'l Bit";
    document.getElementById("Array").innerHTML = "I have four children:<br>" + kiddos[0] + ": 30<br>" + kiddos[1] + ": 23<br>" + kiddos[2] + ": 22<br>" + kiddos[3] + ": 20<br>" + "and the biggest kiddo of them all... My Staffy, " + kiddos[4] + ": 5";
}

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
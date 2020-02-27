function constant_Function() {
     const Instruments_Inv = {
     type:"cello",
     brand:"DZStrad",
     color:"ebony"};
 {document.getElementById("Constant").innerHTML = "Musical Instrument Selected and IN STOCK:<br>Instrument Type: " + Instruments_Inv.type +"<br>Brand: " + Instruments_Inv.brand + "<br>Color: " + Instruments_Inv.color;
}
}

function constant_Update(){
    const Instruments_Inv = {
        type:"cello",
        brand:"DZStrad",
        color:"Ebony"};

        Instruments_Inv.type ="piccolo";
        Instruments_Inv.model = "#14917";
        Instruments_Inv.brand ="Powell";
        Instruments_Inv.price ="$19,190.00";
        Instruments_Inv.color = "14K Rose Gold";

    
    {document.getElementById("Update").innerHTML ="Musical Instrument Selected and IN STOCK:<br>Instrument Type: " + Instruments_Inv.type +"<br>Brand: " + Instruments_Inv.brand + "<br>Model: " + Instruments_Inv.model + "<br>Price: " + Instruments_Inv.price +  "<br>Color: " + Instruments_Inv.color;
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
         count += x + " potatoe,<br>";x++;
        
         document.getElementById("Potatoes").innerHTML = count;
        } 
        if (x=7){
            document.getElementById("Potatoes_More").innerHTML = x + " potatoe MORE!!!!<br>";
        }
        else if 
            (x > 7); {document.getElementById("Potatoes_Done").innerHTML = "The End";
    }
    }

    function Demo_Let_Keyword() {
        document.getElementById("Example").innerHTML = 
        `This is an example of BLOCK SCOPE using the LET variable, as shown through the Demo_Let_Keyword() function (below):<br><br>
        
        function Demo_Let_Keyword() {<br>
            var x = 25;<br>
            document.getElementById("Demo1").innerHTML = x;<br>
            {<br>
            let x = 25*2;<br>
            document.getElementById("Demo2").innerHTML = x;<br>
            }<br>
            document.getElementById("Demo3").innerHTML = x;<br>
            } <br><br>
            This will Return the following:`;{

        var x = 25;
        document.getElementById("Demo1").innerHTML = x;}
        {
let x = 25*2;
document.getElementById("Demo2").innerHTML = x + " (BLOCK SCOPE with the use of LET)";
}
document.getElementById("Demo3").innerHTML = x;
    }


function Stock_Inventory_Item() {
    let instrument = {
        type:"bassoon",
        make:"Heckel",
        model:"#10924",
        year:"1970",
        color:"mahogany",
        condition:"used",
        price:"45,000.00",
        inStock: true,
        inventory: function() {
            return "Instrument: " + this.type + "<br>Make: " + this.make +"<br>Model: " + this.model + "<br>Year: " + this.year + "<br>Color: " + this.color + "<br>Condition: " + this.condition + "<br>Price: " + this.price + "<br>In Stock: " + this.inStock },
        }     
     document.getElementById("New_Item").innerHTML = instrument.inventory();
    }

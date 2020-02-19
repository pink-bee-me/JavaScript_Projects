function Call_Loop() {
var count = 1;
var counting= "";
while (counting < 21) {
    counting += "<br>" + count;
    (count++);
}
document.getElementById("Loop").innerHTML = counting;
}
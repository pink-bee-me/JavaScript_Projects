function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
}

var x = document.getElementById("myAudio") , y = document.getElementById("myAudio");
function playAudio() {
    x.play();
}
 function pauseAudio() {
     y.pause();
 }
 
function playback_details() {
    var details= "Title: Short Skirt, Long Jacket";
    details += " / by Cake";
    document.getElementById("description").innerHTML = details;
}
    


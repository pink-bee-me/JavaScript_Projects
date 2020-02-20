function Call_Why() {
    let counter = 1;
   let potatoes = 0;
    while (counter > 0 && counter < 5) {
       potatoes =+ counter;
       document.getElementById("answer").innerHTML = potatoes + " potatoe, <br>";
        counter++;
    }
    {
       document.getElementById("answerContinued").innerHTML = "5 potatoe, 6 potatoe, 7 potatoe more...THE END!!!";
 }
}
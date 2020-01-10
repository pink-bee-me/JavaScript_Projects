function arithmeticCalc() {
    var sum = 5 + 6;
    document.getElementById("Math").innerHTML = "5 + 6 = " + sum;

}


function subtractionCalc() {
    var subtraction = 21 - 11;
    document.getElementById("Math_Subtraction").innerHTML = "21 - 11 = " + subtraction;
}


function multiplication() {
    var simple_Math = 30 * 2;
    document.getElementById("Multiply").innerHTML = "30 x 2 = " + simple_Math;
}


function division() {
    var simple_Math = 30 / 2;
    document.getElementById("Divide").innerHTML = "30 / 2 = " + simple_Math;
}

function multiple_Operation_Arithmetic() {
    var simple_Math = (15 * 3) / (6 + 3) - 7;
    document.getElementById("Multiple_Ops").innerHTML = "15 times 3, divided by the sum of 6 plus 3, then subtract 7... is equal to: " + simple_Math;
}


function modulus_Operation() {
    var simple_Math = 99 % 5;
    document.getElementById("Remainder").innerHTML = "The remainder, or modulus(%), of 99 divided by 5 is : " + simple_Math;
}



var bigCity = "Dallas";
var populationBC = 1345047;
function urbanVsRural() {
    var smallTown = "Guthrie";
    var populationST = 11437;
    document.getElementById("BigCity_Variable").innerHTML = "The variable (bigCity) is an example of a  Global variable: therefore, its scope includes inside and outside of this function (urbanVsRural()). That is why I can print its value: " + bigCity +
    "... The variable (smallTown) is an example of a variable with Local scope; therefore,it will print out here, BUT it can only be used within this function because it was declared within the scope of this function: " + smallTown
    console.log(bigCity);
    console.log(smallTown);
}
//Added (var smallTown) as a global variable to correct the undefined variable error reported by the console log //
var smallTown ="BFE"; 
function outerLimits() {
    document.getElementById("outOfBounds").innerHTML = "... I can use the Global variable here too! See? " + bigCity + 
    "...BUT, when I try to use the variable (smallTown) outside of the (urbanVsRural()) function, the computer will throw an error because the variable is undefined due to its local scope...See? " + smallTown +  " ...unless I either omit the (smallTown) variable or declare it again either globally(outside of the function) or in this function too the program won't complete its run. "
    console.log(bigCity);
    console.log(smallTown);
    }


// Step 120-121 JavaScript Exercise //
function Vehicle(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily =  new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "  + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}







// Step 124 Reserved Words and Object Constructor Function  JavScript Exercises 
// var true;
//true = true;
//function  myReservedWord() {
//document.getElementById("Reserved_Word").innerHTML = "1 + 1 = 2 " + true;
//}
//console.log(true);
//THIS DOESN'T WORK AND SHUTS DOWN MY WHOLE PAGE!!!! //


// Step 122 New and This Keywords and Step 124 Object Constructor -  Javascript Exercises //
function Journal_Log(Entry_Date, Department, Entry, Created_By) {
    this.Journal_Log_Entry_Date = Entry_Date;
    this.Journal_Log_Department = Department;
    this.Journal_Log_Entry = Entry;
    this.Journal_Log_Created_By = Created_By;
}

var entry1 = new Journal_Log("01/19/2020", "Accounting", "Checked Out File# 16752", "LaurieSue Peterson");
var entry2 = new Journal_Log("01/19/2020", "Purchasing", "Checked Out File# 39972", "Kanye West");
var entry3 = new Journal_Log("01/17/2020", "Sales", "Checked Out File# 75534", "Elmer Fudd");
var entry4 = new Journal_Log("01/10/2020", "Security", "Checked Out File# 446289", "Yosemite Sam");

function my_New_This()  {
    document.getElementById("New_and_This").innerHTML =
    "On " + entry4.Journal_Log_Entry_Date + " The Journal/Log Entry Was: " +
     entry4.Journal_Log_Entry + "  " + entry4.Journal_Log_Department + "  " + entry4.Journal_Log_Created_By;
}





// Step 126-127 Nested Functions - JavaScript Exercises //
function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var start = 0;
        function plus_ten(){
            start += 10;
        }
    plus_ten();
    return start;
    }
}

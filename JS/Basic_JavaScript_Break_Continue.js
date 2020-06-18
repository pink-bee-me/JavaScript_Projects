var content = "";
var i=0;
let students=["Mary","Tom","Bob","Alex","Rick","Dave","Sue","Carl","Agnes","Gary","Pete","Bea","Bev","Gene","Jean","Lee","Leah","Tim","Burt","Will","Sal","Tia","Mya","Rudy"];
var classPeriod;
var indexOfPick;
var removedPick;

function pickMe() {

    for (i = 0; i < students.length; i++) { 
    arrayFunction();
             
    if (i === 6){
        break;
    }    
        
    function arrayFunction() {
    pick = students[Math.floor(Math.random() * students.length)]; 
    classPeriod = i + 1;
    console.log(pick + " : " + classPeriod);
    indexOfPick =  students.indexOf(pick);  // finding index of the pick
    removedPick = students.splice(indexOfPick,1);//removing the pick from the students array so that you can not have a duplicate random pick
    console.log(students);
    console.log(removedPick);
    {
    var officeAid = [removedPick];
    {
    content += "<br>Student Aid: " + officeAid + "<br>Class Period: "
    + classPeriod + "<br><br>";
    document.getElementById("You_Got_It").innerHTML = content;

    
        
}}}}}

document.getElementById("Closed").innerHTML = ' All Spots For Office Aid Are Full At This Time! Choose An ALternative Elective for the remainder of students that selected Office Aid.';  


     
function pickAlternateElective() {
    document.getElementById("Did_Not_Get_It").innerHTML = students
};
 
    
  
function Not_Odd_At_All() {
     var x;
     var response ="";

     for (x=0; x < 100;x++) { 
        response += "<br>" + x; 
        if ((x % 2) != 0) { 
       continue;};
       if (x > 20) {
           break;
       };
         document.getElementById("No_OddBalls").innerHTML = response + "<br>These beautiful numbers are clearly Not 'Odd' at all!<br>";
         x++;
        }
    }
     document.getElementById("end").innerHTML = "The End.";

  
function pickMe() {


const students=["Mary","Tom","Bob","Alex","Rick","Dave","Sue","Carl","Agnes","Gary","Pete","Bea","Bev","Gene","Jean","Lee","Leah","Tim","Burt","Will","Sal","Tia","Mya","Rudy"];
    var i = 0;
    var count = i + 1;
    var pick ="";
    const officeAid = [pick]
    for ( i += i; i, i < students.length; i++)
    { pick = students[Math.floor(Math.random() * students.length)];
    officeAid.push(pick);

        if (count === 8);{
            break;
        }
    document.getElementById("You_Got_It").innerHTML = "Office Aid: " +  officeAid[i] + "  Class Hour: " + count + "<br>";
    }
    console.log(students.indexOf("Mary"));
 
document.getElementById("Closed").innerHTML ='Student: ' + pick[i] + 'All Spots For Office Aid Are Full At This Time! Choose An ALternative Elective For This Semester.';
}




 function Not_Odd_At_All() {
     var x;
     for (x = 1; x < 20; x++) {
         if ((x % 2) != 0){
              {continue;}
              document.getElementById("No_OddBalls").innerHTML = "This beautiful " + x + ", is clearly Not 'Odd' at all!<br>";
         }
    document.getElementById("end").innerHTML = "The End.";
         }}
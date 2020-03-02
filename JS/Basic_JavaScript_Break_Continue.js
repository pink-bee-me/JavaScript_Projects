const students=["Mary","Tom","Bob","Alex","Rick","Dave","Sue","Carl","Agnes","Gary","Pete","Bea","Bev","Gene","Jean","Lee","Leah","Tim","Burt","Will","Sal","Tia","Mya","Rudy"];
    var i = 0;
    var classPeriod = i +1;
    
    const officeAid = [];


function pickMe() {




    for (i < (students.length + 1); i++;)
    {
         let pick = students[Math.floor(Math.random() * students.length)];

    officeAid.splice(0,0,pick);

document.getElementById("You_Got_It").innerHTML = "Office Aid: " +  officeAid[i] + "  Class Hour: " + classPeriod + "<br>";


          if (i > 6);{
            break;}
         
          } 

          document.getElementById("Closed").innerHTML = ' All Spots For Office Aid Are Full At This Time! Choose An ALternative Elective.';
        }









 function Not_Odd_At_All() {
     var x=1
     for (x += x; x < 21;) { document.getElementById("No_OddBalls").innerHTML = "This beautiful " + x + ", is clearly Not 'Odd' at all!<br>";x++;
    ((x % 2) != 0);{
        continue;
 (x > 21);
    break;
     }    

     
     
     }  
     document.getElementById("end").innerHTML = "The End.";
    }
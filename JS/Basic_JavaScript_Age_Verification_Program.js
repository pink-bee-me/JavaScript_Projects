


function convert_date() {
    var birth_date = document.getElementById("voter_DOB").value; 
    var year = birth_date.getFullYear();
    var month = birth_date.getMonth();
    var day = birth_date.getDate();
    var new_year = (year+18)
    var age_Plus_18 = new Date(new_year,month,date);
    document.getElementById("date_plus_18").innerHTML=age_Plus_18;
}


function right_DOB(){
    var today = new Date();

    var birth_date = document.getElementById("voter_DOB").value; 
    document.getElementById("date_entered").innerHTML = birth_date;
   var year = birth_date.getFullYear();
    var month = birth_date.getMonth();
    var day = birth_date.getDate();
    var new_year = (year+18)
    var age_Plus_18 = new Date(new_year,month,date);
    document.getElementById("date_plus_18").innerHTML=age_Plus_18;
    var compare_Today = today.getTime();
    console.log(compare_Today)
    console.log(age_Plus_18)
    console.log(birth_date)
    console.log("voter_DOB")
    console.log(year)

    
    var compare_Birth, can_Vote;
    compare_Birth = age_Plus_18.getTime();
    can_Vote = ((compare_Today) <= (compare_Birth))? "can Not": "CAN";
     alert("You " + can_Vote + " Vote!!!!");
} 


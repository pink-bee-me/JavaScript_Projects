function capture_And_Verify() {
 
let birth_data = document.getElementById("voter_DOB").value;


let year = birth_data.substring(0,4);
    console.log(year);

let month = birth_data.substring(5,7);
    console.log(month);

let day = birth_data.substring(8,10);
    console.log(day);

let year_Int = parseInt(year,10);
console.log(year_Int);

let month_Int = parseInt(month,10);
console.log(month_Int);

let day_Int = parseInt(day,10);
console.log(day_Int);  

let birthday = new Date(year_Int,(month_Int - 1),day_Int);
console.log(birthday);

let birthday_Calc = Date.parse(birthday);
console.log(birthday_Calc);

let today = new Date();
console.log(today);

let today_Calc = Date.parse(today);  
console.log(today_Calc);

let years_Difference = ((86400000*365*18) + (86400000*4))

let alive_18_Years = ((today_Calc) - (years_Difference)) //The Leap years are accounted for because there have been 4 in the last 18 years ...this year is a leap year but since it is not past February I did not include it.
console.log(alive_18_Years);

let can_Vote = ((birthday_Calc) < (alive_18_Years)) || ((birthday_Calc) < 0) ? alert("You have met                    the Age requirement. You can VOTE!!!") : alert("You do not meet the age requirements.                 You can NOT vote today.");

state_Your_Date = new Date(birthday_Calc)
document.getElementById("date_Entered").innerHTML = state_Your_Date.toDateString;

}

    








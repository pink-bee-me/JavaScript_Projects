function Ride_Function()  {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

//Age Verification for Cast Your Vote Program //
function  R_U_Old_E_Nuff()  {
 var d = new Date()
 


}

function age_calculation() {
 var diff_ms = Date.now() - dob.getTime()
 var age_dt = new Date(diff_ms);

 return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(caluclate_age(new Date(1982,11,4)));



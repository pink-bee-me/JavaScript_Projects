function myFunction() {
    var street_Add = "6814 Chris Madsen Rd";
    var city_State = "Guthrie, Oklahoma";
    var x = (street_Add + " " + city_State) ;
    document.getElementById("Address").innerHTML= (x);
    }

   document.getElementById("What").innerHTML= (typeof "street_Add");


function exhibit() {
document.getElementById("Proof").innerHTML = 'Bob'/2;
}

function verify_Me() {
    var food = "peanut butter and jelly sandwiches";
    document.getElementById("is_It").innerHTML= isNaN(food);

}

function verify_Me_Too() {
    var sum = 25 + 52;
    document.getElementById("is_It_So").innerHTML = isNaN(sum);
}


document.getElementById("reallyBig").innerHTML = (4E310);

document.getElementById("reallySmall").innerHTML = (-7E325);

document.getElementById("logic_yes").innerHTML = (15 < 52), (22 < 37);

console.log(50 * 5);

document.getElementById("TC").innerHTML = (99 + "Red Ballons");

document.getElementById("colorBlind").innerHTML = (0 < 0);
console.log(0 < 0);

document.getElementById("logic_boo").innerHTML = (54 ==(6 * 9));

document.getElementById("logic_boo_too").innerHTML = ((-2 * -2) == (-4  * 1));
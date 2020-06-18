function little_Piggies() {
 var piggy_1 = "This Little Piggy by Mother Goose: ";   
 var piggy_2 = "This little piggy went to market, ";
 var piggy_3 = "This little piggy stayed home, ";
 var piggy_4 = "This little piggy had roast beef, ";
 var piggy_5 = "This little piggy had none. ";
 var piggy_6 = "This little piggy went ... ";
 var piggy_7 = "Wee, wee, wee,";
 var piggy_8 = "all the way home! ";
 var nursery_Rhyme = piggy_1.concat(piggy_2, piggy_3, piggy_4, piggy_5, piggy_6, piggy_7, piggy_8);
 document.getElementById("Concatenate").innerHTML = nursery_Rhyme;
 }

 function slice_Method() {
    var sentence = "Mother Goose does not refer to one particular person; Instead, Charles Perrault (one of the initiators of the literary fairy tale genre)'s publication, Tales of My Mother Goose, which is the first authenticated starting-point for the Mother Goose stories.";
    var sliced_piece = sentence.slice(7, 13);
    var long =sentence.length;
    document.getElementById("Slice").innerHTML = sliced_piece;
    console.log(sliced_piece + " slice");
    document.getElementById("Length").innerHTML = long;
    console.log(long + " length");
}

function see_Me() {
    var sentence = "Mother Goose does not refer to one particular person; Instead, Charles Perrault (one of the initiators of the literary fairy tale genre)'s publication, Tales of My Mother Goose, which is the first authenticated starting-point for the Mother Goose stories.";
    var find = sentence.search("Goose");
    document.getElementById("FindMe").innerHTML = find + " : The function see_Me() runs onclick and uses the search() method to return the location of the first occurrence of the argument that was requested in the parameter of the search() method,... in this case, that was 'Goose'. 'Goose' was found at the seventh position in the string that was searched (see variable 'sentence')";
}

function make_Me_Big() {
var little = "i am uppercase!";
var big = little.toUpperCase();
document.getElementById("UpCase").innerHTML = big;
console.log(big + " toUpperCase");
}

function not_My_Kind() {
var y = 7;
var x = 22;
var why = y.toString();
document.getElementById("Changing_Kind").innerHTML = why;
document.getElementById("Alt_Changing_Kind").innerHTML = x.toString() + "  ...Now both of the values you see here are no longer the primitive type of number, but the primitive type of string.";
}


function precision_Method() {
var longNum = 19710419.04291990101819960203199803222000;
document.getElementById("Fix_Long_Num").innerHTML = longNum.toPrecision(15);
}

function toFixed_Method() {
  
var num = 19700419.04291990101819960203199803222000;
var alt_num = 19700419;
var fix_1 = num.toFixed();
document.getElementById("Default_No_Places").innerHTML = fix_1 + " :  This example (num.toFixed()) returns the default value, which means...the number with no decimal places.";
var fix_2 = num.toFixed(9);
document.getElementById("Fixed_To_9_Places").innerHTML = fix_2 + " : This example (num.toFixed(9)) returns the value of the number with nine decimal places.";
var fix_3 = alt_num.toFixed(2);
document.getElementById("Fixed_To_Dollars_And_Cents").innerHTML = fix_3 + " : This example (alt_num.toFixed(2)) returns the value of the number (which had no decimal places) plus two decimal places. This would come in handy with reports, graphs, tables , etc...where having a uniform way to visually represent the numbers as a string is needed. So, where there where none it can put the placeholders there, in this case it was two decimal places.";
}


function what_Is_It() {
 var str_1 = "This dog won't hunt!";
 var res_value_1 = str_1.valueOf();
 document.getElementById("What_Is_It_Now").innerHTML = res_value_1 + "  :  This is the value that is contained in the str_1 variable,... string";
 }
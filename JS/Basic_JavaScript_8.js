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
    var sliced_piece = sentence.slice(55,15);
    var long = sliced_piece
    document.getElementById("Slice").innerHTML = long;
    console.log(sliced_piece);
    document.getElementById("Length").innerHTML = long.length;

}
function addNewItem() {
    var item_entry = document.getElementById("newItem").value 
    var item = document.createElement("Li");
    var demo_message = "You have Added A New Item To Your List... So Don't Forget That" + item_entry + " !!!";
    
    item.innerHTML = item_entry;
    document.getElementById("myList").appendChild(item);

    document.getElementById("demo_message").style.color = "red";
    document.getElementById("demo_message").innerHTML = "You Have Added A New Item To Your List... So Don't Forget To Get That Cheddar !!!";
}
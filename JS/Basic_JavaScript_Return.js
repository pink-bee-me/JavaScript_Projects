function Get_Me_A_Value() {
    let double = function(num) {
        return num * 2;
    }
    let six = double(3);
    let twelve = double(six);
    document.getElementById("Get_You_What?").innerHTML = (twelve + double(10)- six);

}
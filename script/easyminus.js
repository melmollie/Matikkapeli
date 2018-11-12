let x, y, z; 

function uusiLasku() {
    y = Math.floor(Math.random() * 10) + 1;
    x = Math.floor(Math.random() * 10) + 1;
    z = x - y; 
    if (x >= y) {
        document.getElementById("demo").innerHTML = x + " - " + y + " = ";
    } else {
        uusiLasku.call(this);    
    }
}

function plusFunction() {
    let answer, result; 
    answer = Number(document.getElementById("pluslaskuinput").value);
    if (answer == z) {
        result = "Oikein!";
        document.getElementById("result").style.color="green";
    } else {
        result = "Yritä uudestaan!"
        document.getElementById("result").style.color="red";
    }
    document.getElementById("result").innerHTML = result;
}

function oikeaVastaus() {
    document.getElementById("pluslaskuinput").value = z;
}

uusiLasku();
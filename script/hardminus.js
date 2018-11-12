let x, y, z; 

function uusiLasku() {
    x = Math.floor(Math.random() * 110) + 1;
    y = Math.floor(Math.random() * 110) + 1;
    q = Math.floor(Math.random() * 110) + 1;
    z = x - y - q; 
    if (x >= y + q) {
        document.getElementById("demo").innerHTML = x + " - " + y + " - " + q + " = ";
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
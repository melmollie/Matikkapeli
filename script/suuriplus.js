
let x, y, z; 

function uusiLasku() {
    x = Math.floor(Math.random() * 111);
    y = Math.floor(Math.random() * 111);
    z = x + y; 
    document.getElementById("demo").innerHTML = x + " + " + y + " = ";
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
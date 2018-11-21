
let x, y, z; 
/* x = Math.floor(Math.random() * 11);
y = Math.floor(Math.random() * 11);
z = x + y;  */

function uusiLasku() {
    x = Math.floor(Math.random() * 10) + 1;
    y = Math.floor(Math.random() * 10) + 1;
    q = Math.floor(Math.random() * 5);
    z = x * y * q; 
    document.getElementById("demo").innerHTML = x + " * " + y + " * " + q + " = ";
}

function kertoFunction() {
    let answer, result; 
    answer = Number(document.getElementById("kertolaskuinput").value);
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
    document.getElementById("kertolaskuinput").value = z;
}

uusiLasku();
let x, y, z; 
x = Math.floor(Math.random() * 11);
y = Math.floor(Math.random() * 11);
z = x + y; 

document.getElementById("demo").innerHTML = x + " + " + y + " = ";

function plusFunction() {
    let answer, result; 
    answer = Number(document.getElementById("pluslaskuinput").value);
    if (answer == z) {
        result = "Oikein!";
    } else {
        result = "Yritä uudestaan!"
    }
    document.getElementById("result").innerHTML = result;
}
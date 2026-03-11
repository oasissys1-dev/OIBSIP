function convertTemprature(){

let temp = document.getElementById("temprature").value;
let unit = document.getElementById("unit").value.toLowerCase();
let result = document.getElementById("result");

if(isNaN(temp) || temp === ""){

    result.innerHTML = "Please enter a valid number";
    return;
}

temp = Number(temp);

let c,f,k;

if(unit === "celsius"){

    f = (temp * 9/5) + 32;
    k = temp + 273.15;

    result.innerHTML = temp + " °C = " + f.toFixed(2) + " °F | " + k.toFixed(2) + " K";

}

else if(unit === "fahrenheit"){

c = (temp - 32) * 5/9;
k = c + 273.15;

result.innerHTML = temp + " °F = " + c.toFixed(2) + " °C | " + k.toFixed(2) + " K";

}

else{

    c = temp - 273.15;
    f = (c * 9/5) + 32;

    result.innerHTML = temp + " K = " + c.toFixed(2) + " °C | " + f.toFixed(2) + " °F";
}

}

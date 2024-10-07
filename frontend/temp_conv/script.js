from = document.getElementById("FromUnit");
to = document.getElementById("ToUnit");
convert = document.getElementById("convert");


function updateToUnitOptions() {
    var v_from = from.value;
    var v_to = to.value;

    if (v_from && v_to && v_from !== v_to) {
        convert.disabled = false;
    } else {
        convert.disabled=true;
    }

    for (let i = 0; i < to.options.length; i++) {
        to.options[i].disabled = false;

        if (to.options[i].value === v_from) {
            to.options[i].disabled = true;
        }
    }
}

function a() {
    var v_from = from.value;
    var v_to = to.value;
    var p = document.getElementsByClassName("container")[0];
    var v_inp = parseFloat(document.getElementById("ConvertNum").value); // Get the input value

    if (!v_inp || !v_from || !v_to || v_from === v_to) return; 

    const conversions = {
        "1": { "2": (v) => (v * (9/5)) + 32, "3": (v) => v + 273.15 }, // Celsius
        "2": { "1": (v) => (v - 32) / (9/5), "3": (v) => ((v - 32) / (9/5)) + 273.15 }, // Fahrenheit
        "3": { "1": (v) => v - 273.15, "2": (v) => ((v - 273.15) * (9/5)) + 32 }  // Kelvin
    };

    // if conversions["1"] && conversions["1"]["2"] exist then...
    // conversions[1] returns { "2": (v) => (v * (9/5)) + 32, "3": (v) => v + 273.15 }
    // conversions[1][2] return then (v) => (v * (9/5)) + 32
    // and (v_inp) = v; and then put in the result of the convertion that has been changed in the var and display it
    if (conversions[v_from] && conversions[v_from][v_to]) {
        const result = conversions[v_from][v_to](v_inp);

        const ps = document.createElement("p");
        ps.textContent = `Converted Value: ${result.toFixed(2)}`; 
        p.appendChild(ps);
    }
}

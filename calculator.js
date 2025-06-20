function calculate() {
    var result = 0;
    var operator = document.getElementById('operator_select').value;
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var result_text = document.getElementById("result");

    console.log(typeof input1);

    if(operator=="plus") {
        result = input1 + input2;
    }
    //TODO: add functionality for other operations

    console.log(typeof result);
    result_text.innerHTML = "= " + result;
}

var calculate_btn = document.getElementById("calculate");
calculate_btn.onclick = calculate;

//challenge: add functionality to do calculations with more than 2 numbers
//challenge: make the calculater look better/prettier/cooler!
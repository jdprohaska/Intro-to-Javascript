





function compareNumbers() {
    resetForm();



    var inValue1 = parseFloat(document.getElementById("value1").value);


    var inValue2 = parseFloat(document.getElementById("value2").value);


    if (isNaN(inValue1) && isNaN(inValue2)) {
        document.getElementById("NaN1").innerHTML = "Invalid!  Input must be a number.";
        document.getElementById("NaN2").innerHTML = "Invalid!  Input must be a number.";
    }
    else if (isNaN(inValue1)) {
        document.getElementById("NaN1").innerHTML = "Invalid!  Input must be a number.";

    }

    else if (isNaN(inValue2)) {

        document.getElementById("NaN2").innerHTML = "Invalid!  Input must be a number.";

    }


    else if (inValue1 == inValue2) {
        document.getElementById("result").innerHTML = "The two numbers are equal.";
    }

    else if (inValue1 > inValue2) {
        document.getElementById("result").innerHTML = "The Larger number is " + inValue1;
    }

    else if (inValue2 > inValue1) {
        document.getElementById("result").innerHTML = "The Larger number is " + inValue2;
    }
}

function resetForm() {

    document.getElementById("result").innerHTML = " ";
    document.getElementById("NaN1").innerHTML = " ";
    document.getElementById("NaN2").innerHTML = " "
}
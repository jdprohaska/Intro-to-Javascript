/*     TDD Cases/tests
           
*/

let validForm = true;

function processForm() {
  //this will run when the form is submitted. 
  //It will run the validation and display the message
  //alert("insides ProcessForm()");

  validForm = true;

  resetResults();

  let inValue = document.querySelector("#value1").value;
  let returnMsg = validateName(inValue);
  document.querySelector("#value1_err").innerHTML = returnMsg;

  inValue = document.querySelector("#value2").value;
  returnMsg = validateNameTwo(inValue);
  document.querySelector("#value2_err").innerHTML = returnMsg;

  if (validForm) {
    alert("This Is one valid form!");
    compareNames();
  }
}

function validateName(inValue) {

  inValue = inValue.trim();

  if (inValue == "" || inValue == " ") {
    validForm = false;
    return "Input Required Name";
  }

  if (inValue.indexOf("/") != -1 || inValue.indexOf("\\") != -1 || inValue.indexOf("'") != -1) {
    validForm = false;
    return "Invalid Content";
  }

  if (inValue.length > 100) {
    validForm = false;
    return "Limit 100 characters"
  }

  if (!isNaN(inValue)) {
    validForm = false;
    return "Invalid Content";
  }

  return "Valid Content";
}



function validateNameTwo(inValue) {

  inValue = inValue.trim();

  if (inValue == "" || inValue == " ") {
    validForm = false;
    return "Input Required Name";
  }

  if (inValue.indexOf("/") != -1 || inValue.indexOf("\\") != -1 || inValue.indexOf("'") != -1) {
    validForm = false;
    return "Invalid Content";
  }

  if (inValue.length > 100) {
    validForm = false;
    return "Limit 100 characters"
  }

  if (!isNaN(inValue)) {
    validForm = false;
    return "Invalid Content";
  }

  return "Valid Content";
}





function compareNames() {

  let inName1 = document.getElementById("value1").value;
  let inName2 = document.getElementById("value2").value;

  if (inName1.toUpperCase() == inName2.toUpperCase()) {
    document.getElementById("result").innerHTML = 'Same';
  } else {

    document.getElementById("result").innerHTML = "Different";
  }
}

function resetResults() {

  document.getElementById("result").innerHTML = "";
  document.querySelector("#value1_err").innerHTML = " ";
  document.querySelector("#value2_err").innerHTML = " ";
}
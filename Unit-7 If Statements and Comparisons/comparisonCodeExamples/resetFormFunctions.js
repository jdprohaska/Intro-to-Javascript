// JavaScript Document

function resetNumberForm()
{
	//this function will call the form object and reset the form elements.  It will also put blanks into the results field.
	
	//alert("inside resetNumberForm()");
	
	document.getElementById("form1").reset();		//Resets the form elements to default values.  Just like reset button
		
	document.getElementById("results").innerHTML = "";	//Blank out the results are on the form.  Ready for next set of values.
}

function resetColorForm()
{
	//this function will call the form object and reset the form elements.  It will also put blanks into the results field.
	
	//alert("inside resetColorForm()");
	
	document.getElementById("form2").reset();		//Resets the form elements to default values.  Just like reset button
		
	document.getElementById("colorResults").innerHTML = "";	//Blank out the results are on the form.  Ready for next set of values.
}
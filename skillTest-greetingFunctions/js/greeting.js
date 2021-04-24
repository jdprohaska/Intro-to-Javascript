// JavaScript Document

function greeting()
{
	//alert("inside greeting()");
	
	let header = document.getElementById("greeting");	// 1. Create header object to work with
	//Changed these both to variables to get header.style to stop overriding the
	//previous styles every time a new header.style was called
	let style1 = "font-size: 48px;";							// 2. Set the font size to something between 24-48
	let style2 = "text-align: center;";							// 3. Center the greeting in the displayable area

	let today = new Date();						//Create a date object called today with todays date and time in it.
	
	currentTime = today.getHours();				//Pull the hour of the day from the date object.  
	
	if(currentTime >= 6 && currentTime < 12)
	{
		header.innerHTML = "Good Morning!";
		header.style = "color: green;" + style1 + style2;						// 4. Set a color for the greeting
	}
	else
	{
		if(currentTime >= 12 && currentTime <17)
		{
			header.innerHTML = "Good Afternoon!";
			header.style = "color: blue;"  + style1 + style2;					// 5. Set a color for the greeting	
		}
		else
		{
			header.innerHTML = "Good Evening";
			header.style = "color: red;"  + style1 + style2;					// 6. Set a color for the greeting		
		}
	}
	
}//end greeting()
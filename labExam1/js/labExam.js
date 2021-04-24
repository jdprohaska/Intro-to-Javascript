function signIn() {
    let txt;
    let customerName = prompt("please enter your name:", "your Name")
    if (customerName == null || customerName == "") {
        txt = "User cancelled the prompt.";
      } else {
        txt = customerName + "! How are you today?";
      }
      document.getElementById("name").innerHTML = txt;
}

function enlargeImage(inImage)	{
    //alert("inside enlargeImage()" );
    document.getElementById("picHTML5").style.transform = "scale(2,2)";
    document.getElementById("picCSS3").style.transform = "scale(2,2)";
    document.getElementById("picJS").style.transform = "scale(2,2)";
}

function enlargeImage(inImage)	{
    //alert("inside enlargeImage()" );
    document.getElementById("picHTML5").style.transform = "scale(2,2)";
    document.getElementById("picCSS3").style.transform = "scale(2,2)";
    document.getElementById("picJS").style.transform = "scale(2,2)";
}

function originalSizeImage(inImage)	{
    //alert("inside originalSizeImage()");	
    document.getElementById("picHTML5").style.transform = "scale(1,1)";
    document.getElementById("picCSS3").style.transform = "scale(1,1)";					
    document.getElementById("picJS").style.transform = "scale(1,1)";					
}

window.changeColour = function(value)
{
    
    var color = document.body.style.backgroundColor;
    switch(value)
    {
        case 'b':
            color = "#0000ff";
        break;
        case 'r':
            color = "#add8e6";
        break;
        case 'p':
            color = "#00008b";
        break;
    }
    document.body.style.backgroundColor = color;
}

function getCurrentDate(){
    var curDate=new Date();
    document.getElementById("showDate").innerHTML = curDate.toString();
}

var myString = "Place your string data here, and as much as you like. The animation is coming from Javascript! ";
var myArray = myString.split("");
var loopTimer;
function frameLooper() {
	if(myArray.length > 0) {
		document.getElementById("myTypingText").innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer); 
                return false;
	}
	loopTimer = setTimeout('frameLooper()',70);
}
frameLooper();

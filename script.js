function firstChar(text) {
  // your code here
	if (text === ' ' || text === '') {
		return '';
	}
	else{
		text.trim(' '); 
		return text.charAt(0);
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text)); 

function shortcut(s1, s2) {
  // your code here
	if (s1.length === 0 || s2.length === 0) {
    return '';
  }
	

  // Return the initial letters of the input strings
  return s1[0].toUpperCase() + s2[0].toLowerCase();
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));



function shortcut(s1, s2) {
  // your code here
	const initial1 = s1.charAt(0);
	const initial2 = s2.charAt(0);
  
	return initial1 + initial2;
}
// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));



function generator()
{
	var str = document.getElementById("a").value;
	str = str.replace(/\s+/g, '');
	str = str.replace(/[^a-zA-Z0-9+]/g, "");
	str = str.toLowerCase();
	var str1= str.split("").reverse().join("");
	var n = str.localeCompare(str1);
	
	if(n==0){
		document.getElementById("rate").innerHTML =  '[palindrome]';
	}
	else{
		document.getElementById("rate").innerHTML =  '[not a palindrome]';
	
	}
}



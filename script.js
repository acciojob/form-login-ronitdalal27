function getFormvalue() {
    //Write your code here
	const inps = document.querySelectorAll("input");
	let firstname = inps[0].value;
	let lastname = inps[1].value;
	let fullname = firstname+" "+lastname;
	alert(fullname);
	

}

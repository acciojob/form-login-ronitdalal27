function getFormvalue() {
    //Write your code here
	const inps = document.querySelectorAll("input");
	let fname = inps[0].value;
	let lname = inps[1].value;
	alert(fname+" "+lname);
	

}

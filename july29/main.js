function validateForm(){
	var errorString;

	errorString = Form.validateLength(first_name.value);
	console.log(errorString);

}

function throwError(error){
	document.getElementById("error").innerHTML = error;
	return false;
}
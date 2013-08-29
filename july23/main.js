function validateForm(){
	var first_name = Form.first_name.value;
	var first_name = first_name.toLowerCase();

	var last_name = Form.last_name.value;
	var last_name = last_name.toLowerCase();

	var zip_code = Form.zip_code.value;
	function isValidZip( zip_code ){
		if ( zip_code.length == 0 ){
			return false;
		}
		var intValue = parseInt( zip_code );
		console.log( zip_code );
	}
}

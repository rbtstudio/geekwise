/*
var str1;
var str2 = "Data Structure"; 				// string

var num = 9;								// integer

var arr_empty = Array();					// empty Array
var	arr_not_empty("1", "2", "3", "4", "5");	// not empty Array

var obj1 = new Object();
var obj2 = {
	name	: "Matthew",
	height	: "6 feet, 4 inches" 
}
*/

/*
var str = "Is today Monday?";

//console.log( str );
//alert( str );
//confirm( str );

var is_monday = confirm( str ); // <-- conditional | if statement

// conditional == based on some conditions, do some stuff.
if( is_monday ){
	// do some stuff
	document.write( "Yup. Sure is." );
}else{
	document.write( "Whew... that much closer to Friday!" );
}
*/

/*
var age = 37;
console.log( typeof( age ) );


while( age <= 50 ){ // <-- while something is true, do some stuff.
	// do some stuff

	console.log( "Age = " + age );
	age = age + 1;

}
*/

var money_orig = 45.67;

console.log( money_orig );

money_down = Math.floor( money_orig );
money_up = Math.ceil( money_orig );

console.log( "Up: " + money_up );
console.log( "Down: " + money_down );

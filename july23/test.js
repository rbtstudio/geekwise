//var cow = "A string having to do with cows.";

//console.log(cow.toLowerCase());

//returns the character at position
//console.log(cow.charAt(4));

//returns a substring
//console.log(cow.slice(4, 12));

//returns the position of the pattern
//optional second parameter start at position n
//console.log(cow.indexOf("g", 8));

/*

function get_string_between( string, start_pattern, end_pattern ){
	var startAt =  string.indexOf( start_pattern );
	var endAt = string.indexOf( end_pattern );

	//console.log( string.slice(startAt, endAt) );
	return string.slice(startAt, endAt);
}

var answer = get_string_between("I like chEese, but also prefer vegetables on my pizza.", "ee", "zz");

console.log(answer);
*/

//object literals | storing data
var kitten = {
	"eye_color"	: "brown",
	"initiate_purr" : function(){

	}
};

//object constructor | creating template
function Kitten(){
	this.eye_color = "brown";
	var initiate_purr = function(){

	};
}


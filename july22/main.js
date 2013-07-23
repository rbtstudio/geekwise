function colorChange(){
	//document.body.style.backgroundColor = get_random_color();

	/*
	if(document.body.style.backgroundColor == "grey"){
		document.body.style.backgroundColor = "blue";
	} else {
		document.body.style.backgroundColor = "grey";
	}
	*/

	//document.body.style.backgroundColor = randomColor();
}


function randomColor(){
	var color = ["cyan", "magenta", "yellow", "black"]; //things inside an array are called elements
	var colorLength = color.length; //get the length of array
	var randColor = Math.floor(Math.random()*colorLength); //randomize number

	//return color[randColor];
}


/*Color Randomizer Function*/


function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

// var text = null;
// console.log(text.length);



//method is the samething as a function, just buried within line





var kitten = {
	"eye_color"	: "brown",
	"fur"		: "long hair",
	"collar"	: true,
};

//console.log("collar" in kitten);

if( "fur" in kitten ){
	console.log("The kitten has " + kitten.fur + " that is a pain to keep brushed.");
}





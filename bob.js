// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.

// if question, Sure
// if yelling, whoa chill
// if nothing, fine be that way
// else whatever


var Bob = function(string) {
	var splitInput = string.split('');
	var exclamatory = [];

	splitInput.filter(function(value){

	if (  ) {
// code for yelling case
	}	else if( splitInput.indexOf('?') === splitInput[splitInput.length-1] && /*needs other case to not confuse with yelling case*/ ) {
		return 'Sure';
	} else if ( string.indexOf(' ' === 0) || string === '') {
		return 'Fine. Be that way!';
	} else {
		return "Whatever."
	}
};




module.exports = Bob;
// 1. Write a function called 'tripleFive' which loops three times using a for loop.
// Each iteration of the loop, output 'Five!' using console.log.
var tripleFive = function() {
	for (var i=0; i<3; i++) {
		console.log('Five!');
	}
}
tripleFive();


// 2. Write a function called 'lastLetter' which takes a single string argument
// and returns the last character in the string.
var lastLetter = function(word) {
	return word.charAt(word.length - 1);
};

console.log(lastLetter('hello'));


// 3. Write a function called 'square' which takes a single argument
// which is a number, and returns number * number.
var square = function(num) {
	return num * num;
};

console.log(square(3));


// 4. Write a function called 'negate' which takes a single number argument
// and returns the negative of that number.
var negate = function(num) {
	return -num;
};

console.log(negate(5));


// 5. Write a function called 'toArray' which takes three arguments
// and returns an array with each of those arguments as items.
var toArray = function(args) {
	newArray = [];
	for(var i=0; i<arguments.length; i++) {
		newArray.push(arguments[i]);
	}
	return newArray;
};

console.log(toArray(1,4,5));


// 6. Write a function called 'startsWithA' which takes a single string argument
// and returns true if the given string's first letter is 'A' and false otherwise.
var startsWithA = function(str) {
	if (str.charAt(0) === 'A' || str.charAt(0) === 'a') {
		return true;
	}
	else {
		return false;
	}
};

console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));


// 7. Write a function called 'excite' which takes a single string argument
// and returns the given string plus three exclamation marks.
var excite = function(str) {
	return str + '!!!';
};

console.log(excite('yes'));


// 8. Write a function called 'sun' which takes a single string argument and returns
// true if the string contains the word 'sun' within it. You may use the indexOf
// method that is built-in to strings, or you can do it manually with a for loop.
var sun = function(str) {
	return str.indexOf('sun') !== -1;
};

console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));


// 9. Write a function called 'tiny' which takes a single number argument
// and returns true if the number is between 0 and 1.
var tiny = function(num) {
	return num > 0 && num < 1;
};

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));


// 10. Write a function called 'getSeconds' which takes a single string argument
// in the format 'MM:SS' (hours, minutes, and seconds) and returns the total number
// of seconds represented by that timespan.
var getSeconds = function(time) {
	timeArray = time.split(':').reverse();
	var seconds = 0;
	for(var i=0; i<timeArray.length; i++) {
		seconds += timeArray[i] * Math.pow(60,i);
	}
	return seconds;
};

console.log(getSeconds('01:03'));
console.log(getSeconds('01:10:25'));











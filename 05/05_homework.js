// Q1

//var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
//console.log(Math.max(...numberList))
// works but isnt a function

var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];

function getNumber() {
 return  [
  Math.max(...numberList)
  ];
}

console.log(getNumber());



// q2


var pepperElement = ['dog', 'puppy', 'fur'];

function pepperMan() {
if( pepperElement.length > 0 ) {
		return true;
	
}	else {
	return false;

}}

console.log(pepperMan());





// q3

var candyMan = ['lollipop', 'gum', 'gummies', 'ice cream', 'jolly joes'];


function eatCandy(yum) {
var ar = [];
for(var i = 1; i < yum.length; i += 2) {  // take every second element
    ar.push(yum[i]);
}
return ar;
}

console.log(eatCandy(candyMan));





// q4

var sum = [1, 2, 3, 4, 50].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum); 





// q5

function palindrome(myString){
var lowerCase = myString.toLowerCase();

var reString = lowerCase.split('').reverse().join('');

/* Check to see if myString is a Palindrome*/
if(lowerCase === reString){
  
  console.log('true');
}else{
  
   console.log('false');
}
}
palindrome('hey')



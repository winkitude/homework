// With a little help from the internet

var bottles;
for (numberOfBottles = 99; numberOfBottles >= 1; numberOfBottles = numberOfBottles - 1) 
{
    if (numberOfBottles == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(numberOfBottles + ' ' + bottles + ' of beer on the wall.');

    if (numberOfBottles < 99) {
        console.log(numberOfBottles + ' ' + bottles + ' of beer on the wall.');
    }
    console.log(numberOfBottles + ' ' + bottles + ' of beer.');
    console.log('Take one down.');
    console.log('Pass it around.');
    if (numberOfBottles == 1) {
        console.log('No bottles of beer on the wall.');
    }
}


/* Attempt #1

var bottles = 99


var b = ' bottles of beer on the wall. ';
var c = ' bottles of beer. Take one down, pass it around';
var d = ' bottles of beer on the wall.';


while(bottles > 0) {
	console.log(bottles, b, bottles, c, bottles - 1, d);
	bottles --
}

*/
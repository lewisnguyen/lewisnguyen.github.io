/* This is a index javascript file */
console.log("Hello\n the World");
console.log("My name is Lewis");
console.log("I am 25 year olds");
console.log(6 + 3);
console.log(6 / 3);
console.log(6 * 3);
console.log(6 - 3);
let a = "Hello from javascript";
a = "Make some change!";
console.log(a);
const PI = 3.14;
console.log(PI);
/*
const name = prompt("Enter your name: ");
alert("Hello, " + name);
*/
/**
* Function that calculate the VAT free
*/
let calculate_VAT = function(_price) {
	let _total = _price * 20.6; // Multiply _price by 20.6 times
	console.log("The price when It is multiplied by 20.6 times: " + _total); // Log
	let _VAT = _total/100; // Calculate VAT
	console.log("The final VAT fee: " + _VAT); // Log
	return _VAT;
}
let calculate_price = function(_price) {
	let _final_price = _price + calculate_VAT(_price);
	return _final_price;
}
let _final_price = calculate_price(20000);
console.log(_final_price);
let convert_Celsius_to_Fahrenheit = function(_Celsius) {
	let _Fahrenheit = _Celsius * 9/5 + 32;
	return _Fahrenheit;
}
let _Fahrenheit = convert_Celsius_to_Fahrenheit(32);
console.log(_Fahrenheit);
let _number1 = 5;
let _number2 = 3;
let swap_number = function(_number3, _number4) {
	let _saved_data = _number3;
	_number1 = _number4;
	_number2 = _saved_data;
}
swap_number(_number1,_number2);
console.log(_number1);
console.log(_number2);
/*
const _number = Number(prompt("Enter the number: "));
if (_number > 0) {
	console.log(`${_number} is positive`);
}
*/
let the_next_day = function(_day_name) {
	switch(_day_name) {
		case "monday":
		alert("The next day is Tuesday");
		break;
		case "tuesday":
		alert("The next day is Wednesday");
		break;
		default:
		alert("I can't understand you");
	}
}
/*
const _day_name = prompt("Enter the day's name: ");
the_next_day(_day_name);
*/
let compare_number = function(_number1,_number2) {
	if (_number1 > _number2) {
		alert("The number1 is greater than the number2");
	} else if (_number1 < _number2) {
		alert("The number2 is greater than the number1");
	} else {
		alert("The number1 and the number2 are equal!");
	}
}
const _number_1 = prompt("Enter the number 1: ");
const _number_2 = prompt("Enter the number 2: ");
compare_number(_number_1,_number_2);
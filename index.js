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
let calculate_VAT = function(_price) {
	let _total = _price * 20.6;
	let _VAT = _total/100;
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
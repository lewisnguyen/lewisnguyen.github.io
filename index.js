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
/*
const _number_1 = Number(prompt("Enter the number 1: "));
const _number_2 = Number(prompt("Enter the number 2: "));
compare_number(_number_1,_number_2);
*/
let nb1 = 0; // Number(prompt("Enter nb1:"));
let nb2 = 0;// Number(prompt("Enter nb2:"));
let nb3 = 0;// Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

//-----------------------------
let day_of_month = function(_current_month) {
	switch (_current_month) {
		case 1:
		alert("This month has 31 days");
		break;
		case 2:
		alert("This month has 28 days");
		break;
		case 3:
		alert("This month has 31 days");
		break;
		default:
		alert("You enter an uncorrect month!");
	}
}
/*
let _current_month = Number(prompt("Enter the current month: "));
day_of_month(_current_month);
*/
let calculate_hour = function(hour, _minute) {
	let _hour = hour;
	if (_hour < 23) {
		if (_minute === 60) {
			_hour++
		}
	} else if (_hour > 23) {
		alert("You enter wrong hour!");
	} else {
		if (_minute === 60) {
		_hour = 0;
	}
	}
	return _hour;
}
let calculate_minute = function(minute, _second) {
	let _minute = minute;
	if (_minute < 59) {
		if (_second === 60) {
			_minute++;
		}
	} else if (_minute > 59) {
		alert("You enter wrong minute!");
	}
	return _minute;
}
let one_second_later = function(_current_time = []) {
	let _array_length = _current_time.length;
	let i = 0;
	let text = ["h", "m", "s"];
	let _time = [];
	for ( i; i < _array_length; i++) {
		_time[i] = _current_time[i];
		if (i == _array_length - 1) {
			_time[i]++;
		}
	}
	let _final_minute = calculate_minute(_time[1], _time[2]);
	if (_final_minute === 60) {
		_final_minute = 0;
	}
	let _final_hour = calculate_hour(_time[0], _final_minute);
	if (_time[2] === 60) {
		_time[2] = 0;
	}
	let _final_time = _final_hour + "h" + _final_minute + "m" + _time[2];
	alert(_final_time);
}
let _current_time = [];
_current_time[0] = Number(prompt("Enter the current hour: "));
_current_time[1] = Number(prompt("Enter the current minute: "));
_current_time[2] = Number(prompt("Enter the current second: "));
one_second_later(_current_time);

    
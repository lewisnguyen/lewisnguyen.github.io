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
let one_second_later = function(_current_hour, _current_minute, _current_second) {
	_current_second++;
	if (_current_second === 60) {
		_current_minute++;
		_current_second = 0;
	}
	if (_current_minute === 60) {
		_current_hour++;
		_current_minute = 0;
	}
	if (_current_hour === 24) {
		_current_hour = 0;
	}
	if (_current_hour === 0 && _current_minute === 0 && _current_second === 0) {
		alert("Midnight");
	} else {
		alert(_current_hour +  "h" + _current_minute + "m" + _current_second + "s");
	}
}
/*
let _current_hour = Number(prompt("Enter the current hour: "));
if (_current_hour >= 24) {
	alert("You entered wrong hour! Please enter another hour again!");
	_current_hour = Number(prompt("Enter the current hour again: "))
}
let _current_minute = Number(prompt("Enter the current minute: "));
let _current_second = Number(prompt("Enter the current second: "));
one_second_later(_current_hour,_current_minute, _current_second);
*/

let run_carousel_with_for = function() {
	let i = 1;
	let text = "The array is: \n";
	for (i; i <= 10; i++) {
		text += i + "\n";
	}
	alert(text);
}
let run_carousel_with_while = function() {
	let i = 1;
	let text = "The array is: \n";
	while(i <= 10) {
		text += i + "\n";
		i++;
	}
	alert(text);
}
let find_even_and_odd_number = function() {
	let i = 1;
	let text = "Find even and odd number program: \n";
	for (i; i <= 10; i++) {
		if (i % 2 === 0) {
			text += i + " is even\n";
		} else {
			text += i + " is odd\n";
		}
	}
	alert(text);
}

/*
const _NUMBER = Number(prompt("Enter a number: "));
if (_NUMBER % 2 ===0) {
	alert("Your number is even!");
} else {
	alert("Your number is odd!");
}
*/

// const _NUMBER = Number(prompt("Enter any number: "));
let less_than_100 = function(_number) {
	while (_number < 100) {
		alert("Your number is still less than 100 :)");
		_number = Number(prompt("Enter another number: "));
	}
	alert("Your number is greater than 100!");
}
let between_50_and_100 = function(_number) {
	while (_number < 50 || _number > 100) {
		alert("Your number is not sactified the condition!");
		_number = Number(prompt("Enter an other number: "));
	}
	alert("You chose the right number :)");
}

// const _NUMBER = Number(prompt("Enter a number: "));
let number_checking = function(_number) {
	while (_number < 2 || _number > 9) {
		alert("Wrong number! Enter a number between 2 and 9!");
		_number = Number(prompt("Enter a number: "));
	}
	return _number;
}
let multiplication_table = function(_number) {
	_number = number_checking(_number);
	let i = 1;
	let _multiplied_number = 1;
	let _text = "The multiplication table for this number is: \n";
	for (i; i <= 10; i++) {
		_multiplied_number = _number * i;
		_text += _number + " * " + i + " = " + _multiplied_number + "\n";
	}
	alert(_text);
}
// multiplication_table(_NUMBER);

// const _TEXT = prompt("Enter any text: ");
let small_game = function(_text) {
	while (_text !== "yes" && _text !== "no") {
		alert("Neither yes, nor no!");
		_text = prompt("Enter any text: ");
	}
}
// small_game(_TEXT);

let number_between_1_and_100 = function() {
	let i = 1;
	let _fizz = "Fizz\n";
	let _buzz = "Buzz\n";
	let _fizzbuzz = "FizzBuzz\n";
	let _text = "All number between 1 and 100 with the condition is: \n";
	for (i; i <= 100; i++) {
		if (i % 3 === 0) {
			if (i % 5 !== 0) {
				_text += _fizz;
			} else {
				_text += _fizzbuzz;
			}
		} else if (i % 5 === 0) {
			_text += _buzz;
		} else {
			_text += i + "\n";
		}
	}
	alert(_text);
}
// number_between_1_and_100();

// const _FIRST_NAME = prompt("Enter you first name: ");
// const _LAST_NAME = prompt("Enter your last name: ");
let say_hello = (_first_name, _last_name) => alert(`Hello, ${_first_name} ${_last_name}`);
// say_hello(_FIRST_NAME, _LAST_NAME);

let square1 = function(x) {
	return x*x;
}
let square2 = (x) => { return x*x };
let show_square = () => {
	let i = 1;
	let squared_numer = 1;
	let _text = "The square of every number between 0 and 10 is: \n";
	for (i; i < 10; i++) {
		squared_numer = square2(i);
		_text += squared_numer + "\n";
	}
	alert(_text);
}
// show_square();

let min = (_number_1, _number_2) => {
	if (_number_1 < _number_2) {
		return _number_1;
	} else {
		return _number_2;
	}
}
console.log(min(5, 9));
console.log(min(25, 8));

// const _NUMBER_1 = Number(prompt("Enter number 1: "));
// const _NUMBER_2 = Number(prompt("Enter number 2: "));
// const _OPERATOR = prompt("Enter operator: ");
let calculator = (_number_1, operator, _number_2) => {
	switch(operator) {
		case "+":
		return _number_1 + _number_2;
		break;
		case "-":
		if (_number_1 > _number_2) {
			return _number_1 - _number_2;
		} else {
			return "-" + (_number_2 - _number_1);
		}
		break;
		case "*":
		return _nuber_1 * _number_2;
		break;
		case "/":
		if (_number_2 !== 0) {
			return _number_1 / _number_2;
		} else {
			return Infinity;
		}
		break;
		default:
		alert("You entered wrong operator");
		break;
	}
}
// let result = calculator(_NUMBER_1, _OPERATOR, _NUMBER_2);
// alert(result);

// const _RADIUS = Number(prompt("Enter the radius of circle: "));
let calculate_circumference = (_radius) => {
	let circumference = 2 * Math.PI * _radius;
	return circumference;
}
let calculate_area = (_radius) => {
	let area = 2 * Math.PI * (_radius ** 2);
	return area;
}
/* let circle_circumference = calculate_circumference(_RADIUS);
let circle_area = calculate_area(_RADIUS);
alert("Circumference of this circle is: " + circle_circumference + "\n" + 
	"and Area of this circle is: " + circle_area);
*/

/******************************
*
* Object-Oriented Programming *
*
******************************/
const aurora = {
	name: "Arurora",
	heath: 150,
	strength: 25,
	xp: 0,
	describle: function() {
		return `${this.name} has ${this.heath} heath, ${this.strength} strength and ${this.xp} xp`;
	}
};
aurora.heath -= 20;
aurora.strength += 10;
aurora.xp += 15;
// alert(aurora.describle());

const dog = {
	name: "Fang",
	species: "boarhound",
	size: 75,
	barks: function() {
		return "Grrr! Grrr!";
	}
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.barks()}`);

/* const _RADIUS = Number(prompt("Enter the circle radius: "));
const circle = {
	radius: _RADIUS,
	calculate_circumference: function() {
		return 2 * Math.PI * this.radius;
	},
	calculate_area: function() {
		return Math.PI * (this.radius ** 2);
	}
};


console.log(`Its circumference is ${circle.calculate_circumference()}`);
console.log(`Its area is ${circle.calculate_area()}`);
*/

const account = {
	name: "Alex",
	balance: 0,
	credit: function(_money) {
		this.balance = _money;
	},
	describle: function() {
		return `owner: ${this.name}, balance: ${this.balance}`;
	}
};
console.log(account.describle());
account.credit(170);
console.log(account.describle());

/********************************
*
* 		Array practising		*
*
*********************************/

const array_builder = {
	length: 0,
	musketeers: [],
	build: function() {
		this.musketeers = ["Athos", "Porthos", "Aramis"];
		return this.musketeers;
	},
	show: function() {
		const _array_length = this.musketeers.length;
		let i = 0;
		let _text = "The array is: \n";
		for (i; i < _array_length; i++) {
			_text += this.musketeers[i] + "\n";
		}
		alert(_text);
	},
	add: function(_data) {
		this.musketeers.push(_data);
	},
	show_using_foreach: function() {
		let _text = "The array is: \n";
		this.musketeers.forEach(_data => {
			_text += _data + "\n";
		});
		alert(_text);
	},
	show_using_forof: function() {
		let _text = "This array is: \n";
		for (const _data of this.musketeers) {
			_text += _data + "\n";
		}
		alert(_text);
	},
	delete: function(_data) {
		let i = 0;
		let _array_length = this.musketeers.length;
		for (i; i <= _array_length; i++) {
			if (this.musketeers[i] === _data) {
				this.musketeers.splice(i, 1);
			}
		}
	}
}

const musketeers = array_builder.build();
array_builder.add("D'Artagnan");
array_builder.delete("Aramis");
array_builder.delete("Porthos");
// array_builder.show_using_forof();

/* Object constructor
* const object_name = (_para_1, _para_2, _para_3,...) => {
	this.property1 = _para_1,
	this.property2 = _para_2,
	this.property3 = _para_3,
	...
}
*/

const array_create = {
	length: 0,
	values: [],
	build: function() {
		this.values = [3, 11, 7, 26, 9, 10];
	},
	sum: function() {
		let _text = "Sum of all items in values is: \n";
		let _sum = 0;
		for (_data of this.values) {
			_sum += _data;
		}
		alert(_text + _sum);
	},
	max: function() {
		let i = 1;
		let _array_length = this.values.length;
		let _text = "The maximum number in this array is: \n";
		let _max = this.values[0];
		for (i; i < _array_length; i++) {
			if (_max < this.values[i]) {
				_max = this.values[i];
			}
		}
		alert(_text + _max);
	}
}

array_create.build(); // Create array
// array_create.max();

const word_getting = {
	words: [],
	data: "",
	get_input: function() {
		this.data = prompt("Type any words, if you want to stop type \"stop\"");
	},
	get_data: function() {
			this.get_input();
		while (this.data !== "stop") {
			this.words.push(this.data);
			this.get_input();
		}
	},
	show: function() {
		let _text = "All item in words array is: \n";
		for (const _data of this.words) {
			_text += _data + "\n";
		}
		alert(_text);
	}
}
// word_getting.get_data();
// word_getting.show();

/**************************
*
* Work with String
*
***************************/

const word_exact = {
	_word_length: 0,
	_data: "",
	_lower_case: "",
	_upper_case: "",
	get_input: function() {
		this._data = prompt("Enter any word: ");
	},
	get_data: function() {
		this.get_input();
		this._word_length = this._data.length;
		this._lower_case = this._data.toLowerCase();
		this._upper_case = this._data.toUpperCase();
	},
	show_data: function() {
		this.get_data();
		const number_of_vowel = this.vowel_finder();
		const reserve_word = this.reserve_word();
		const plindrome_word = this.plindrome_finder();
		const _TEXT = "Is this word plindrome? The awnser is: " + plindrome_word;
		const _txt = "And the reserve of this word is: " + reserve_word + "\n";
		const _text = "And the number of vowels in this word is: " + number_of_vowel + "\n";
		alert("Word data is: \n" + this._word_length + "\n" + this._lower_case + " \n" + this._upper_case + "\n" + _text + _txt + _TEXT);
	},
	vowel_finder: function() {
		const vowels = ["u","e","o","a","i"];
		const word = Array.from(this._data);
		let number_of_vowel = 0;
		for (const character of word) {
			for (const item of vowels) {
				if (character === item) {
					number_of_vowel++;
				}
			}
		}
		return number_of_vowel;
	},
	reserve_word: function() {
		const _word = this._data;
		const _word_length = _word.length;
		let _reserve_word = "";
		let i = _word_length - 1;
		for (i; i >= 0; i--) {
			_reserve_word += _word[i];
		}
		return _reserve_word;
	},
	plindrome_finder: function() {
		const _punctuation = [",",".",";",":","!"];
		const _word = this._data;
		const _lower_case_word = _word.toLowerCase();
		const _word_length = _lower_case_word.length;
		let _clean_word = "";
		let _reserve_word = "";
		let check = false;
		let ok = false;
		let i = _word_length - 1;
		let j = _word_length - 1;
		// Method that remove all punctuation and space in the word
		for (i; i >= 0; i--) {
			for (const item of _punctuation) {
				if (_lower_case_word[i] !== item && _lower_case_word[i] !== " ") {
					check = true;
				} else {
					check = false;
					break;
				}
			}
			if (check === true) {
				_clean_word += _lower_case_word[i];
			}
		}
		// Method that remove all punctuation and space then reserve the word
		for (j; j >= 0; j--) {
			for (const item of _punctuation) {
				if (_lower_case_word[j] !== item && _lower_case_word[j] !== " ") {
					ok = true;
				} else {
					ok = false;
					break;
				}
			}
			if (ok === true) {
				_reserve_word += _lower_case_word[j];
			}
		}
		console.log(_reserve_word);
		if (_reserve_word === _clean_word) {
			return "yes";
		} else {
			return "no";
		}
	}
}
// word_exact.show_data();

/****************************
*
* Work with Class
*
*****************************/

class Dog {
	constructor(name, species, size) {
		this.name = name;
		this.species = species;
		this.size = size
	}
	bark() {
		if (this.species === "boarhound") {
			return "Grrr! Grrrr!";
		} else if (this.species === "terrier") {
			return "Woof! Woof!"
;		}
	}
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowvy = new Dog("Snowvy", "terrier", 22);
console.log(`${snowvy.name} is a ${snowvy.species} dog measuring ${snowvy.size}`);
console.log(`Look, a cat! ${snowvy.name} barks: ${snowvy.bark()}`);
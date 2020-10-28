// присвоїти змінну

let string1 = "Hello";
console.log(string1);
alert(string1);
document.write(string1);
document.write('<br>');
let string2 = "owu";
console.log(string2);
alert(string2);
document.write(string2);
document.write('<br>');
let string3 = "ua";
console.log(string3);
alert(string3);
document.write(string3);
document.write('<br>');
let a = 1;
console.log(a);
alert(a);
document.write(a);
document.write('<br>');
let b = 10;
console.log(b);
alert(b);
document.write(b);
document.write('<br>');
let c = -999;
console.log(c);
alert(c);
document.write(c);
document.write('<br>');
let d = 123;
console.log(d);
alert(d);
document.write(d);
document.write('<br>');
let e = 3.14;
console.log(e);
alert(e);
document.write(e);
document.write('<br>');
let f = 2.7;
console.log(f);
alert(f);
document.write(f);
document.write('<br>');
let g = 16;
console.log(g);
alert(g);
document.write(g);
document.write('<br>');
let isGood = true;
console.log(isGood);
alert(isGood);
document.write(isGood);
document.write('<br>');
let hasMoney = false;
console.log(hasMoney);
alert(hasMoney);
document.write(hasMoney);
document.write('<br>');

// Переопределить переменную

document.write('<br>');
string1 = "Hi";
console.log(string1);
alert(string1);
document.write(string1);
document.write('<br>');
string2 = "ok10";
console.log(string2);
alert(string2);
document.write(string2);
document.write('<br>');
string3 = "usa";
console.log(string3);
alert(string3);
document.write(string3);
document.write('<br>');
a = -1;
console.log(a);
alert(a);
document.write(a);
document.write('<br>');
b = 12
console.log(b);
alert(b);
document.write(b);
document.write('<br>');
c = 888
console.log(c);
alert(c);
document.write(c);
document.write('<br>');
d = 345
console.log(d);
alert(d);
document.write(d);
document.write('<br>');
e = "число Пі"
console.log(e);
alert(e);
document.write(e);
document.write('<br>');
f = "десяткове"
console.log(f);
alert(f);
document.write(f);
document.write('<br>');
g = false
console.log(g);
alert(g);
document.write(g);
document.write('<br>');
isGood = 100;
console.log(isGood);
alert(isGood);
document.write(isGood);
document.write('<br>');
hasMoney = true;
console.log(hasMoney);
alert(hasMoney);
document.write(hasMoney);
document.write('<br>');

//Створити 3 числові та 3 стрінгові константи. Вивести їх

const country = "Ukraine";
alert (country);
console.log(country);
document.write(country)
const city = "Lviv";
alert(city);
console.log(city);
document.write(city)
const location = "Amsterdam";
alert(location);
console.log(location);
document.write(location);
const age = 18;
alert(age);
console.log(age);
document.write(age);
const birth_year = 2001;
alert(birth_year);
console.log(birth_year);
document.write(birth_year);
const rand_num = -34.5;
alert(rand_num);
console.log(rand_num);
document.write(rand_num);

//з допомогою 3-х різних prompt() отримати 3 слова, котрі являються вашими ПІБ. Створити різі змінні.

let userSurname = prompt("What's your surname?");
userSurname = "Lobyk";
alert(userSurname);
console.log(userSurname);
document.write(userSurname);
let userName = prompt("What's your name?");
userName = "Maryana";
alert(userName);
console.log(userName);
document.write(userName);
let patronymicName = prompt("What's your patronymic?");
patronymicName = "Petryvna";
alert(patronymicName);
console.log(patronymicName);
document.write(patronymicName);

//Змінні з попереднього завдання зробити в одній змінній person

userSurname = "Lobyk";
userName = "Maryana";
patronymicName = "Petryvna";

let person = {
    userSurname, userName, patronymicName
};
console.log(person);

//Застосувати 4-5 завдання до всіх членів сім'ї

let fatherSurname = prompt("What's your father's surname?");
userSurname = "Lobyk";
alert(fatherSurname);
console.log(fatherSurname);
document.write(fatherSurname);
let fatherName = prompt("What's your father's name?");
fatherName = "Petro";
alert(fatherName);
console.log(fatherName);
document.write(fatherName);
let fatherPatronymic = prompt("What's your father's patronymic?");
fatherPatronymic = "Pavlovych";
alert(fatherPatronymic);
console.log(fatherPatronymic);
document.write(fatherPatronymic);

let father_person = {
    fatherSurname, fatherName, fatherPatronymic
};
console.log(father_person);

let motherSurname = prompt("What's your mother's surname?");
motherSurname = "Gordynska";
alert(motherSurname);
console.log(motherSurname);
document.write(motherSurname);
let motherName = prompt("What's your mother's name?");
motherName = "Mariya";
alert(motherName);
console.log(motherName);
document.write(motherName);
let motherPatronymic = prompt("What's your mother's patronymic?");
motherPatronymic = "Romanyvna";
alert(motherPatronymic);
console.log(motherPatronymic);
document.write(motherPatronymic);

let mother_person = {
    motherSurname, motherName, motherPatronymic
};
console.log(mother_person);

//З допомогою prompt() отримати 3 числа. Привести їх до числового типу за допомогою +. Вивести в консоль.

let num1 = +prompt("Enter number_1: ");
console.log(num1);
let num2 = +prompt("Enter number_2: ");
console.log(num2);
let num3 = +prompt("Enter number_3: ");
console.log(num3);

//З допомогою prompt() отримати 4 числа. Привести їх до числового типу за допомогою ParseInt. Скласти між собою записавши результат в змінну result. Вивести в консоль.

let num1 = parseInt(prompt("Enter number_1: "));
console.log(num1);
let num2 = parseInt(prompt("Enter number_2: "));
console.log(num2);
let num3 = parseInt(prompt("Enter number_3: "));
console.log(num3);
let num4 = parseInt(prompt("Enter number_4: "));
console.log(num4);


let result = {
    num1, num2, num3, num4
};
console.log(result);

//З допомогою prompt() отримати 3 числа з плаваючою крапкою. Привести їх до числового типу за допомогою parsefFloat. Скласти між собою записавши результат в змінну result. Вивести в консоль.

let num1 = parseFloat(prompt("Enter number_1: "));
console.log(num1);
let num2 = parseFloat(prompt("Enter number_2: "));
console.log(num2);
let num3 = parseFloat(prompt("Enter number_3: "));
console.log(num3);


let result = {
    num1, num2, num3
};
console.log(result);

//З допомогою prompt() отримати 3 числа з плаваючою крапкою. Зокруглити їх Math.round. Скласти між собою записавши результат в змінну result. Вивести в консоль.

let num1 = prompt("Enter number_1: ");
console.log(Math.round(num1));
let num2 = prompt("Enter number_2: ");
console.log(Math.round(num2));
let num3 = prompt("Enter number_3: ");
console.log(Math.round(num3));

let result = num1 + num2 + num3;

console.log(result);

//З допомогою prompt() отримати 2 цілі числа. Привести їх до цілочисельного типу. Перше число - число, яке буде зводити в степінь. Друге число - степінь. Використати Math.pow

let num1 = parseInt(prompt("Enter number_1: "));
let num2 = parseInt(prompt("Enter number_2: "));

console.log(Math.pow(num1, num2));

//З допомогою оператора type of визначити типи змінних

let a = typeof 100;
console.log(a);
let b = typeof '100';
console.log(b);
let c = typeof true;
console.log(c);
let d = typeof undefined;
console.log(d);

//Використати необхідний оператор. Кожний вираз вставити в свою змінну

let a = 5 < 6;
console.log(a);
let b = 5 >= 6;
console.log(b);
let c = 5 > 6;
console.log(c);
let d = 5 == 6;
console.log(d);
let e = 10 == 10;
console.log(e);
let f = 10 >= 10;
console.log(f);
let g = 10 < 10;
console.log(g);
let h = 10 > 10;
console.log(h);
let i = 10 != 10;
console.log(i)
let j = 123 === '123';
console.log(j);
let k = 123 == '123';
console.log(k);

//Додаткове

console.log(132 > 100 && 45 < 12 ); // => false
console.log(34 > 33 && 23 < 90 ); // => true
console.log(99 > 100 && 45 > 12 ); // => false
console.log(132 > 100 || 45 < 12 ); // => true
console.log(111 > 11 || 45 < 111 ); // => true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // => true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // => true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // => false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // => true
console.log(!!'-1'); // => true
console.log(!!-1); // => true
console.log(!!'0'); // => true
console.log(!!'null'); // => true
console.log(!!'undefined'); // => true
console.log(!!(3/'owu')); // => false
console.log((111 > 11 || 45 < 111) ||  !!'0'); // => true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // => false




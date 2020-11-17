//1
//
// let a = typeof 'Hello';
// console.log(a)
// let b = typeof 123;
// console.log(b)
// let isTrue = typeof true;
// console.log(isTrue)
// let c = typeof 'true';
// console.log(c);

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
//
// let a1 = 5 + 3; // => 8
// console.log(a1)
// let a2 = 5 - 3; // => 2
// console.log(a2);
// let a3 = 5 * 3; // => 15
// console.log(a3);
// let a4 = 5 / 3; // => 1.7
// console.log(a4);
// let a5 = 5 % 3; // => 2
// console.log(a5);

//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
//
// let a6 = 2;
// console.log(a6);
// let a7 = 3;
// console.log(a7);
// let a8 = 53;
// console.log(a8);
// let a9 = 2;
// console.log(a9)
// let a10 = '75кг';
// console.log(a10);


// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
//
// let height = 23;
// let width = 10;
// let s = height * width;
//
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.
//
// let heightC = 10;
// let dC = 4;
// let v =  dC * 10 * 3.14;
// console.log(v);

//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
// let n = 3;
// let m = 4;
// let g = Math.pow(3,2) + Math.pow(4, 2);
// console.log(g);


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//
// let string = 'Hello world';
// alert (string);
// console.log(string);
// document.write(string)

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
// let surname = 'Lobyk\n Maryana\n Petryvna';
// alert(surname);


// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// let str1 = 'Хто';
// let str2 = 'ти';
// let str3 = 'такий?';
//
// let concatenation = str1 + str2 + str3;
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
//


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//
// parseInt("3.14")
// parseInt("-7.875")
// parseInt("435")
// parseInt("Вася")

//
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
//



// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//
// let str1= prompt("Enter num1:");
// let str2 = prompt("Enter num2: ");
//
// let result = str1 + str2;
// alert(result);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//
// let name = prompt("Enter name");
// let surname = prompt("Enter surname");
// let age = prompt("Enter age");
//
// let result = "Доброго вечера " + name + surname + "," + " мои поздравления что вам " + age;
// alert(result);


// =====================
// ======ДОП============
// =====================
//
//
//
//

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//
// let num1 = prompt("Enter num1: ");
// let num2 = prompt("Enter num2: ");
// let num3 = prompt("Enter num3: ");
//
// if(num1 > num2 && num1 > num3) {
//     if(num2 > num3) {
//         console.log(num1, num2, num3);
//     }
// } else {
//     console.log(num3, num2, num2);
// }

// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let color  = prompt("Enter color: ");
// if (color === 'green') {
//     document.write("go!")
// }
// if (color === 'yellow') {
//     document.write("wait!")
// }
// if (color === 'red') {
//     document.write("stop!")
// } else {
//     console.log("Do what ypu want");
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//     Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
// //     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let color = prompt("Enter color: ");
// let isRoadClear = confirm("Road is clear?");
//
// if(color === "green" && isRoadClear ) {
//     document.write("You can go!");
// } else if(color === "green" && !isRoadClear) {
//     document.write("You should wait!");
// }else if(color === "yellow" && !isRoadClear) {
//     document.write("Wait, please");
// }else if (color === "yellow" && isRoadClear) {
//     document.write("Wait anyway");
// }else if (color === "red" && isRoadClear) {
//     document.write("Wait!!!!");
// }else if (color === "red" && !isRoadClear) {
//     document.write("Wait!!!!");
// }else {
//     document.write("Do what you want!");
// }


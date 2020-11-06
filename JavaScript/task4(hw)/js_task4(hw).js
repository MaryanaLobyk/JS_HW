// - створити функцію яка виводить масив
//
// let num = [9,23,45,67]
// function getArray(arr) {
//     console.log(arr)
// }
// getArray(num);

// -!!!!!!створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
// function getArr() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random()*100));
//     }
//     console.log(arr);
// }
// getArr()

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
//
// function myArray(one, two, three) {
//     let min;
//     if (one <= two && one <= three) {
//         min = one;
//     }
//     if (two <= one && two <= three) {
//         min = two;
//     }
//     if(three <= one && three <= two) {
//         min = three;
//     }
//     return min;
// }
// let minNum = myArray(56, 32,-3);
// console.log(minNum);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function myArray(one, two, three) {
//     let max;
//     if (one >= two && one >= three) {
//         max = one;
//     }
//     if (two >= one && two >= three) {
//         max = two;
//     }
//     if (three >= one && three >= two) {
//         max = three
//     }
//     return max;
// }
// let maxNum = myArray(67,456, -1234);
// console.log(maxNum);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
// function getNumbers() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element >= max) max = element;
//         if (element <= min) min = element;
//     }
//     console.log(max);
//     return min;
// }
// let min = getNumbers(4,67,32,45,12,1);
// console.log(min);

// - створити функцію яка виводить масив
//
// let num = [98, 54, 123, 56]
//
// function getArray(arr) {
//     console.log(arr);
// }
// getArray(num);

// - створити функцію яка повертає найбільше число з масиву
//
// function getMax(array) {
//     let max = array[0];
//     for (const element of array) {
//         if (element > max) max = element;
//     }
//     return max;
// }
// let max = getMax([456, -678, 23, 45]);
// console.log(max);

// - створити функцію яка повертає найменьше число з масиву
//
// function getMin(array) {
//     let min = array[0];
//     for (const element of array) {
//         if (element < min) min = element;
//     }
//     return min;
// }
// let min = getMin([45,23,67,123,321]);
// console.log(min);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//
// function elementSuma(array) {
//     let suma = 0;
//     for (const element of array) {
//         suma += element;
//     }
//     return suma;
// }
// let suma = elementSuma([1,2,3,4,5])
// console.log(suma);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function getAverage(array) {
//     let suma = 0;
//     for (const element of array) {
//         suma += element
//     }
//     return suma/array.length;
// }
// let result = getAverage([1,2,3,4,5]);
// console.log(result);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
// function amountValue(array) {
//     let amount = 0;
//     for (const argument of array) {
//         if (typeof argument === "object") {
//             amount++;
//         }
//     }
//     return amount;
// }
// let amount = amountValue([{name: 'Olena', age: 34}, {name: 'Nazar', age: 23}, {name:'Olga', age: 15}]);
// console.log(amount);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//
// function amountValue(array) {
//     let amount = 0;
//     for (const element of array) {
//         if(typeof element === "object"){
//             for (const key in element) {
//                 amount++;
//             }
//         }
//     }
//     return amount;
// }
// let amount = amountValue([{name: 'Olena', age: 34}, {name: 'Nazar', age: 23}, {name:'Olga', age: 15}]);
// console.log(amount);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
//
// function newArray(array1, array2) {
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i]+array2[i])
//     }
//     return result;
// }
// let result = newArray([1,2,3,4],[2,3,4,5] )
// console.log(result);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// function moveElement(array, index) {
//     let arr = array;
//     if (index < array.length-1){
//         let a = arr[index];
//         arr[index] = arr[index+1];
//         arr[index+1] = a;
//     }
//     return arr;
// }
// let arr = moveElement([4,5,6,7,8,9], 3);
// console.log(arr)

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
//
// function moveElement(array) {
//     let arr = [];
//     for (const i of array) {
//         if (i === 0) {
//             arr.push(0)
//         }else {
//             arr.unshift(i);
//         }
//     }
//     console.log(arr);
// }
// moveElement([1,0,6,0,3]);
// moveElement([0,1,2,3,4]);
// moveElement([0,0,1,0])

// Створити функцію яка :

// - Додає в боді блок з текстом "Hello owu"
//
// function addEl(text) {
//     let div = document.createElement('div');
//     div.innerText = text;
//     document.body.appendChild(div);
// }
// addEl('Hello owu');

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function addEl(type, text){
//     let tag_name = document.createElement(type);
//     tag_name.innerText = text;
//     document.body.appendChild(tag_name);
// }
// addEl( 'h1','hello ok10');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//
// let cars = [
//     {model: 'Mercedes', year: 2017, price: 94690 , color: 'white'},
//     {model: 'BWM', year: 2009, price: 5500, color: 'blue'},
//     {model: 'Shkoda Oktavia', year: 2012, price: 7000, color: 'black'},
//     {model: 'Mercedes', year: 2017, price: 94690 , color: 'white'},
//     {model: 'BWM X4', year: 2014, price: 30000, color: 'red'},
//     {model: 'AUDI', year: 2004, price: 8000, color: 'grey'},
//     {model: 'Chevrolet', year: 2020, price: 50000 , color: 'black'},
//     {model: 'Dacia', year: 2010, price: 12000, color: 'black'},
//     {model: 'Fiat', year: 2018, price: 25000, color: 'red'},
//     {model: 'Ford', year: 2016, price: 20000, color: 'blue'}
// ]
// function addCars(carArray, idEl) {
//     let div = document.getElementById(idEl);
//     let ul = document.createElement('ul');
//     for (let i = 0; i < carArray.length; i++) {
//         const car = carArray[i];
//         let li = document.createElement('li')
//         li.innerText = `${car.model}`
//         ul.appendChild(li);
//     }
//     div.appendChild(ul);
// }
// addCars(cars,'main_id');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//
// let cars = [
//     {model: 'Mercedes', year: 2017, price: 94690 , color: 'white'},
//     {model: 'BWM', year: 2009, price: 5500, color: 'blue'},
//     {model: 'Shkoda Oktavia', year: 2012, price: 7000, color: 'black'},
//     {model: 'Mercedes', year: 2017, price: 94690 , color: 'white'},
//     {model: 'BWM X4', year: 2014, price: 30000, color: 'red'},
//     {model: 'AUDI', year: 2004, price: 8000, color: 'grey'},
//     {model: 'Chevrolet', year: 2020, price: 50000 , color: 'black'},
//     {model: 'Dacia', year: 2010, price: 12000, color: 'black'},
//     {model: 'Fiat', year: 2018, price: 25000, color: 'red'},
//     {model: 'Ford', year: 2016, price: 20000, color: 'blue'}
// ]
//
// function addCars(carArray,idEl) {
//     let div = document.getElementById(idEl);
//     let ul = document.createElement('ul');
//     for (let i = 0; i < carArray.length; i++) {
//         const car = carArray[i];
//         let li = document.createElement('li')
//         li.innerText = `car - ${i}`
//         let block = document.createElement('div')
//         block.innerText = `${car.model} ${car.year} ${car.price} ${car.color}`
//         ul.appendChild(li);
//         ul.appendChild(block);
//     }
//     div.appendChild(ul);
// }
// addCars(cars, 'main_id');

// (на основі минулого ДЗ)

// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function twoArray(array_1, array_2) {
//     let usersWithCities = [];
//     for (const user of usersWithId) {
//         for (const city of citiesWithId) {
//             if (user.id === city.user_id) {
//                 user.address = city;
//             }
//         }
//     }
//     usersWithCities.push(usersWithId);
//     return usersWithCities;
// }
//
// let u = twoArray(usersWithId, citiesWithId);
// console.log(u);

// ***- беремо завдання з правилами з уроку №3 :

// // Та робимо це функцією.При цьому правила отримувати через аргумент.
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
//
//
// // <div id="wrap">
// //     <div class="rules rule1">
// //         <h2>Первое правило Бойцовского клуба.</h2>
// //         <p>Никому не рассказывать о Бойцовском клубе.</p>
// //     </div>
//
// function createArray(arr) {
//     let wrap = document.createElement('div');
//     wrap.setAttribute('id', 'wrap');
//     for (let i = 0; i < arr.length; i++) {
//         const rule = arr[i];
//         console.log(rule);
//         let div = document.createElement('div');
//         div.setAttribute('class', `rules rules${i + 1}`)
//         let h2 = document.createElement('h2');
//         h2.innerText = rule.title;
//         let p = document.createElement('p');
//         p.innerText = rule.body;
//
//         div.appendChild(h2);
//         div.appendChild(p);
//         wrap.appendChild(div);
//     }
//     document.body.appendChild(wrap);
// }
//
// createArray(rules);


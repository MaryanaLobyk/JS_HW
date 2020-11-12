// - создать массив с 20 числами.

// let numbers = [3,5,11,2,1,45,23,678,587,342,30,4,67,12,65,132,7,88,32,13];

// -- при помощи метода sort и колбека  отсортировать массив.
//
// let sort = numbers.sort();
// console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// let sort = numbers.sort((a,b) => {
//     return b-a;
// });
// console.log(sort);

// -- при помощи filter получить числа кратные 3
//
// let filter = numbers.filter((value) => {
//     return (value % 3 === 0);
// })
// console.log(filter)

// -- при помощи filter получить числа кратные 10
//
// let filter = numbers.filter((value) => {
//     return (value % 10 === 0);
// });
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
//
// numbers.forEach(value => {
//     console.log(value);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
// let map = numbers.map(value => {
//     return value*3;
// })
// console.log(numbers)
// console.log(map);

// - создать массив со словами на 15-20 элементов.

// let names = ['Yura', 'Oleg', 'Ira', 'Dima', 'Mariya', 'Olena', 'Olya', 'Karina', 'Maryana', 'Victor', 'Vitaliy', 'Serhiy', 'Yaryna', 'Sasha', 'Sof'];

// -- отсортировать его по алфавиту в восходящем порядке.
//
// let sort = names.sort();
// console.log(sort);

// -- отсортировать его по алфавиту  в нисходящем порядке.
//
// let sort = names.sort((a,b) => {
//     if (a > b) {
//         return -1;
//     }
//     return 1
// });
// console.log(sort);

// -- отфильтровать слова длиной менее 4х символов
//
// let filter = names.filter(value => {
//     if (value.length < 4){
//         console.log(value);
//     }
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
// let map = names.map(value => {
//     return value + '!';
// })
// console.log(map);

// Все робити через функції масивів (foreach, map ...тд)

// Дан масив :
//let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
//
// let sort1 = users.sort((a,b) => {
//     return b.age - a.age;
// })
// console.log(sort1);
//
//
// let sort2 = users.sort((a,b) => {
//     return a.age - b.age;
// })
// console.log(sort2);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// let sort = users.sort((a,b) => {
//     return b.name.length - a.name.length;
// })
// console.log(sort);
//
// let sort = users.sort((a,b)=>{
//     return a.name.length - b.name.length
// })
// console.log(sort);

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//
// let copy = JSON.parse(JSON.stringify(users));
//
// let map = copy.map(value => {
//     value.id = Math.round(Math.random()*100);
//     return value;
// })
// console.log(map);
// console.log(users);

// - відсортувати його за індентифікатором
//
// let sortedMap = map.sort((a, b) => {
//     return b.id - a.id;
// })
// console.log(sortedMap);

//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком
//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів
//
// let filter1 = cars.filter(value => {
//     return value.volume > 3;
// })
// console.log(filter1);

// - двигун = 2л
//
// let filter2 = cars.filter(value => {
//         return value.volume === 2;
// })
// console.log(filter2);

// - виробник мерс
//
// let filter3 = cars.filter(value => {
//     return value.producer === 'mercedes';
// })
// console.log(filter3);

// - двигун більше 3х літрів + виробник мерседес
//
// let filter4 = cars.filter(value => {
//     return value.volume >= 3 && value.producer === 'mercedes';
// })
// console.log(filter4);

// - двигун більше 3х літрів + виробник субару
//
// let filter5 = cars.filter(value => {
//     return value.volume >= 3 && value.producer === 'subaru';
// })
// console.log(filter5);

// - сили більше ніж 300
//
// let filter6 = cars.filter(value => {
//     return value.power > 300;
// })
// console.log(filter6);

// - сили більше ніж 300 + виробник субару
//
// let filter7 = cars.filter(value => {
//     return value.power > 300 && value.producer === 'subaru';
// })
// console.log(filter7);

// - мотор серіі ej
//
// let filter8 = cars.filter(value => {
//     return value.engine.includes('ej');
// })
// console.log(filter8);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
//
// let filter9 = cars.filter(value => {
//     if (value.power > 300 && value.producer === 'subaru' && value.engine.includes('ej')) {
//         return value;
//     }
// })
// console.log(filter9);

// - двигун меньше 3х літрів + виробник мерседес
//
// let filter10 = cars.filter(value => {
//     if (value.volume < 3 && value.producer === 'mercedes'){
//         return value;
//     }
// })
// console.log(filter10);

// - двигун більше 2л + сили більше 250
//
// let filter = cars.filter(value => {
//     if (value.volume > 2 && value.power > 250) {
//     return value;
//     }
// })
// console.log(filter);

// - сили більше 250  + виробник бмв
//
// let filter = cars.filter(value => {
//     if (value.power > 250 && value.producer === 'bmw'){
//         return value;
//     }
// })
// console.log(filter);

//
//
// - взять слдующий массив
//let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей
//
// let sort1 = usersWithAddress.sort((a,b) => {
//     if(a.id > b.id){
//         return 1
//     }
//     return -1;
// })
// console.log(sort1);


// -- отсортировать его по id пользователей в обратном опрядке
//
// let sort2 = usersWithAddress.sort((a,b) => {
//     if(a.id > b.id){
//         return -1
//     }
//     return 1;
// })
// console.log(sort2);

// -- отсортировать его по возрасту пользователей
//
// let sort = usersWithAddress.sort((a,b) => {
//     if (a.age > b.age){
//         return 1;
//     }
//     return -1;
// })
// console.log(sort);

// -- отсортировать его по возрасту пользователей в обратном порядке
//
// let sort = usersWithAddress.sort((a, b) => {
//     if(a.age > b.age){
//         return -1;
//     }
//     return 1;
// })
// console.log(sort);

// -- отсортировать его по имени пользователей
//
// let sort = usersWithAddress.sort((a,b) => {
//     if(a.name > b.name){
//         return 1;
//     }
//     return -1;
// })
// console.log(sort);

// -- отсортировать его по имени пользователей в обратном порядке
//
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name){
//         return -1;
//     }
//     return 1;
// })
// console.log(sort);

// -- отсортировать его по названию улицы  в алфавитном порядке
//
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street){
//         return 1;
//     }
//     return -1;
// });
// console.log(sort);

// -- отсортировать его по номеру дома по возрастанию
//
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.address.number > b.address.number){
//         return 1;
//     }
//     return -1;
// })
// console.log(sort);

// -- отфильтровать (оставить) тех кто младше 30
//
// let sort = usersWithAddress.filter((value) => {
//     if (value.age >= 30){
//         return;
//     }
//     return value;
// })
// console.log(sort);

// -- отфильтровать (оставить) тех у кого отрицательный статус
//
// let sort = usersWithAddress.filter(value => {
//     if (value.status){
//         return;
//     }
//     return value;
// })
// console.log(sort);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//
// let filter = usersWithAddress.filter(value => {
//     if (!value.status && value.age < 30){
//         return value;
//     }
//     return;
// })
// console.log(filter);

// -- отфильтровать (оставить) тех у кого номер дома четный
//
// let filter = usersWithAddress.filter(value => {
//     if (value.address.number % 2 === 0){
//         return value;
//     }
//     return;
// })
// console.log(filter);


// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
//
// let arr = [1,6,9,0,17,88,4,7];
// let reducer = arr.reduce((acc, val) => {
//     if (acc > val){
//         return acc;
//     }
//     return val;
// },0)
// console.log(reducer);
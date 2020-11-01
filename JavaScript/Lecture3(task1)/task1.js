// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let dog = {
    name: "Jony",
    age: 5,
    color: "black",
    hasOwnBed: true,
    color_lead: "red"
}

let person = {
    name: "Oleg",
    age: 15,
    heigh: 1.80,
    weight: "70kg",
    hasGirl: false
}

let car = {
    brand: "mercedes",
    color: "white",
    price: 30.000,
    year: 2,
    state: "new"
}

let flat = {
    typeBuild: "new",
    num_of_room: 3,
    price: "5000/month",
    state: "good",
    location: "not far from center"
}

let book = {
    book_title: "It",
    author: "Stiven King",
    price: 200,
    num_of_page: 1000,
    reviews: "good"
}


// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let dog = [name = "jony", name = "oskar", name = "july", name = "tom", name = "candy"];
console.log(dog);
let person = [name = "Oleg", name = "Mariya", name = "Olena", name = "Sergey", name = "Nazar"];
console.log(person);
let car = [name = "BMW", name = "Marcedes", name = "Audi", name = "Shkoda", name = "Toyota"];
console.log(car);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let house = {
    size: 'big',
    color: 'white',
    location: 'not far from center',
    floor: {number: 2, design: 'modern', num_room: 5},
    rooms: [name = 'bedroom', name = 'kitchen', name = 'bathroom']
}
console.log(house);

let driver = {
    name: 'vasya',
    age: 34,
    hasJob: true,
    jobs : {number: 5, experience: '2 years', reviews: 'high'},
    pets : [dog = 'july', cat = "Panda" ]
}
console.log(driver);

let toy = {
    name: 'Teddy',
    age: 15,
    state: 'old',
    owner: [name = 'Oleg', name = 'Vasya', name = 'Olena'],
    design: {color: 'pink', hasHoodie: true, shoes: 'sneakers'}
}
console.log(toy);

let table = {
    size: {width: '25м', height: '25м'},
    shape: 'square',
    color: 'brown',
    material: [plastic = "50%", tree = '50%'],
    price: 10000
}
console.log(table);

let bag = {
    color: [pocket = 'red', strap = "black"],
    size : {width: 10, height: 20},
    price: 300,
    hasDesign: true,
    brand: 'ZARA'
}
console.log(bag);


// Дано массив:

    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

console.log(users[7].status);

// - статус Максима

console.log(users[4].status);
console.log(users[10].status);

// - ім'я передостаннього об'єкту

console.log(users[9].name);

// - ім'я третього об'єкта

console.log(users[2].name);

// - вік Олега

console.log(users[6].age);

// - вік Олі

console.log(users[9].age);

// - вік + ім'я 5го об'єкта

console.log(users[4].age + users[4].name);

// - вік + сатус Анни

console.log(users[5].age + users[5].status);

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//
// - отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content);

// - отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules);

// - замініть текст параграфа з id 'content' на будь-який інший

let content = document.getElementById('content');

content.innerText = 'QWERTY QWERTY QWERTY QWERTY QWERTY';
console.log(content);

// - замініть текст параграфа з id 'rules' на будь-який інший

let rules = document.getElementById("rules");
rules.innerText = 'lorem lorem lorem lorem lorem';
console.log(rules);

// - змініть кожному елементу колір фону на червоний

let content = document.getElementById("content");
let rules = document.getElementById("rules");
let rule1 = document.getElementsByClassName("fc_rules");

content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

for (const ruleEl of rule1) {
    ruleEl.style.backgroundColor = 'red';
}

// - змініть кожному елементу колір тексту на синій

let content = document.getElementById("content");
let rules = document.getElementById("rules");
let rule1 = document.getElementsByClassName("fc_rules");

content.style.backgroundColor = 'blue';
rules.style.backgroundColor = 'blue';

for (const ruleEl of rule1) {
    ruleEl.style.backgroundColor = 'blue';
}

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

let rules = document.getElementById("rules");
console.log(rules.classList);

// - отримати всі елементи з класом fc_rules

let rules = document.getElementsByClassName('fc_rules');
for (const ruleEl of rules) {
    console.log(ruleEl.classList);
}

// - поміняти колір тексту у всіх елементів fc_rules на червоний

let rules = document.getElementsByClassName('fc_rules');
for (const ruleEl of rules) {
    ruleEl.style.backgroundColor = 'red';
}

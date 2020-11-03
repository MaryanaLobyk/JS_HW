// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let person1 = {
    name: 'Vasya',
    age: 34,
    location: 'Lviv',
    hasCar: true
}

let person2 = {
    name: 'Olena',
    age: 15,
    location: 'Truskavets',
    isProgrammer: false
}

let person3 = {
    name: 'Igor',
    age: 20,
    job: undefined
}

let person4 = {
    name: 'Olya',
    age: 29,
    hasBoyfriend: true,
    location: 'Lviv'
}

let person5 = {
    name: 'Nazar',
    age: 12,
    color_hair: 'blond',
    salary: NaN
}

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let c_1 = {
    brand: 'BMW',
    price: [dollar = 45000, euro = 38600],
    color: 'black',
    size: { length: '4709мм', width: '1827мм', height: '2851мм' }
}

let c_2 = {
    brand: 'Toyota',
    price: [dollar = 12000, euro = 10300],
    color: 'red',
    state: 'new',
    size: { length: '3500мм', width: '1500мм', height: '2500мм' }
}

let p_1 = {
    name: 'Oleg',
    age: 34,
    wife: { name: 'Olena', age: 30},
    hasJob: true,
    skills: ['python', 'js']
}

let p_2 = {
    name: 'Igor',
    age: 45,
    wife: { name: 'Olga', age: 23},
    hasJob: false,
    skills: ['punctual', 'hard-working']
}

let dog = {
    name: 'Oskar',
    age: 1,
    owner: {name: 'Olena', age : 32, hasHusband: true},
    skills: ['stop', 'sit', 'come', 'place', 'stand']
}

//- При помощи for in вывести все ключи всех объектов из задания 1 и 2

for (key in person1) {
    console.log('key -',key);
}
console.log('__________');

for (key in person2) {
    console.log('key -',key);
}
console.log('__________');

for (key in person3) {
    console.log('key -',key);
}
console.log('__________');

for (key in person4) {
    console.log('key -',key);
}
console.log('__________');

for (key in person5) {
    console.log('key -',key);
}
console.log('__________');

for (key in c_1) {
    console.log('key -',key);
}
console.log('__________');
for (key in c_2) {
    console.log('key -', key);
}
console.log('__________');
for (key in p_1) {
    console.log('key -', key);
}
console.log('__________');
for (key in p_2) {
    console.log('key -', key);
}
console.log('__________');
for (key in dog) {
    console.log('key -', key);
}

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

console.log(Object.keys(person1));
console.log(Object.keys(person2));
console.log(Object.keys(person3));
console.log(Object.keys(person4));
console.log(Object.keys(person5));
console.log(Object.keys(c_1));
console.log(Object.keys(c_2));
console.log(Object.keys(p_1));
console.log(Object.keys(p_2));
console.log(Object.keys(dog));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let cars = [
    {model: 'Mercedes', year: 2017, price: 94690 , color: 'white'},
    {model: 'BWM', year: 2009, price: 5500, color: 'blue'},
    {model: 'Shkoda Oktavia', year: 2012, price: 7000, color: 'black'},
    {model: 'Mercedes', year: 2017, price: 94690 , color: 'white'},
    {model: 'BWM X4', year: 2014, price: 30000, color: 'red'},
    {model: 'AUDI', year: 2004, price: 8000, color: 'grey'},
    {model: 'Chevrolet', year: 2020, price: 50000 , color: 'black'},
    {model: 'Dacia', year: 2010, price: 12000, color: 'black'},
    {model: 'Fiat', year: 2018, price: 25000, color: 'red'},
    {model: 'Ford', year: 2016, price: 20000, color: 'blue'}
]

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
    {name: 'Lviv', population: 724314, country: 'Ukraine', region: 'Lviv region' },
    {name: 'Tokyo', population: 37393000, country: 'Japan', region: 'Kanto'},
    {name: 'Paphos', population: 35961, country: 'Cyprus', region: 'Paphos region'},
    {name: 'Ternopil', population: 216384, country: 'Ukraine', region: 'Ternopil region'},
    {name: 'Amsterdam', population: 821752, country: 'Netherlands', region: 'Amsterdam region'}
]

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars1 = [
     {model: 'Dodge', year: 2017, price: 70000 , color: 'white', driver: { name: 'Jhon', age: 54, gender: 'man', experience: '14year'}},
     {model: 'Honda', year: 2013, price: 27000, color: 'grey', driver: { name: 'Ira', age: 30, gender: 'woman', experience: '2year'}},
     {model: 'Infinity', year: 2014, price: 15000, color: 'blue', driver: { name: 'Oleg', age: 40, gender: 'man', experience: '20year'}},
     {model: 'Hyundai', year: 2020, price: 45000 , color: 'red', driver: { name: 'Nazar', age: 18, gender: 'man', experience: '2month'}},
     {model: 'Jaguar', year: 2015, price: 55000, color: 'black', driver: { name: 'Mariya', age: 24, gender: 'woman', experience: '4year'}}
]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

let a = 0;
while(a < cars.length) {
    console.log(cars[a]);
    a++;
}

let b = 0;
while(b < cities.length) {
    console.log(cities[b]);
    b++;
}

let c = 0;
while(c < cars1.length) {
    console.log(cars1[c]);
    c++;
}

//- проитерировать каждый массив из задания 5,6,7 при помощи for .

for(a = 0; a < cars.length; a++) {
    console.log(cars[a]);
}

for(b = 0; b < cities.length; b++) {
    console.log(cities[b]);
}

for(c = 0; c < cars1.length; c++) {
    console.log(cars1[c]);
}

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for (const car of cars) {
    console.log(cars);
}
for (const city of cities) {
    console.log(cities);
}
for (const car1 of cars1) {
    console.log(cars1);
}

//- взять объекты из задания 1 и превратить каждый в json.

let clone1 = JSON.stringify(person1);
console.log(clone1);

let clone2 = JSON.stringify(person2);
console.log(clone2);

let clone3 = JSON.stringify(person3);
console.log(clone3);

let clone4 = JSON.stringify(person4);
console.log(clone4);

let clone5 = JSON.stringify(person5);
console.log(clone5);

//- взять json из задания 11 и превратить их обратно в объекты.

let c1 = JSON.parse(clone1);
console.log(c1);
let c2 = JSON.parse(clone2);
console.log(c2);
let c3 = JSON.parse(clone3);
console.log(c3);
let c4 = JSON.parse(clone4);
console.log(c4);
let c5 = JSON.parse(clone5);
console.log(c5);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

for (i = 0; i < cars.length; i++) {
    const car = cars[i]
    console.log(JSON.stringify(car));
}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    console.log(JSON.stringify(city));
}

//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

let arr = [];
for (let i = 0; i < cars1.length; i++) {
    const cars1Element = cars1[i];
    arr.push(JSON.stringify(cars1Element))
}
console.log(arr);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let users = [
    {name: 'Igor', age: 32, hasWife: true, skills: ['python', 'js', 'java']},
    {name: 'Oleg', age: 23, hasWife: false, skills: ['c#', 'c++', 'c']},
    {name: 'Olena', age: 18, boyfriend: undefined, skills: ['python']},
    {name: 'Olya', age: 43, hasHusband: true, skills: ['python', 'js', 'java','c#', 'c++', 'c']},
    {name: 'Mariya', age: 20, salary: NaN, skills: ['js', 'java']}
];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user)
    console.log(users[i].skills);
}

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

let users = [
    {name: 'Igor', age: 32, hasWife: true, skills: ['python', 'js', 'java']},
    {name: 'Oleg', age: 23, hasWife: false, skills: ['c#', 'c++', 'c']},
    {name: 'Olena', age: 18, boyfriend: undefined, skills: ['python']},
    {name: 'Olya', age: 43, hasHusband: true, skills: ['python', 'js', 'java','c#', 'c++', 'c']},
    {name: 'Mariya', age: 20, salary: NaN, skills: ['js', 'java']}
];


let cloneUsers = [];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user);
    console.log(user.skills);
    for (const skill of user.skills) {
        cloneUsers.push(skill);
    }
}
console.log(cloneUsers);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
    ];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user)
    for (const skill of user.skills) {
        console.log(skill);
    }
}


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let arr = [];
for (const user of users) {
    arr.push(user.address)
}
console.log(arr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user);
    let htmlDivElement = document.createElement('div');
    htmlDivElement.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
    document.body.appendChild(htmlDivElement);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user);

    const address = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;

    let div_name = document.createElement('h2');
    let div_age = document.createElement('p');
    let div_status = document.createElement('h3');
    let div_address = document.createElement('p')

    div_name.innerText = `${user.name}`;
    div_age.innerText = `${user.age}`;
    div_status.innerText = `${user.status}`;
    div_address.innerText = `${address}`

    document.body.appendChild(div_name);
    document.body.appendChild(div_age);
    document.body.appendChild(div_status);
    document.body.appendChild(div_address);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user);

    const address = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;

    let div_name = document.createElement('h2');
    let div_age = document.createElement('p');
    let div_status = document.createElement('h3');
    let div_address = document.createElement('div')

    div_name.innerText = `${user.name}`;
    div_age.innerText = `${user.age}`;
    div_status.innerText = `${user.status}`;
    div_address.innerText = `${address}`

    document.body.appendChild(div_name);
    document.body.appendChild(div_age);
    document.body.appendChild(div_status);
    document.body.appendChild(div_address);

}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:

// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

let usersWithCities = [];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city;
            usersWithCities.push(usersWithId);
        }
    }
}
console.log(usersWithCities);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

let elementID = document.getElementById('main_id');
console.log(elementID.innerText);

let elementClass = document.getElementsByClassName('main_class')

for (const elementClass1 of elementClass) {
    console.log(elementClass1);
}

let tagEl = document.getElementsByTagName('h2')

for (const el_tag of elementClass) {
    console.log(el_tag);
}

// - змінити цей текст використовуючи селектори id, class,  tag

let el_id = document.getElementById('main_id');
el_id.innerText = 'Hello world!';

let el_class = document.getElementsByClassName('main_class');
for (const element1 of el_class) {
    element1.innerText = 'Hello ok10!';
}

let el_tag = document.getElementsByTagName('h2')
for (const element2 of el_tag) {
    element2.innerText = 'QWERTY';
}

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

let el_id = document.getElementById('main_id');
el_id.style.width = '400px';
el_id.style.height = '300px';

let el_class = document.getElementsByClassName('main_class');
for (const element1 of el_class) {
    element1.style.width = '500px';
    element1.style.height = '700px';
}

let el_tag = document.getElementsByTagName('h2')
for (const element2 of el_tag) {
    element2.style.width = '300px';
    element2.style.height = '250px';
}

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

let table = document.createElement('table');
let tr = document.createElement('tr');
let td_1 = document.createElement('td');
let td_2 = document.createElement('td');
let td_3 = document.createElement('td');

tr.appendChild(td_1);
tr.appendChild(td_2);
tr.appendChild(td_3);

table.appendChild(tr);

document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr')
    let td_1 = document.createElement('td');
    let td_2 = document.createElement('td');
    let td_3 = document.createElement('td');
    tr.appendChild(td_1);
    tr.appendChild(td_2);
    tr.appendChild(td_3);
    table.appendChild(tr);
}

document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

let n_el = prompt('Enter n:');
let m_el = prompt('Enter m:');

let table = document.createElement('table')
for (let i = 0; i < n_el; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < m_el; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class

let element = document.getElementsByTagName('*');
for (const el of element) {
    if (el.getAttribute('class')){
        console.log(el);
    }
}

//- знайти всі параграфи ,та змінити текст на hello oktenweb!

let par = document.getElementsByTagName('p')
for (const el of par) {
    el.innerText = 'hello oktenweb';
}

// - знайти всі div та змінити ім колір на червоний

let div_el = document.getElementsByTagName('div')
for (const el of div_el) {
    el.style.backgroundColor = 'red';
}

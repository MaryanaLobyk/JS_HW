// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// function remove() {
//
// let element = document.createElement('div');
// let removeBtm = document.createElement('button')
// element.setAttribute('id', 'text');
//
// element.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda, consequatur corporis dolores doloribus ducimus eaque eius ipsam iste labore laboriosam minus nulla odit optio quia, quod repudiandae tempore voluptatum?';
// element.style.border = '4px solid black';
// element.style.margin = '30px'
//
// removeBtm.innerText = 'Remove';
//
// removeBtm.onclick = (ev) => {
//      ev.target.parentElement.style.display = 'none';
// }
//
// document.body.appendChild(element);
// element.appendChild(removeBtm);
//
// }
// remove();

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let div = document.createElement('div')
// let bttn = document.createElement('button');
// bttn.innerText = 'Click';
// bttn.onclick = (ev) => {
//
//     ev.target.parentElement.hidden = true;
// }
//
// div.appendChild(bttn);
// document.body.appendChild(div);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let form = document.createElement('form');
// let input = document.createElement('input');
// input.setAttribute('value', '');
// let bttn = document.createElement('button');
// bttn.innerText = 'OK';
//
// bttn.onclick = (ev) => {
//     let value = input.value;
//     if (value < 18){
//         alert("STOP");
//         return;
//     }
//     alert("It's good!!!");
// }
// form.appendChild(input);
// form.appendChild(bttn);
// document.body.appendChild(form);

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu = document.getElementById('menu');
// let list = document.getElementById('list');
//
// menu.onclick = () => {
//     if (list.style.display === 'none'){
//         list.style.display = 'block';
//         return;
//     }
//     list.style.display = 'none';
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let array = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
//
// let content = document.getElementById('container');
//
// array.forEach(element => {
//   let div = document.createElement('div');
//   let h1 = document.createElement('h1');
//   let h3 = document.createElement('h3');
//   let bttn = document.createElement('button');
//
//   h1.innerText = element.title;
//   h3.innerText = element.body;
//   bttn.innerText = `Hide`;
//   bttn.onclick = (ev) => {
//       if (h3.style.display === 'block'){
//           h3.style.display = 'none';
//           return;
//       }
//       h3.style.display = 'block';
//     }
//
//
//   div.appendChild(h1);
//   div.appendChild(h3);
//   div.appendChild(bttn)
//   document.body.appendChild(div);
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let form1 = document.createElement('form');
// form1.setAttribute('id','myForm1')
// let input1_1 = document.createElement('input');
// input1_1.setAttribute('id','input1');
// let input1_2 = document.createElement('input');
// input1_2.setAttribute('id','input2');
// let form2 = document.createElement('form');
// form2.setAttribute('id','myForm2')
// let input2_1 = document.createElement('input');
// input2_1.setAttribute('id','input2_1');
// let input2_2 = document.createElement('input');
// input2_2.setAttribute('id','input2_2');
//
// let div = document.createElement('div');
// let bttn = document.createElement('button');
// bttn.innerText = 'CLICK';
//
// form1.appendChild(input1_1);
// form1.appendChild(input1_2);
// document.body.appendChild(form1);
// form2.appendChild(input2_1);
// form2.appendChild(input2_2);
// document.body.appendChild(form2);
//
// div.appendChild(bttn);
// document.body.appendChild(div);
//
// bttn.onclick = () => {
//     console.log(input1_1.value);
//     console.log(input1_2.value);
//     console.log(input2_1.value);
//     console.log(input2_2.value);
// }


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// let cont = document.getElementById('container');
//
// function genTable(row, column, elem) {
//     let table = document.createElement('table');
//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement('tr');
//
//
//         for (let j = 0; j < column; j++) {
//             let td = document.createElement('td');
//             td.innerText = elem;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//
//     }
//     document.body.appendChild(table);
//
// }
//
// genTable(4,6,Math.round(Math.random()*30));


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     (Додатковачастина для завдання)
//
// let cont = document.getElementById('container');
//
// let form = document.createElement('form');
// let input1 = document.createElement('input');
// input1.setAttribute('id', 'row')
// let input2 = document.createElement('input');
// input2.setAttribute('id', 'column')
// let input3 = document.createElement('input');
// input3.setAttribute('id', 'val')
//
// let bttn = document.createElement('button');
// bttn.innerText = 'CLICK';
//
// bttn.onclick = (ev) => {
//     let table = document.createElement('table');
//     for (let i = 0; i < input1.value; i++) {
//         let tr  = document.createElement('tr');
//         for (let j = 0; j < input2.value; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = input3.value;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     cont.appendChild(table)
// }
//
// form.appendChild(input1);
// form.appendChild(input2);
// form.appendChild(input3);
// cont.appendChild(bttn);
// document.body.appendChild(form);


//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let imgArr = [
//     {id: 1,
//         img_url: 'img/apple.jpeg'},
//     {id: 2,
//         img_url: 'img/banana.jpg'},
//     {id: 3,
//         img_url: 'img/kivi.png'},
//     {id: 4,
//         img_url: 'img/pear.jpg'},
//     {id: 5,
//         img_url: 'img/Strawberry.jpg'}
// ]
//
// let cont = document.getElementById('container');
// let img = document.createElement('img');
// img.src = imgArr[0].img_url;
// cont.appendChild(img);
// img.style.width = '40%';
// img.style.height = '400px';
// cont.style.display = 'flex';
// cont.style.justifyContent = 'center';
//
// let bttnDiv = document.createElement('div');
// bttnDiv.style.display = 'flex';
// bttnDiv.style.justifyContent = 'center';
// document.body.appendChild(bttnDiv);
//
// let backBttn = document.createElement('button');
// backBttn.innerText = 'Back';
// bttnDiv.appendChild(backBttn);
//
// let nextBttn = document.createElement('button');
// nextBttn.innerText = 'Next';
// bttnDiv.appendChild(nextBttn);
//
// let index = 0;
//
// backBttn.onclick = () => {
//
//     if (index - 1 < 0) {
//         index = imgArr.length - 1;
//         return;
//     }
//     index = index - 1;
//     img.src = imgArr[index].img_url;
// }
//
// nextBttn.onclick = () => {
//
//     if (index + 1 > imgArr.length - 1) {
//         index = 0;
//         return;
//     }
//     index = index + 1;
//     img.src = imgArr[index].img_url;
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//     кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let array = ['apple', 'orange', 'carrot', 'banana', 'avocado'];
//
// let input = document.createElement('input');
// input.setAttribute('type','text');
// document.body.appendChild(input);
//
// let bttn = document.createElement('button');
// document.body.appendChild(bttn);
// bttn.innerText = 'Ok';
//
// bttn.onclick = () => {
//     for (let i = 0; i < array.length; i++) {
//         array.forEach(element => {
//             if (input.value === array[i]) {
//                 alert("OOOOPS");
//                 return;
//             }
//             alert('OK');
//         })
//     }
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let array = ['apple', 'orange', 'carrot', 'banana', 'avocado'];
// let input = document.createElement('input');
// input.setAttribute('type','text');
// document.body.appendChild(input);
//
// let div = document.createElement('div');
// let bttn = document.createElement('button');
// div.appendChild(bttn);
// document.body.appendChild(div);
// bttn.innerText = 'Ok';
//
// bttn.onclick = () => {
//     for (let i = 0; i < array.length; i++){
//         if (input.value.includes(array[i])){
//             alert('OOOOPS');
//             return;
//         }
//         alert('OK');
//     }
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// let h2El = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let wrap = document.getElementById('wrap');
// let ul = document.createElement('ul');
//
// for (let i = 0; i < h2El.length; i++) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let menu = 'menuEl' + i;
//     h2El[i].setAttribute('id', menu)
//     a.href = '#' + menu;
//     a.innerHTML = h2El[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
//
// content.style.float = 'right';
// content.style.width = '50%';
// wrap.style.float = 'left';
// wrap.style.width = '50%';

//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
//
//
// let form = document.createElement('form');
// let input1 = document.createElement('input');
// input1.setAttribute('type', 'checkbox');
// let input2 = document.createElement('input');
// input2.setAttribute('type', 'checkbox')
// let input3 = document.createElement('input');
// input3.setAttribute('type', 'checkbox')
//
// form.appendChild(input1);
// form.appendChild(input2);
// form.appendChild(input3);
// document.body.appendChild(form);
//
// function ArrayUsers(array) {
//     const arrElements = document.createElement('div')
//     array.forEach(item => {
//         let divUser = document.createElement('div');
//         divUser.innerHTML = JSON.stringify(item);
//         arrElements.appendChild(divUser);
//     })
//     return arrElements;
// }
// ArrayUsers(usersWithAddress);
//
// let content = document.getElementById('container');
// let div = document.createElement('div')
// div.appendChild(ArrayUsers(usersWithAddress))
// content.appendChild(div);
//
// let bttnDiv = document.createElement('div');
// let bttn = document.createElement('button');
// bttn.innerText = 'Click';
// bttnDiv.appendChild(bttn);
// document.body.appendChild(bttnDiv);
//
//
// bttn.onclick = (ev) => {
//     let arrCopy = JSON.parse(JSON.stringify(usersWithAddress))
//     if (input1.checked) {
//         arrCopy = arrCopy.filter(value => {
//         return !value.status
//         })
//     }
//     if (input2.checked) {
//         arrCopy = arrCopy.filter(value => {
//             return value.age >= 29;
//         })
//     }
//     if (input3.checked) {
//         arrCopy = arrCopy.filter(value => {
//             return value.address.city === 'Kyiv';
//         })
//     }
//     div.innerText = '';
//     div.appendChild(ArrayUsers(arrCopy));
// }
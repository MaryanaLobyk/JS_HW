// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
//
// let main_header = document.getElementById('main_header');
// main_header.style.backgroundColor = 'red';

// -- робить шириниу елементу ul 400 пікселів
//
// let list = document.getElementsByTagName('ul');
// for (const el of list) {
//     el.style.width = '400px';
// }

//-- робить ширину всіх елементів з класом linkList шириною 50%
//
// let element = document.getElementsByClassName('linkList');
// for (const el of element) {
//     el.style.width = '50%';
// }

// -- отримує текст який зберігається в елементі з класом listElement2
//
// let element = document.getElementsByClassName('listElement2')
// for (const el of element) {
//     console.log(el);
// }

// -- отримує всі елементи li та змінює ім колір фону на сірий
//
// let element = document.getElementsByTagName('li');
// for (const el of element) {
//     el.style.backgroundColor = 'grey';
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let element = document.getElementsByTagName('a');
// for (const el of element) {
//     if(el.innerText === 'link3') {
//         el.style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let element = document.getElementsByClassName('sub-header')
// let color = prompt('Enter color:')
// for (const el of element) {
//     el.style.backgroundColor = color;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let element = document.getElementsByClassName('sub-header');
// let color = prompt('Enter color: ');
// for (const el of element) {
//     if (el.innerText === 'content 2 segment') {
//         el.style.backgroundColor = color;
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let element = document.getElementsByClassName('content_1');
// let text = prompt("Enter text: ");
// for (const el of element) {
//     el.innerText = text;
// }

// -- отримати елементи p та змінити їм padding на довільне значення
//
// let element = document.getElementsByTagName('p')
// for (const el of element) {
//     el.style.padding = '40px';
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
//
// let element = document.getElementsByClassName('text2');
// for (const el of element) {
//     el.innerText = 'hello ok10';
// }
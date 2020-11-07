//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// function Tag(titleOfTag, action, attrs,) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let a = new Tag('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',[{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'}, {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'}, {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти'}]);
// console.log(a);
//
// let div = new Tag('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.', [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'}, {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(div);
//
// let h1 = new Tag('<h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',[{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]);
// console.log(h1);
//
// let span = new Tag('<span>', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', [    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'}, {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}, {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}]);
// console.log(span);
//
// let input = new Tag('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.',[    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'}, {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}, {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'}]);
// console.log(input);
//
// let form = new Tag('<form>',  'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.', [    {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'}, {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'}, {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы.'}]);
// console.log(form);
//
// let option = new Tag('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', [    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},{titleOfAttr: 'lable', actionOfAttr: 'Указание метки пункта списка.'}, {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
// ]);
// console.log(option);
//
// let select = new Tag('<seelct>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'}, {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'}, {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'}]);
// console.log(select);

//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// class Tag {
//     constructor(titleOfTag,action,attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//
// let a = new Tag('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',[{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'}, {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'}, {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти'}]);
// console.log(a);
//
// let div = new Tag('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей.', [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'}, {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(div);
//
// let h1 = new Tag('<h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',[{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]);
// console.log(h1);
//
// let span = new Tag('<span>', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'}, {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}, {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'}]);
// console.log(span);
//
// let input = new Tag('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.',[{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'}, {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}, {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'}]);
// console.log(input);
//
// let form = new Tag('<form>',  'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.', [{titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'}, {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'}, {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы.'}]);
// console.log(form);
//
// let option = new Tag('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},{titleOfAttr: 'lable', actionOfAttr: 'Указание метки пункта списка.'}, {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}]);
// console.log(option);
//
// let select = new Tag('<seelct>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'}, {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'}, {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'}]);
// console.log(select);

//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляет його в поточний об'єкт car
// // ==============================================
//
// let car = {
//     model: 'BMW X6',
//     brand: 'BMW',
//     year: 2020,
//     speed: 300,
//     volume: '3.0л',
//
//     drive: function() {
//         console.log(`Їдемо зи швидкістю ${this.speed} на годину`)
//     },
//     info: function() {
//         console.log(`${this.model} - ${this.brand} - ${this.year} - ${this.speed} - ${this.volume}`)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.speed = newSpeed;
//         console.log(`${this.speed}`);
//     },
//     changeYear: function (newValue) {
//         this.year = newValue;
//         console.log(`${this.year}`);
//     },
//     addDriver: function (driver) {
//         car['driver'] = driver;
//     }
// }
// car.drive();
// car.info();
// car.increaseMaxSpeed(700);
// car.changeYear(2030);
// car.addDriver({name: 'Oleg', age: 45, experience: 4});

//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// function Car(model, brand, year, speed, volume){
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.speed = speed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//
//     this.info = function() {
//         console.log(`${this.model} - ${this.brand} - ${this.year} - ${this.speed} - ${this.volume}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = newSpeed;
//         console.log(`${this.speed}`);
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(`${this.year}`);
//     }
//     this.addDriver = function (driver) {
//         car['driver'] = driver;
//     }
// }
//
// let car = new Car('BMW X5','BWM',2019,100,'2.0л');
// car.drive();
// car.info();
// car.increaseMaxSpeed(600);
// car.changeYear(2004);
// car.addDriver({name: 'Nazar', age: 45, exp: '5 year'});
// console.log(car);

//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car{
//     constructor(model, brand, year, speed, volume) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.speed = speed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//
//     info() {
//         console.log(`${this.model} - ${this.brand} - ${this.year} - ${this.speed} - ${this.volume}`)
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.speed = newSpeed;
//         console.log(`${this.speed}`);
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//         console.log(`${this.year}`);
//     }
//     addDriver(driver) {
//         car['driver'] = driver;
//     }
// }
//
// let car = new Car('BMW X5','BWM',2019,100,'2.0л');
// car.drive();
// car.info();
// car.increaseMaxSpeed(600);
// car.changeYear(2004);
// car.addDriver({name: 'Nazar', age: 45, exp: '5 year'});
// console.log(car);


//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Princess{
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let princess_1 = new Princess('Olena', 19,33);
// let princess_2 = new Princess('Olya', 18,38);
// let princess_3 = new Princess('Mariya', 17,36);
// let princess_4 = new Princess('Sofi', 20,37);
// let princess_5 = new Princess('Anastasia', 18,35);
// let princess_6 = new Princess('Irina', 21,38);
// let princess_7 = new Princess('Mulan', 18,34);
// let princess_8 = new Princess('Mary', 17,37);
// let princess_9 = new Princess('Viktoria', 19,38);
// let princess_10 = new Princess('Nadiya', 23,39);
//
// let arr = [princess_1,princess_2,princess_3,princess_4,princess_5,princess_6,princess_7,princess_8,princess_9,princess_10];
//
// class Prince{
//     constructor(name,age, necessaryShoes) {
//         this.name = name;
//         this.age = age;
//         this.necessaryShoes = necessaryShoes;
//         }
//
//     findShoes(){
//         for (const el of arr) {
//             if (el.size === this.necessaryShoes){
//                 console.log(`${this.name} - ${el.name}`);
//             }
//         }
//     }
// }
//
// let william = new Prince('William', 25,37)
// william.findShoes();

//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// function Princess(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let princess_1 = new Princess('Olena', 19,33);
// let princess_2 = new Princess('Olya', 18,38);
// let princess_3 = new Princess('Mariya', 17,36);
// let princess_4 = new Princess('Sofi', 20,37);
// let princess_5 = new Princess('Anastasia', 18,35);
// let princess_6 = new Princess('Irina', 21,38);
// let princess_7 = new Princess('Mulan', 18,34);
// let princess_8 = new Princess('Mary', 17,37);
// let princess_9 = new Princess('Viktoria', 19,38);
// let princess_10 = new Princess('Nadiya', 23,39);
//
// let arr = [princess_1,princess_2,princess_3,princess_4,princess_5,princess_6,princess_7,princess_8,princess_9,princess_10];
//
// function Prince(name, age, necessarySize) {
//     this.name = name;
//     this.age = age;
//     this.necessarySize = necessarySize;
//
//     this.findPrincess = function (){
//         for (const el of arr){
//             if (this.necessarySize === el.size){
//                 console.log(`${this.name} - ${el.name}`);
//             }
//         }
//     }
// }
// let william = new Prince('William', 25,38);
// william.findPrincess();

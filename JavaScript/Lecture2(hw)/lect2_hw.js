//--створити масив та вивести його в консоль:

//- з 5 числових значень

let arr = [3 , -23, 367, -223, 89.9];
console.log(arr);

//- з 5 стічкових значень

let arr = ['oleg' , 'abc', 'maryana', 'row', 'column'];
console.log(arr);

//- з 5 значень стрічкового, числового та булевого типу

let arr = [ 'true', 'false' , 34, true , 5667];
console.log(arr);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
arr[0] = 'hi';
arr[1] = 34;
arr[2] = true;
arr[3] = 'false';
arr[4] = -456;
arr[5] = 345;
console.log(arr);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++){
    document.write(`<div>Hello world</div>`);
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++ ) {
    document.write(`<div>Hello world${i}</div>`);
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write("<h1>hello ok10</h1>");
    i++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i = 0;
while (i < 20) {
    document.write(`<h1>hello okten${i}</h1>`);
    i++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr = [23, 34, 67, 124, -34, -67, 123, 9, -2, 45];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr = ['abc', 'true', 'false', 'qwerty', 'abc123', 'maryana', 'lobyk', 'petro', 'mariya', 'iaryna'];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr = ['true', true, 'false', false, 123, -765, 'hello', 'world', 45.67, 45];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr = ['true', true, 'false', false, 123, -765, 'hello', 'world', 45.67, 45];

for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == "boolean") {
        console.log(arr[i])
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr = ['true', true, 'false', false, 123, -765, 'hello', 'world', 45.67, 45];
for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        console.log(arr[i]);
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr = ['true', true, 'false', false, 123, -765, 'hello', 'world', 45.67, 45];
for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
        console.log(arr[i]);
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr = [];
arr[0] = 'hi';
arr[1] = 34;
arr[2] = true;
arr[3] = 'hr';
arr[4] = -456;
arr[5] = 345;
arr[6] = false;
arr[7] = 'br';
arr[8] = 8;
arr[9] = -12;
arr[10] = 'back';

for (i = 0; i < 10; i++) {
    console.log(arr[i]);
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++ ) {
    console.log(i);
    document.write(i + "<br>");
}

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for ( let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i + '<br>');
}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 200; i+=2 ) {
    console.log(i/2);
    document.write(i/2 + "<br>");
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (i = 0; i < 100; i++) {
    if (i%2 == 0) {
        console.log(i);
        document.write(i + '<br>');
    }
}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (i=0; i<100; i++) {
    if(i%2 == 1) {
        console.log(i);
        document.write(i);
    }
}

 //- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (m = 0; m <= 2; m++ ) {
    for (s = 0; s < 60; s++) {
        console.log(m + 'minute' + s + 'second')
        if (m == 2 && s == 0) {
            break;
        }
    }
}

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let h = 0; h <= 2; h++) {
    for (let m = 0; m < 60; m++) {
        for (let s = 0; s < 60; s++ ) {
                document.write(h + 'hour'+ m + 'minute'+ s + 'second' + '<br>');
            if(h == 2 && m == 20){
                break;
            }
        }
        if(h == 2 && m == 20) {
            break;
        }
    }
}

//Додатково

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
for (i = 0; i < 3; i++) {
    console.log(arr[1]+arr[2]+arr[0]);
}

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let i = 0;
while (i < 3) {
    console.log(arr[2]+arr[0]+arr[1]);
    i++;
}

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
for (i of arr) {
    console.log(arr[1] + arr[2] + arr[0]);
}

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//1. перебрати його циклом while

let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < 10) {
    console.log(arr[i]);
    i++;
}

//2. перебрати його циклом for

let arr = [2,17,13,6,22,31,45,66,100,-18];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом

let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length) {
    if(i%2 == 1) {
        console.log(arr[i]);
    }
    i++;
}

 //4. перебрати циклом for та вивести  числа тільки з непарним індексом

let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i = 0; i < arr.length; i++) {
    if (i%2 == 1){
        console.log(arr[i]);
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення

let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length) {
    if(arr[i]%2 == 0) {
        console.log(arr[i]);
    }
    i++;
}

//6. перебрати циклом for та вивести  числа тільки парні  значення

let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0) {
        console.log(arr[i]);
    }
}

//7. замінити кожне число кратне 3 на слово "okten"

let arr = [2,17,13,6,22,31,45,66,100,-18];
let str = "okten";
for (i = 0; i < arr.length; i++) {
    if (arr[i]%3 === 0) {
        arr[i] = "okten";
    }
    console.log(arr[i]);
}

//8. вивести масив в зворотньому порядку.

let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i = arr.length; i > 0; i--) {
    console.log(arr[i]);

}

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr = [23, 34, 67, 124, -34, -67, 123, 9, -2, 45];
for (let i = arr.length; i > 0; i--) {
    console.log(arr[i]);
}


let arr = ['abc', 'true', 'false', 'qwerty', 'abc123', 'maryana', 'lobyk', 'petro', 'mariya', 'iaryna'];

for (i = arr.length; i > 0; i--) {
    console.log(arr[i]);
}


let arr = ['true', true, 'false', false, 123, -765, 'hello', 'world', 45.67, 45];

for (i = arr.length; i > 0; i--) {
    console.log(arr[i]);
}


let arr = ['true', true, 'false', false, 123, -765, 'hello', 'world', 45.67, 45];

for (let i = arr.length; i > 0; i--) {
    if(typeof arr[i] == "boolean") {
        console.log(arr[i])
    }
}


let arr = [];
arr[0] = 'hi';
arr[1] = 34;
arr[2] = true;
arr[3] = 'hr';
arr[4] = -456;
arr[5] = 345;
arr[6] = false;
arr[7] = 'br';
arr[8] = 8;
arr[9] = -12;
arr[10] = 'back';

for (i = arr.length; i > 0; i--) {
    console.log(arr[i]);
}


//10. створити пустий масив та :

//- заповнити його 50 парними числами за допомоги циклу.

let arr = [];
for (i = 0; i < 100; i++) {
    if (i%2 === 0) {
        arr[i] = i;
        console.log(arr[i]);
    }
}

//- заповнити його 50 непарними числами за допомоги циклу.

let arr = [];
for (i = 0; i < 100; i++) {
    if (i%2 === 1) {
        arr[i] = i;
        console.log(arr[i]);
    }
}


// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
//
// let textarea = document.getElementById('area');
//
// textarea.oninput = (ev) => {
//     localStorage.setItem('text', textarea.value);
// }
// textarea.value = localStorage.getItem('text');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//
// let item = document.querySelectorAll('textarea, input')
//
// for (let i = 0; i < item.length; i++) {
//     function saveData(item) {
//         let id = item.getAttribute('id');
//         item.value = localStorage.getItem(id)
//         item.oninput = function () {
//             localStorage.setItem(id, item.value);
//         }
//     }
//     saveData(item[i]);
// }
//
// let check1 = document.getElementById('check1');
// let check2 = document.getElementById('check2');
//
// check1.onclick = () => {
//     if(check1.checked){
//         localStorage.setItem('status', "true");
//         return ;
//     }
//     localStorage.setItem('status', "false");
// }
// check1.checked = JSON.parse(localStorage.getItem('status'));
//
// check2.onclick = () => {
//     if (check2.checked){
//         localStorage.setItem('status2', 'true');
//         return;
//     }
//     localStorage.setItem('status2', 'false');
// }
// check2.checked = JSON.parse(localStorage.getItem('status2'));
//
// let radio1 = document.getElementById('radio1');
// let radio2 = document.getElementById('radio2');
//
// radio1.onclick = () => {
//     if(radio1.checked){
//         localStorage.setItem('radio_stat', "true");
//         return ;
//     }
//     localStorage.setItem('radio_stat', "false");
// }
// radio1.checked = JSON.parse(localStorage.getItem('radio_stat'));
//
// radio2.onclick = () => {
//     if (radio2.checked){
//         localStorage.setItem('radio_status2', 'true');
//         return;
//     }
//     localStorage.setItem('radio_status2', 'false');
// }
// radio2.checked = JSON.parse(localStorage.getItem('radio_status2'));


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let bttnBack = document.getElementById('back');
// let bttnNext = document.getElementById('next');
// let bttnSave = document.getElementById('save');
//
// let text = document.getElementById('area');
//
// bttnSave.onclick = () => {
//     localStorage.setItem(localStorage.length+1, text.value);
// }
//
// bttnBack.onclick = () => {
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.getItem(key) === text.value){
//             index = key;
//         }
//     }
//     if (index === '1'){
//         return;
//     }
//     text.value = localStorage.getItem(index - 1);
// }
//
// bttnNext.onclick = () => {
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.getItem(key) === text.value){
//             index = key;
//         }
//     }
//     if (index === localStorage.length.toString()){
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1);
// }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
//
// let users = document.getElementById('users');
// let form = document.forms.user;
//
// function saveUsers() {
//     users.innerText = null;
//     let userArray = JSON.parse(localStorage.getItem('users')) || [];
//     userArray.forEach((value, index) => {
//         let div = document.createElement('div');
//         let user = document.createElement('div');
//         user.innerText = JSON.stringify(value);
//         div.appendChild(user);
//
//         let bttn1 = document.createElement('button');
//         bttn1.innerText = 'Edit';
//         bttn1.onclick = function () {
//             let obj = JSON.parse(this.parentElement.firstElementChild.innerHTML)
//             let arr = JSON.parse(localStorage.getItem('users'))
//             arr.splice(index, 1);
//             localStorage.setItem('users', JSON.stringify(arr));
//             for (let key in obj){
//                 form[key].value = obj[key]
//             }
//         }
//
//         let bttn2 = document.createElement('button');
//         bttn2.innerText = 'Delete';
//         bttn2.onclick = () => {
//             let arr = JSON.parse(localStorage.getItem('users'));
//             arr.splice(index, 1);
//             localStorage.setItem('users', JSON.stringify(arr));
//             saveUsers();
//         }
//
//         div.appendChild(bttn1);
//         div.appendChild(bttn2);
//         users.appendChild(div);
//     })
// }
//
// saveUsers();
//
// let saveBttn = document.getElementById('bttn');
// saveBttn.onclick = () => {
//     let arr = JSON.parse(localStorage.getItem('users')) || [];
//     let object = {}
//     for (let item of form){
//         object[item.name] = item.value
//     }
//     arr.push(object)
//     localStorage.setItem('users', JSON.stringify(arr))
//     form.reset();
//     saveUsers();
// }

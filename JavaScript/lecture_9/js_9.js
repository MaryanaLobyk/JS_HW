//Розпорядок дня

//CallBack Hell
// function wakeUp(alarmClock, cb) {
//     console.log('Good morning');
//
//     setTimeout(() => {
//         if (alarmClock < 7){
//             cb('Keep on sleeping', null);
//             return;
//         }
//         cb(null, 'Get up!!!');
//     }, 3000);
// }
//
// function haveShower(water ,cb) {
//     console.log('You should have shower');
//
//     setTimeout(() => {
//         if (!water){
//             cb('You will be without having shower ...', null);
//             return ;
//         }
//         cb(null, 'WAAAAAAAATER is here!!!');
//     }, 2000)
// }
//
// function haveBreakfast(money, cb) {
//     console.log('It is time for BREAKFAST');
//     setTimeout(() => {
//         if(!money){
//             cb('It is time for diet', null);
//             return;
//         }
//         cb(null, 'STOP diet, you can eat!!!');
//     }, 1000)
// }
//
// function onBus(ticket, cb) {
//     console.log('Bus is waiting for you');
//     setTimeout(() => {
//         if (!ticket || ticket === 'overdue', null){
//             cb('You should go off');
//             return;
//         }
//         cb(null, 'Keep calm and keep your trip by bus');
//     }, 2000)
// }
//
// function visitUniver(hw, cb) {
//     console.log('Your favourite place - University)))');
//     setTimeout(() => {
//         if (!hw){
//             cb('You will have problems with hw', null);
//             return;
//         }
//         cb(null, 'You are lucky or SMART!!!');
//     }, 2000)
// }
//
// function visitLecture(teacher, cb){
//     console.log('Lecture is waiting for you');
//     setTimeout(() => {
//         if (teacher === 'Jhon'){
//             cb('It is not your day, you will get bad mark', null);
//             return ;
//         }
//         cb(null, 'It is your day, your favourite teacher is here');
//     }, 1500)
// }
//
// function meetFriend(time, cb){
//     console.log('Now it is time for friend');
//     setTimeout(() => {
//         if (time > 23){
//             cb('It is too late, you should go home!!!', null);
//             return ;
//         }
//         cb(null, 'Continue your PARTY!!!');
//     }, 2500)
// }
//
// wakeUp(10, (err, data) => {
//     if (err){
//         console.log(err);
//         return ;
//     }
//     console.log(data);
//
//     haveShower(true, (err, data) => {
//         if(err){
//             console.log(err);
//             return ;
//         }
//         console.log(data);
//
//         haveBreakfast(true, (err, data) => {
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(data);
//
//             onBus(true, (err, data) => {
//                 if (err){
//                     console.log(err);
//                     return ;
//                 }
//                 console.log(data);
//
//                 visitUniver(true,(err,data) => {
//                     if (err){
//                         console.log(err);
//                         return ;
//                     }
//                     console.log(data);
//
//                     visitLecture('xxx', (err, data) => {
//                         if (err){
//                             console.log(err);
//                             return ;
//                         }
//                         console.log(data);
//
//                         meetFriend(15, (err, data) => {
//                             if (err){
//                                 console.log(err);
//                                 return ;
//                             }
//                             console.log(data);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//Promise
//
// function wakeUp(alarmClock) {
//     return new Promise((resolve, reject) => {
//         console.log('Good morning');
//         setTimeout(() => {
//             if (alarmClock < 7){
//                 reject('Keep on sleeping');
//                 return;
//             }
//             resolve('Get up!!!');
//         }, 3000);
//     })
// }
//
// function haveShower(water) {
//     return new Promise((resolve, reject) => {
//         console.log('You should have shower');
//         setTimeout(() => {
//             if (!water){
//                 reject('You will be without having shower ...');
//                 return ;
//             }
//             resolve('WAAAAAAAATER is here!!!');
//         }, 2000)
//     })
// }
//
// function haveBreakfast(money) {
//     return new Promise((resolve, reject) => {
//         console.log('It is time for BREAKFAST');
//         setTimeout(() => {
//             if(!money){
//                 reject('It is time for diet');
//                 return;
//             }
//             resolve( 'STOP diet, you can eat!!!');
//         }, 1000)
//     })
// }
//
// function onBus(ticket) {
//     return new Promise((resolve, reject) => {
//         console.log('Bus is waiting for you');
//         setTimeout(() => {
//             if (!ticket || ticket === 'overdue'){
//                 reject('You should go off');
//                 return;
//             }
//             resolve( 'Keep calm and keep your trip by bus');
//         }, 2000)
//     })
// }
//
// function visitUniver(hw) {
//     return new Promise((resolve, reject) => {
//         console.log('Your favourite place - University)))');
//         setTimeout(() => {
//             if (!hw){
//                 reject('You will have problems with hw');
//                 return;
//             }
//             resolve( 'You are lucky or SMART!!!');
//         }, 2000)
//     })
// }
//
// function visitLecture(teacher){
//     return new Promise((resolve, reject) => {
//         console.log('Lecture is waiting for you');
//         setTimeout(() => {
//             if (teacher === 'Jhon'){
//                 reject('It is not your day, you will get bad mark');
//                 return ;
//             }
//             resolve( 'It is your day, your favourite teacher is here');
//         }, 1500)
//     })
// }
//
// function meetFriend(time){
//     return  new Promise((resolve, reject) => {
//         console.log('Now it is time for friend');
//         setTimeout(() => {
//             if (time > 23){
//                 reject('It is too late, you should go home!!!');
//                 return ;
//             }
//             resolve('Continue your PARTY!!!');
//         }, 2500)
//     })
//
// }
//
// wakeUp(10)
//     .then(alarmClock => {
//         console.log(alarmClock);
//
//         return haveShower(true);
//     })
//     .then(value => {
//         console.log(value);
//
//         return haveBreakfast(true);
//     })
//     .then(value => {
//         console.log(value);
//
//         return onBus(true);
//     })
//     .then(value => {
//         console.log(value);
//
//         return visitUniver(true);
//     })
//
//     .then(value => {
//         console.log(value);
//
//         return visitLecture('Eric');
//     })
//     .then(value => {
//         console.log(value);
//
//         return meetFriend(18);
//     })
//     .catch(reason => {
//         console.log('*************')
//         console.log(reason)
//         console.log('*************')
//     })

//Async await
//
//
// function wakeUp(alarmClock) {
//     return new Promise((resolve, reject) => {
//         console.log('Good morning');
//         setTimeout(() => {
//             if (alarmClock < 7){
//                 reject('Keep on sleeping');
//                 return;
//             }
//             resolve('Get up!!!');
//         }, 3000);
//     })
// }
//
// function haveShower(water) {
//     return new Promise((resolve, reject) => {
//         console.log('You should have shower');
//         setTimeout(() => {
//             if (!water){
//                 reject('You will be without having shower ...');
//                 return ;
//             }
//             resolve('WAAAAAAAATER is here!!!');
//         }, 2000)
//     })
// }
//
// function haveBreakfast(money) {
//     return new Promise((resolve, reject) => {
//         console.log('It is time for BREAKFAST');
//         setTimeout(() => {
//             if(!money){
//                 reject('It is time for diet');
//                 return;
//             }
//             resolve( 'STOP diet, you can eat!!!');
//         }, 1000)
//     })
// }
//
// function onBus(ticket) {
//     return new Promise((resolve, reject) => {
//         console.log('Bus is waiting for you');
//         setTimeout(() => {
//             if (!ticket || ticket === 'overdue'){
//                 reject('You should go off');
//                 return;
//             }
//             resolve( 'Keep calm and keep your trip by bus');
//         }, 2000)
//     })
// }
//
// function visitUniver(hw) {
//     return new Promise((resolve, reject) => {
//         console.log('Your favourite place - University)))');
//         setTimeout(() => {
//             if (!hw){
//                 reject('You will have problems with hw');
//                 return;
//             }
//             resolve( 'You are lucky or SMART!!!');
//         }, 2000)
//     })
// }
//
// function visitLecture(teacher){
//     return new Promise((resolve, reject) => {
//         console.log('Lecture is waiting for you');
//         setTimeout(() => {
//             if (teacher === 'Jhon'){
//                 reject('It is not your day, you will get bad mark');
//                 return ;
//             }
//             resolve( 'It is your day, your favourite teacher is here');
//         }, 1500)
//     })
// }
//
// function meetFriend(time){
//     return  new Promise((resolve, reject) => {
//         console.log('Now it is time for friend');
//         setTimeout(() => {
//             if (time > 23){
//                 reject('It is too late, you should go home!!!');
//                 return ;
//             }
//             resolve('Continue your PARTY!!!');
//         }, 2500)
//     })
//
// }
//
// async function routine() {
//     try {
//         let up = await wakeUp(10);
//         console.log(up);
//
//         let shower = await haveShower(true);
//         console.log(shower);
//
//         let food = await haveBreakfast(false);
//         console.log(food);
//
//         let bus = await onBus(true);
//         console.log(bus);
//
//         let univer = await visitUniver(true);
//         console.log(univer);
//
//         let lecture = await visitLecture('Eric');
//         console.log(lecture);
//
//         let friend = await meetFriend(20);
//         console.log(friend);
//     }catch (e){
//         console.log("********")
//         console.log(e);
//         console.log("********")
//     }
// }
//
// routine()


//Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//
// let txt = 'Hello World';
// let i = 0;
//
// function writer() {
//     if (i < txt.length) {
//         let text = txt.charAt(i);
//         let p = document.getElementById('text');
//         p.innerHTML += text;
//         i++;
//         setTimeout(writer, Math.round(Math.random()*2000));
//     }
// }
// writer(txt);
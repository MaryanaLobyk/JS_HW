// Давайте найдем сумму примитивных элементов нашего массива:
//
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
//
// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
//
// function xxx(arr) {
//     let count = 0;
//     for (const arrElement of arr) {
//         if (Array.isArray(arrElement)) {
//             count += xxx(arrElement);
//         } else {
//             count += arrElement;
//         }
//     }
//
//     return count;
// }
//
// console.log(xxx(arr));

// function Sumter(arr){
//     let suma = arr.shift();
//     if (arr.length !== 0) {
//         suma += Sumter(arr);
//     }
//     return suma;
// }
//
// console.log(Sumter([3, 4, 5]));


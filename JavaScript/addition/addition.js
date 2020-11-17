//найти в массиве уникольное значение, пример:
//findUniq([1,1,1,2,1,1]) === 2
//findUniq([0,0,0.55,0,0]) === 0.55
//условие: массив длиной минимум 3 елемента


function findUniq(array) {
    let k = 0;
    let uniq;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) k++;
        }
        if (k === 1) uniq = array[i];
            k = 0;
    }
    return uniq;
}
console.log(findUniq([1,1,1,2,1,1]));

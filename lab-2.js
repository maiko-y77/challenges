function countTrue(arr) {
    let conunter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            conunter++;
        }
    }
    return conunter;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
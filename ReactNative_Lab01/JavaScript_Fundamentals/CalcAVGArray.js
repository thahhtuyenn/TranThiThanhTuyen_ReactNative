const calcAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

let arr = [93, 21, 56, 12, 7, 45];
let avgArr = calcAverage(arr);
console.log(`Array: [${arr}]. Array's AVG: ${avgArr}`);

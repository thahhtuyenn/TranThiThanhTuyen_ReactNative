let printMessage = (number, index) => {
    let message = `${number}ºC in ${index} days`
    return message;
}

let printForecast = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(printMessage(arr[i], (i + 1)));
        
    }
}

console.log('Data 1: ');
let arr = [17, 21, 23];
printForecast(arr)

console.log('Data 2: ');
arr =  [12, 5, -5, 0, 4];
printForecast(arr)


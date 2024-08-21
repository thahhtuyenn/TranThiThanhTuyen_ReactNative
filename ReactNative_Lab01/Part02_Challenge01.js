const average = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

let checkWinner = (avgDol, avgKoa) => {
    if(avgDol >= (2 * avgKoa)){
        console.log(`Dolphins win (${avgDol} vs ${avgKoa})`);
    }else if (avgKoa >= (2 * avgDol)){
        console.log(`Koalas win (${avgKoa} vs ${avgDol})`);
    }else{
        console.log('No team wins!');
    }
}

let Dolphins = [44, 23, 71];
let Koalas = [65, 54, 49];
let avgDolphins = average(Dolphins);
let avgKoalas = average(Koalas);
console.log('Data 1:');
console.log(`Dolphins: ${Dolphins} - AVG: ${avgDolphins}`);
console.log(`Koalas: ${Koalas} - AVG: ${avgKoalas}`);

checkWinner(avgDolphins, avgKoalas)

Dolphins = [85, 54, 41];
Koalas = [23, 34, 27];
avgDolphins = average(Dolphins);
avgKoalas = average(Koalas);
console.log('Data 2:');
console.log(`Dolphins: ${Dolphins} - AVG: ${avgDolphins}`);
console.log(`Koalas: ${Koalas} - AVG: ${avgKoalas}`);

checkWinner(avgDolphins, avgKoalas)
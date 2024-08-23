const average = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

// Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
let Dolphins = [96, 108, 89];
let Koalas = [88, 91, 110];
let avgDolphins = average(Dolphins);
let avgKoalas = average(Koalas);
console.log('Cau 2: ');
console.log(`Dolphins: ${Dolphins} - AVG: ${avgDolphins}`);
console.log(`Koalas: ${Koalas} AVG: ${avgKoalas}`);

if(avgDolphins > avgKoalas){
    console.log(`Dolphins is winner AVG(${avgDolphins})`);
}else if (avgDolphins < avgKoalas){
    console.log(`Koalas is winner AVG(${avgKoalas})`);
}else{
    console.log(`Both Koalas and Dolphins draw.`);
}


// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
Dolphins = [97, 112, 101];
Koalas = [109, 95, 123];
avgDolphins = average(Dolphins);
avgKoalas = average(Koalas);

console.log('Cau 3: ');
console.log(`Dolphins: ${Dolphins} - AVG: ${avgDolphins}`);
console.log(`Koalas: ${Koalas} AVG: ${avgKoalas}`);

if( avgDolphins >= 100 && avgDolphins > avgKoalas){
    console.log(`Dolphins is winner AVG(${avgDolphins})`);
}else if (avgDolphins < avgKoalas && avgKoalas >= 100){
    console.log(`Koalas is winner AVG(${avgKoalas})`);
}else{
    console.log(`Both Koalas and Dolphins draw.`);
}

// Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
Dolphins = [97, 112, 101];
Koalas = [109, 95, 106];
avgDolphins = average(Dolphins);
avgKoalas = average(Koalas);
console.log('Cau 4: ');
console.log(`Dolphins: ${Dolphins} - AVG: ${avgDolphins}`);
console.log(`Koalas: ${Koalas} AVG: ${avgKoalas}`);

if( avgDolphins >= 100 && avgDolphins > avgKoalas){
    console.log(`Dolphins is winner AVG(${avgDolphins})`);
}else if (avgDolphins < avgKoalas && avgKoalas >= 100){
    console.log(`Koalas is winner AVG(${avgKoalas})`);
}else if(avgDolphins >= 100 && avgKoalas >= 100 && avgDolphins == avgKoalas){
    console.log(`Both Koalas and Dolphins draw.`);
}
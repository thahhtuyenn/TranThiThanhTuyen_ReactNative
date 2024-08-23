const calcBMI = (person) => {
    let bmi = person.mass / person.height ** 2;
    return bmi;
}

let Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
}

let John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}

let bmiMark = calcBMI(Mark).toFixed(1);
let bmiJohn = calcBMI(John).toFixed(1);

let message = (bmiJohn > bmiMark) ? `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!` : `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`;
console.log(`Mark's BMI: ${bmiMark}`);
console.log(`John's BMI: ${bmiJohn}`);


console.log(message);

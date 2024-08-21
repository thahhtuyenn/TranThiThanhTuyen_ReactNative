const bmi = (height, weight) => {
    return (weight / (height * height));
}

let markHigherBMI = (bmiMarks, bmiJohn) => {
    if(bmiMarks > bmiJohn){
        return true;
    }

    return false;
}

let Mark = {
    height: 1.69,
    weight: 78
}

let John = {
    height: 1.95,
    weight: 92
}

let bmiMarks = bmi(Mark.height, Mark.weight);
let bmiJohn = bmi(John.height, John.weight)

if(markHigherBMI(bmiMarks, bmiJohn)){
    console.log(`Mark's BMI ${bmiMarks} is higher than John's ${bmiJohn}!`);
}else{
    console.log(`John's BMI ${bmiJohn} is higher thanMark's ${bmiMarks} !`);
}

Mark = {
    height: 1.88,
    weight: 95
}

John = {
    height: 1.76,
    weight: 85
}

bmiMarks = bmi(Mark.height, Mark.weight);
bmiJohn = bmi(John.height, John.weight)

if(markHigherBMI(bmiMarks, bmiJohn)){
    console.log(`Mark's BMI ${bmiMarks} is higher than John's ${bmiJohn}!`);
}else{
    console.log(`John's BMI ${bmiJohn} is higher thanMark's ${bmiMarks} !`);
}

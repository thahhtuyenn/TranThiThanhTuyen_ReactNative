const bmi = (height, weight) => {
    return (weight / (height * height));
}

let markHigherBMI = (mark, john) => {
    let bmiMarks = bmi(mark.height, mark.weight);
    let bmiJohn = bmi(john.height, john.weight)
    console.log('Marks BMI: ', bmiMarks);
    console.log('John BMI: ', bmiJohn);
    if(bmiMarks > bmiJohn){
        return true;
    }

    return false;
}

let Marks = {
    height: 78,
    weight: 1.69
}

let John = {
    height: 92,
    weight: 1.95
}

console.log(markHigherBMI(Marks, John));
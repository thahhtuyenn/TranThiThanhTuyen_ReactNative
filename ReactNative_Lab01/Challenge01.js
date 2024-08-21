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

let Mark = {
    height: 78,
    weight: 1.69
}

let John = {
    height: 92,
    weight: 1.95
}

if(markHigherBMI(Mark, John)){
    console.log('Mark has a higher BMI than John.');
}else{
    console.log('John has a higher BMI than Mark.');
}

Mark = {
    height: 95,
    weight: 1.88
}

John = {
    height: 85,
    weight: 1.76
}

if(markHigherBMI(Mark, John)){
    console.log('Mark has a higher BMI than John.');
}else{
    console.log('John has a higher BMI than Mark.');
}
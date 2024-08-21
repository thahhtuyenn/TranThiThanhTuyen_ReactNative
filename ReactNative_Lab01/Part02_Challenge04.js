let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

calcTip = (price) => {
    return (price >= 50 && price <= 300) ? (price * 0.15) : (price * 0.2);
}

let tips = [];
let totals = [];

for(let i = 0; i < bills.length; i++){
    let tip = calcTip(bills[i]);
    let total = bills[i] + tip;

    tips.push(tip);
    totals.push(total);
}

for(let i = 0; i < bills.length; i++){
    console.log(`Bill: ${bills[i]}, tip: ${tips[i]}, total: ${totals[i]}`);
}



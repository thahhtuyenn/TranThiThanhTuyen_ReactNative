const calcTip = (price) => {
    return (price >= 50 && price <= 300) ? (price * 0.15) : (price * 0.2);
}

console.log('Data 1: ');
let priceOrder = 100;
let tip = calcTip(priceOrder);
console.log(`The bill was ${priceOrder}, the tip was ${tip}, and the total value ${priceOrder + tip}`);

console.log('Data 2: ');
let bills = [125, 555, 44]
let tips = [];
let totals = [];
for (let i = 0; i < bills.length; i++) {
    let t = calcTip(bills[i]);
    let total = bills[i] + t;
    tips.push(t);    
    totals.push(total);
}
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);
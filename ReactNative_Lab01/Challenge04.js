let price = 275;
let tip = (price >= 50 && price <= 300) ? (price * 0.15) : (price * 0.2)
let totalPrice = price + tip

console.log(`The bill was ${price}, the tip was ${tip}, and the total value ${totalPrice}`);
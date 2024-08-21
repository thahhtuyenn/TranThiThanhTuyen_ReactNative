


let tip = (price) => {
   return (price >= 50 && price <= 300) ? (price * 0.15) : (price * 0.2)
}

let price = 275;
let tips = tip(price)

let totalPrice = price + tips

console.log(`The bill was ${price}, the tip was ${tips}, and the total value ${totalPrice}`);
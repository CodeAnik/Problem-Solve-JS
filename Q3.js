function deliveryCost(tShirtQuantity) {
if (Math.sign(tShirtQuantity) != -1 && tShirtQuantity % 1 === 0) {
if (tShirtQuantity <= 100) {
return tShirtQuantity * 100;
} else if (tShirtQuantity > 100 && tShirtQuantity <= 200) {
priceForFirstHundred = 10000;
priceAfterFirstHundred = (tShirtQuantity - 100) * 80;
return priceForFirstHundred + priceAfterFirstHundred;
} else {
priceForFirstHundred = 10000;
priceAfterFirstHundred = 8000
priceAfterSecondHundred = (tShirtQuantity - 200) * 50;
return priceForFirstHundred + priceAfterFirstHundred + priceAfterSecondHundred;
}
} else {
return "Your input is invalid";
}
}
// let totalCost= deliveryCost(201);
// console.log(totalCost);
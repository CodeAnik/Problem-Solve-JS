function totalSales(shirtQuantity = 0, pantQuantity = 0, shoeQuantity = 0) {
if (Math.sign(shirtQuantity) != -1 && shirtQuantity % 1 === 0 && Math.sign(pantQuantity) != -1 && shirtQuantity % 1 === 0 && Math.sign(shoeQuantity) != -1 && shirtQuantity % 1 === 0) {
const shirtPrice = 100;
const pantPrice = 200;
const shoePrice = 500;
const totalPrice = shirtPrice * shirtQuantity + pantPrice * pantQuantity + shoePrice * shoeQuantity;
return totalPrice;
} else {
return "Your input is invalid";
}
}
// let total= totalSales(1,2,1);
// console.log(total);
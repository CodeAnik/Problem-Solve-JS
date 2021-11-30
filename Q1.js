function seerToMon(seer) {
if (Math.sign(seer) == 1 || Math.sign(seer) == 0) {
const mon = seer / 40;
return mon;
} else {
return "Your input is invalid";
}
}
// let result =seerToMon(.6756);
// console.log(result);
function perfectFriend(names) {
if (names.length > 0) {
for (const name of names) {
if (name.length == 5) {
return name;
}
}
return "Didn't find any name of five length.";
} else {
return "You don't have any friend. Please make some friend in your life"
}
}
// let myperfectFriend =perfectFriend(['Lion',"Dog",'Tiger','Elephant','Cat','Rat']);
// console.log(myperfectFriend);
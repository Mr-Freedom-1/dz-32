/*-------------Завдання №1-------------*/
// let mixin = {
//     vat(){return this.price + this.price * 0.2},
//     exciseDuty(){return (this.price + this.price * 0.3) + 10},
//     singleTax(){return this.price + 1},
// }

// class Cola {
//     constructor(brand, price){
//         this.brand = brand;
//         this.price = price;
//     }
// }
// Object.assign(Cola.prototype, mixin)

// class Whiskey {
//     constructor(brand, price){
//         this.brand = brand;
//         this.price = price;
//     }
// }
// Object.assign(Whiskey.prototype, mixin)

// class Ice  {
//     constructor(price){
//         this.price = price;
//     }
// }
// Object.assign(Ice.prototype, mixin)

// let cocaCola = new Cola('Coca-Cola', 10);
// let jonhwalker = new Whiskey('jonh walker', 100);
// let ice = new Ice(2)

// console.log(cocaCola.vat());
// console.log(jonhwalker.exciseDuty());
// console.log(ice.singleTax());

/*-------------Завдання №2-------------*/
// function uniceString(str) {
//     let string = str.split('; ')
//     let unice = new Set(string);
//     let stingJoin = [...unice].join(', ');
//     return stingJoin;
// }
// console.log(uniceString("cherry; orange; cherry; banana; banana"));

/*-------------Завдання №3-------------*/
// let list = document.getElementsByClassName("shop-list")[0].innerHTML;

// function getText(input) {
//     let openTag = '<li>';
//     let closeTag = '</li>';

// return input.split(openTag)
//     .slice(1)
//     .flatMap(textWithClose => textWithClose.split(closeTag, 1));
// }

// let a = getText(list);
// let uniq = new Set(a);
// console.log(uniq);

/*-------------Завдання №4-------------*/
let mike = {name: 'Mike', age: 18}
let bob = {name: 'Bob', age: 25}
let nikola = {name: 'Nikola', age: 32}
let userVisits = new WeakMap();

function visits(user) {
  let count = userVisits.get(user) || 0;
  userVisits.set(user, count + 1);
}

const mikeVisits = visits;
const bobVisits = visits;
const nikolaVisits = visits;
 
mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);

console.log(userVisits.get(mike));
console.log(userVisits.get(bob));
console.log(userVisits.get(nikola));
// Block the code for 10 sec
// let startDate = Date.now();
// console.log(startDate);
// let endDate = startDate;
// while (endDate < startDate + 10000){
//   endDate = Date.now();
// }
// console.log("10 sec passed");

let arr = [1,2,3]
let arr2 = arr.map(el=>{return el*10})
console.log(arr2);
const reduced = arr2.reduce((acc,el)=>{
  return acc+=el
},100)
console.log(reduced)

const addTo = function (x){
  return (y)=>{
    return x+y
  }
}
console.log(addTo(7)(3))

console.log("string".padStart(10,"*"));
console.log("string".padEnd(10,"*"));

obj = {1: "A", 2: "B", 3: "C"};
console.log(Object.entries(obj));
newarr = Object.entries(obj).map(entry=>{
  return entry[1].replace("A","Z") + entry[0]
});
console.log(newarr);

console.log([1,[3,4,[5,6,[7]]]].flat(100))

// nullish coaelescing operator
let my_poc = {
  pika: {
    species: "mouse",
    power:""
  }
}
let power = my_poc?.pika?.power || "no power"
console.log(power) //no power executes if falsy value (false, "", 0, null, undefined)

let my_poc2 = {
  pika: {
    species: "mouse",
    power: 0
  }
}
let power2 = my_poc2?.pika?.power ?? "no power"
console.log(power2) //no power executes only if power is null or undefined

console.log("HH")
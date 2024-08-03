1.
let son1 = 1000;
let son2 = 7;
console.log(son1 - son2 + ` :brinchi masala`);

2.
let a = '12';
a = Number(a);
console.log(`ikkinchi masala: ` + a);
console.log(typeof a);
 

3.
let randomNumber = Math.floor(Math.random() * 101);
console.log(`uchinchi masala: ` + "Random raqam:", randomNumber);
if (randomNumber % 2 === 0) {
    console.log(randomNumber + " juft son.");
} else {
    console.log(randomNumber + " toq son.");
}


4.
const sozlar = prompt("Soz kiriting:");
if (sozlar === "Mars") {
  console.log(`tortinchi masala: ` + sozlar);
} else {
  console.log(`tortinchi masala: ` + "Mars IT school");
}


5.
const arr = ["olma", "banan", "gilos", "tarvuz", "qovun"];
const arr1 = [];
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length === 5) {
    arr1.push(arr[i]);
  } else {
    arr2.push(arr[i]);
  }
}
console.log(`beshinchi masala: ` + "5 ta harfli sozlar:", arr1);
console.log("5 ta harfdan kop yoki kam sozlar:", arr2);

6.
const juft = [];
const toq = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    juft.push(i);
  } else {
    toq.push(i);
  }
}
console.log(`oltinchi masala: ` + "Toq sonlar:", toq);
console.log("Juft sonlar:", juft);
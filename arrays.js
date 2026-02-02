let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// --- Løs opgaverne herunder --- 

// --- opgave 1 --- 
let result = numbersArray.filter((Number) => Number > 20);
console.log(result);

// --- opgave 2 ---

// catsArray = catsArray.map(function(name){
//     return {"Sniffles": name};
// });

let count = catsArray.push("Sniffles");

console.log(catsArray);


// --- opgave 3a ---

let Trixie = dogsArray.includes("Trixie");
console.log(typeof dogsArray);
console.log(Trixie === true);



// --- opgave 3b ---

let Baxter = dogsArray.includes("Baxter");
console.log(typeof dogsArray);
console.log(Baxter === true);
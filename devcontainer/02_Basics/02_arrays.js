const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)//concat method do not change existing array its return new array

console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// Spread means indivisual element

const another_array = [1,2,3,[4,5,6],7,[6,7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))//o/p: Empty array ,[]
 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


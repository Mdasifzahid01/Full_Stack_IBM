
// foreach
// let arr = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11, 12, 13, 14]

// arr.forEach((el, i) => {
//     console.log(el, i);
//     // console.log(i, el);
// });
// let ans =  arr.forEach((el, i) => {
//     return el
// });

// console.log(ans); // output (undefind)

// map
// let ans =  arr.map((el, i) => {
//     return el;
// });

// console.log(ans);  // output arr

//filetr
// let ans =  arr.filter((el, i) => {
//     // return el%2 == 0 && el !== 4;
//     return typeof el == "string" || el%5 == 0;
// });

// console.log(ans);

// reduce
// let ans =  arr.reduce((acc,el) => {
//     return acc+el;
// });

// console.log(ans);  // return alwasy singal value after perform operation

// let arr = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11, 12, 13, 14]

// let ans =  arr.map((el, i) => {
//     return el;
// }).filter((el) => {
//     return el%2 == 0 && el%6 !== 0;
// }).reduce((acc, el) => {
//     return acc+el;
// });

// console.log(ans);

// let arr = [2, 35, 56,22, 59, 34, 65, 89, 78, 69, 100, 8]

// let ans = arr.sort((a,b) => {
//     // return a-b; // accending order
//     return b-a; // decending order
// });

// console.log(ans);

let data = [
    {name: "watch", price:200, desc:"Good Watch", rating:4},
    {name: "shoes", price:2000, desc:"bad shoes", rating:3},
    {name: "car", price:200000, desc:"bad car", rating:2.8},
    {name: "bike", price:340000, desc:"Good bike", rating:4.9},
    {name: "phone", price:208000, desc:"Good phone", rating:5}
]
data.sort((a,b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toLowerCase();

    if(nameA<nameB){
        return -1;
    }

    if(nameA>nameB){
        return 1;
    }
    // return a.price - b.price 
})
console.log(data);

 
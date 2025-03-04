//  //setTimeout, setInterval, setImmediate,  ----- macrotask
// // Promise, queueMicrotask --- microtask
// let name = "synchronous";
// console.log(name);

// setTimeout(() => {  
//     console.log("Asynchronousaly running ");
// }, 5000);

// let surName = "code";
// console.log(surName);

// setTimeout(() => {  
//     console.log("synchronousaly syning1");
// }, 3000);

// queueMicrotask(() =>{
//     console.log("Microtask syncing...")
// });
// setTimeout(() => {  
//     console.log("synchronousaly syning2");
// }, 4000); 

// // for(var i=0; i<5; i++){
// //     console.log(i);
// //     setTimeout(() =>{
// //         console.log(i);
// //     }, 1000)
// // }
// // for(let i=0; i<5; i++){
// //     console.log(i);
// //     setTimeout(() =>{
// //         console.log(i);
// //     }, 1000)
// // }

// for(var i=0; i<5; i++){
//     console.log(i);
//     setTimeout(() =>{
//         console.log(i);
//     }, 1000)

//     console.log(i);
// }

// // for(let i=0; i<5; i++){
// //     console.log(i);
// //     setTimeout(() =>{
// //         console.log(i);
// //     }, 1000)

// //     console.log(i);
// // }

// console.log(name, surName); 


// let myPromise = new Promise((resolve, reject) =>{
//     let flag = true;

//     if(flag){
//         resolve("promise is resolved with green flag")
//     }else{
//         reject("promise is reject with red flag")
//     }
// });

// console.log(myPromise);

async function fetchData(){
    let data = await fetch('https://fakestoreapi.com/users')

    let ans = await data.json();
    console.log(ans);
}

fetchData();  

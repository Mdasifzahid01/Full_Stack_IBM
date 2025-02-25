// console.log(this);

// let obj = {
//     name: "Sheikhzahid",
//     class:"B tech",
//     myfunction: function(){
//         console.log(this);
//         // console.log(name, class);
//         console.log("I am a method inside object");
//     },
//     subjects:["DBMS", "DS", "IBM"],
//     newObj:{
//         1:80,
//         nestedfunction:function(){
//             console.log(this);
//             console.log("I am nasted method of object");
//         },
//         nestednewObj:{
//             myMethod:function(){
//                 console.log("Another nested method");
                
//             }
//         }
//     }
// }

// let obj = {
//     name: "Sheikhzahid",
//     class:"B tech",
//     myfunction: () => { //Array function
//         console.log(this);
//         // console.log(name, class);
//         console.log("I am a method inside object");
//     },
//     subjects:["DBMS", "DS", "IBM"],
//     newObj:{
//         1:80,
//         nestedfunction:() => {
//             console.log(this);
//             console.log("I am nasted method of object");
//         },
//         nestednewObj:{
//             myMethod:() => {
//                 console.log("Another nested method");
                
//             }
//         }
//     }
// }

// console.log(obj.myfunction());
// obj.newObj.nestedfunction();

//Conditions

// let num1 = 10, num2=20;
// if(num1<num2){
//     console.log(`${num1} is less then ${num2}`);
// }if else(num1==num2){
//     console.log(`${num1} is equal ${num2}`);
// }else{
//     // console.log(`${num1} is not less then ${num2}`);
// }

// let num = prompt("Enter the number");


// if(num%3 == 0 && num%5 == 0){
//     console.log("fizz Buzz");
// }
// else if(num%3 == 0){
//     console.log("fizz");
// }else if(num%5 == 0){
//     console.log("Bizz");
// }else if(num%10 == 0){
//     console.log("Bizz");
// }else{
//     console.log("Wrong");
// }

//for loop

// let num = 10;

// for(let i=0; i<num; i=i+2){
//     console.log(i);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i],i);
// }

// let str = "sheikh zahid";
// for(let i=0; i<str.length; i++){
//     console.log("a"+str[i]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let num of arr){
//     console.log(num);
// }

// while loop

// let num = 10;

// while(num<20){
//     console.log(num);
//     num++;
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let num of arr){
    if(num%2 ==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}


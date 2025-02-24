let str = "sv university";

console.log(str.length);

console.log(str.length-1);

console.log(str[2]);

console.log(str[str.length-1]);

// let str1 = str.replace("v" , "u");
// console.log(str1);

let arr = [1, 2, 33, "sheikhzahid", 1.12, false, true, " "];

console.log(arr[arr.length-2]);

console.log(arr[3]);

arr.push("suman");
console.log(arr);

arr.pop();
console.log(arr);

let obj = {
    sheikhzahid : {className: "B tech", rn: 236, subjects:["DBMS", "DSA","RM", "NM"]},
    suman : {className: "B tech", rn: 249, subjects:["DBMS", "DSA","RM", "NM"]},
    1 : undefined
}

console.log(obj);
// console.log(obj.suman);
// console.log(obj["sheikhzahid"]);
// console.log(obj.suman.subjects[1]);

obj.hena ={hobbies:"dancing", fvrtcolor:"black"};

console.log(obj);

//Object Letral
let name = "sheikhzahid";
let Class = "B tech";
let hobbies = ["playing", "coocking"];

let newObj = {
    name, Class, hobbies
}

console.log(newObj);

let ans = [1, 2, 3, [9, 4, 6, [5, 1, 9]]];

console.log(ans[3][3][0]);

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}

console.log(superHeroes[2].metadata.age);

console.log(superHeroes[2].power[0]);

console.log(superHeroes[2].villains[0].health);










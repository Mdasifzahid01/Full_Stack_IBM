//qs-1
console.log("Question 1 Ans");
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
    console.log(arr[i]);
}

//qs-2
console.log("Question 2 Ans");
let number=287152;
let count =0;
let copy = number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}
console.log("count is ",count);

//qs-3
console.log("Question 3 Ans");
let nu =287152;
let sum =0;
let copy_2 = nu;

while(copy_2>0){
    digit =copy_2 %10;
    sum+=digit;
    copy_2=Math.floor(copy_2/10);

}
console.log("sum is =",sum);

//qs-4
console.log("Question-4");
let f=5;
let fact=1;
for(let i=1; i<=f; i++){
    fact*=i;
}
console.log("Fcatorial is :",fact);

//qs-5
console.log("Qustion 5");
let array =[2,5,10,4,2,7,1,90];
let largest =0;
for(let i=0; i<array.length; i++){
    if(array[i]>largest){
        largest=array[i];
    }
}
console.log("largest number is :",largest);
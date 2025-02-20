document.getElementById("parent").style.backgroundColor="blue"

document.getElementById("parent").style.border="1px solid black"

document.getElementById("parent").style.height="300px"

document.getElementById("parent").style.width="80%"


let element = document.createElement("button")

element.innerText = "Submit"
element.style.backgroundColor = "grey"
element.style.padding = "10px"
element.style.borderRadius = "20px"
element.style.color = "yellow"

document.getElementById("parent").append(element)

let num = 10;
// const num = 10;
// var num = 10;
console.log(num)

num = 15;
console.log(num)

function myfunction(){
    console.log(num)
}
myfunction()

 




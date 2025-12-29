
//  push();

const fruits = ["apple", "banana"];

let newLength1 = fruits.push("orange");

console.log("newLength1", newLength1);

console.log("fruits", fruits);




// pop();

let lastElement = fruits.pop();

console.log("lastElement", lastElement);

console.log("fruits", fruits);



// unshift()

let color = ["blue", "green"];

console.log("color : ", color);

console.log("color.length()", color.length);

let newLength2 = color.unshift("red", "black");

console.log("color : ", color);

console.log("newLength2", newLength2);




// shift()


let removedColor = color.shift();

console.log("removedColor: ", removedColor);

console.log("color : ", color);

console.log("color.length()", color.length);
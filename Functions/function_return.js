function test() {
    console.log("function test() called");

}


console.log(test());

const calculateTotal = (amount, taxRate = 0.05) => {
    return amount + (amount * taxRate);
};

console.log(calculateTotal(100)); // Output: 105
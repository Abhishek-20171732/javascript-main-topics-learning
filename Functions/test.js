function booWho(arg1) {
    console.log(typeof arg1);
    if (typeof arg1 == "boolean")
        return true;
    else
        return false;
}

console.log(booWho(true));
console.log(booWho([1, 2, 3]));
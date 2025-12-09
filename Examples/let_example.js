function checkAge(age) {
    if (age < 18) {
        let message = "Sorry, you are too young.";
    }
    else {
        let message = "Yay! You are old enough!";
    }
    console.log(message);
}


checkAge(18);
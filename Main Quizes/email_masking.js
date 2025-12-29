

function maskEmail(email) {

    const atIndex = email.indexOf("@");
    console.log("atIndex : ", atIndex);

    const userName = email.slice(0, atIndex)
    console.log("userName : ", userName);

    const domain = email.slice(atIndex);
    console.log("domain : ", domain);

    const maskedUserName = userName[0] + "*".repeat(userName.length - 2) + userName[userName.length - 1];

    return maskedUserName + domain;
}

let email = "abhishek@gmail.com";

console.log(maskEmail(email));
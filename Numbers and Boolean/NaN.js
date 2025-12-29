let result = 0 / 0;
console.log(result);
console.log(typeof result);

console.log(NaN === NaN);




/**
 *  isNaN() - 
 * 
 */

console.log("NaN : ", isNaN(NaN));

console.log("Undefined : ", isNaN(undefined));

console.log("{} : ", isNaN({}));

console.log("true : ", isNaN(true));

console.log("null : ", isNaN(null));

console.log("37 : ", isNaN(37));

console.log("\"37\" : ", isNaN("37"));

console.log("\"37.37\" : ", isNaN("37.37"));

console.log(" \"\" : ", isNaN(""));

console.log("  \" \": ", isNaN(" "));

console.log("blabla : ", isNaN("blabla"));


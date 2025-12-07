// 1. Debounce Function 

function debounce(func, delay) {

    let timer;
    // 'timer' will store the timeout ID

    return function (...args) {
        // 'args' collects all arguments pass to this function

        clearTimeout(timer);
        /**
         *  // Clears any previously set timer
         *  // This ensures the function does NOT run yet
         */



        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
        // Sets a new timer
        // If no new event happens within 'delay', function run


    };
}

/**
 * 
 *  2. The function we WANT to call, but debounced
 * 
 */

function searchAPI(query) {
    console.log("Calling server for: ", query);

}


/***
 * 
 *  Apply Debounce to the input event
 * 
 */


document.addEventListener("DOMContentLoaded", function () {

    // create a debounced version of searchAPI

    const debouncedSearch = debounce(searchAPI, 500);

    document.getElementById("search")
        .addEventListener("input", function () {
            debouncedSearch(this.value);
            // Instead of calling searchAPI directly,
            // we call the DEBOUNCED version

        });

});
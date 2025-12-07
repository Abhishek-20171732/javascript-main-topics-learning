function searchAPI(query) {
    console.log("calling server for :", query);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search")
        .addEventListener("input", function () {
            searchAPI(this.value);
        });
});

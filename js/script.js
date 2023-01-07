console.log("Hello World!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body")
let themeName = document.querySelector(".js-themeName")

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    if (body.classList.contains("body--dark")) {
        themeName.innerText = "jasny";
    }
    else {
        themeName.innerText = "ciemny";
    }
});
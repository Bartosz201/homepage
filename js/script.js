{
    const Welcome = () => console.log("Hello World!");
    const body = document.querySelector(".js-body")




    const changeBackground = () => {

        body.classList.toggle("body--dark");

        const themeName = document.querySelector(".js-themeName")
        if (body.classList.contains("body--dark")) {
            themeName.innerText = "jasny";
        }
        else {
            themeName.innerText = "ciemny";
        }
    }
    const init = () => {
        const button = document.querySelector(".js-button");

        Welcome();

        button.addEventListener("click", changeBackground)
    }
    init();
}
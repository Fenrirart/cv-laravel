require("./bootstrap");

const menuButton = document.querySelector("#menu");
const closeButton = document.querySelector("#close");
const offCanvas = document.querySelector("#off-canvas");

menuButton.addEventListener("click", function () {
    offCanvas.classList.replace("-right-full", "right-0");
});

closeButton.addEventListener("click", function () {
    offCanvas.classList.replace("right-0", "-right-full");
});

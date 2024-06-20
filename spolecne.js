const elmMenu = document.querySelector("#menu-tlacitko")

const elmPolozky = document.getElementById("menu-polozky")
const kriz = elmMenu.querySelector(".fas")

elmMenu.addEventListener("click", () => {
    elmPolozky.classList.toggle("show")
    console.log(elmPolozky.classList.contains("show"))
    if (elmPolozky.classList.contains("show") === true) {
        kriz.classList.add("fa-xmark")
        kriz.classList.remove("fa-bars")
    } else {
        kriz.classList.add("fa-bars")
        kriz.classList.remove("fa-xmark")
     } 
})  
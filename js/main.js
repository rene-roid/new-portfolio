document.querySelector(".burger").addEventListener("click", function () {
    let navBurger = document.querySelector(".nav-bar")

    if (navBurger.style.display === "") navBurger.style.display = "none";

    if (navBurger.style.display === "none") {
        this.classList.toggle("active");
        navBurger.style.display = "block";
    } else {
        navBurger.style.display = "none";
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        }
    }
});

function hide_burger() {
    let navBurger = document.querySelector(".nav-bar")
    let burger = document.querySelector(".burger")

    if (navBurger.style.display === "block") {
        navBurger.style.display = "none";
        burger.classList.remove("active");
    }
}
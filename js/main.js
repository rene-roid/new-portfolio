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

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iteration = [];
let interval = [];

hackeds = document.querySelectorAll("hacked");

hackeds.forEach(hacked => {
    // Get the index of the current element
    let index = Array.prototype.indexOf.call(hackeds, hacked);
    // On mouse over
    hacked.onmouseover = event => {
        // Set the iteration to 0
        console.log(index);
        iteration[index] = 0;
        console.log(iteration);
        // Clear the interval
        clearInterval(interval[index]);
        // Set the interval
        interval[index] = setInterval(() => {
            // Set the inner text to the current value
            event.target.innerText = event.target.innerText
                // Split the text into an array
                .split("")
                // Map each letter
                .map((letter, i) => {
                    // If the index is less than the iteration
                    if (i < iteration[index]) {
                        // Return the original letter
                        console.log("Index: " + index + " Iteration: " + iteration[i])
                        return event.target.dataset.value[i];
                    }
                    // Return a random letter
                    return letters[Math.floor(Math.random() * 26)]
                })
                // Join the array into a string
                .join("");
            // If the iteration is greater than the length of the data-value
            if (iteration[index] >= event.target.dataset.value.length) {
                // Clear the interval
                clearInterval(interval[index]);
            }
            // Increment the iteration
            iteration[index] += 1 / 3;
        }, 30);
    }
});
function NavbarOpenClose() {
    const nav = document.querySelector("nav");

    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

const fade_in = document.querySelector('.fade-in-left');

const options = {
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fade_in.classList.add('animate');
            observer.unobserve(entry.target);
            console.log('fade in');
        }
    });
}, options);

observer.observe(fade_in);

/*==========================================
        SCROLL REVEAL
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.25

});

const cards = document.querySelectorAll(".education-card");

cards.forEach((card) => {

    observer.observe(card);

});

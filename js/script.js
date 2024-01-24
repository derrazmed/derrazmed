document.addEventListener("DOMContentLoaded", function () {
    var backButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backButton.style.display = "block";
        } else {
            backButton.style.display = "none";
        }
    });

    backButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    var backButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backButton.style.display = "block";
        } else {
            backButton.style.display = "none";
        }
    });

    backButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
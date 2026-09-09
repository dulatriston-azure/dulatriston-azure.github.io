const sections = document.querySelectorAll( ".hero, .about-section, .projects-section");

sections.forEach(function(section) {

    section.addEventListener("mouseenter", function() {
        section.classList.add("hovered");
    });

    section.addEventListener("mouseleave", function() {
        section.classList.remove("hovered");
    });

});

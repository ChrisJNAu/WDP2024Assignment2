// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// Call the function on page scroll
window.addEventListener("scroll", onScroll);

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.bottom <= $(window).height()
    );
}

function onScroll() {
    var elements = document.querySelectorAll('.fully-within-viewport');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]; // For each element:
        if (isElementInViewport(element)) {// If it is fully within the viewport
            element.style.opacity = 1; // Change opacity of this element to 1 (visible)
            element.style.transition = "5s ease"; // in 5 seconds
        } else {
            element.style.opacity = 0; // Change opacity to 0 (invisible)
        }
    }
}
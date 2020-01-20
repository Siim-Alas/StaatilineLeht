window.onscroll = function() { stickyFunc() };

let header = document.getElementById("mainHeader");
let navbar = document.getElementById("navigationBar");
let mainContent = document.getElementById("mainContent");

function stickyFunc() {

    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add("sticky");
    }
    if (window.pageYOffset < header.offsetHeight) {
        navbar.classList.remove("sticky");
    }
}

function selectMainContent(selection) {
    let childrenArray = Array.from(mainContent.children);
    childrenArray.forEach(child => child.style.display = (child.id === selection) ? "block" : "none");
}
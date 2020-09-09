
//Set the sction in viewport as active and remove inactive calss from sections not in viewport
const links = document.getElementsByClassName("menu__link");
document.addEventListener('scroll', function () {
const sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
        const pos = sections[i].getBoundingClientRect();
        if (isInViewport(pos) === true) {
            links[i].classList.add("active");
        }
        else {
            links[i].classList.remove("active");
        }

    }

});

//check if an element is in viewport or not
function isInViewport(element) {
    return (
        element.top >= 0 &&
        element.left >= 0 &&
        element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        element.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//make the links scroll to their section rather than jumping to them
const nav = document.getElementById("navbar__list");
nav.addEventListener('click', function (event) {
    event.preventDefault();
    let des = event.target.getAttribute('href');
    const element = document.querySelector(des);
    element.scrollIntoView({
        behavior: "smooth"
    });
});

   

//show the navbar while scrolling and hiding it if user stops scrolling
let timer = null;
window.addEventListener('scroll', function () {
    const navbar = document.querySelector(".page__header");
    if (timer !== null) {
        clearTimeout(timer);
        navbar.style.display = "block";
    }
    timer = setTimeout(function () {
        navbar.style.display = "none";
    }, 3000);
}, false);




// When the user scrolls down 300px from the top of the document, show the button
const topbutton = document.getElementById("topBtn");
window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }

});

// When the user clicks on the button, scroll to the top of the document
topbutton.addEventListener("click", function () {
    document.body.scrollTo({
        top: 0,
        behavior: "smooth"
    }); // For Safari
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"

    }); // For Chrome, Firefox, IE and Opera
});
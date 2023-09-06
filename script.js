// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// HIE BURGER MENU WITH SROLL

const box = document.getElementById("ckbox")

document.addEventListener('scroll', (event) => {
    box.checked = false;
});



// TECHNOLOGY SECTION SWITCH FUNCTION

const sidebars = document.querySelectorAll('.sidebar');
const btns = document.querySelectorAll('.tec-list');
const links = document.querySelectorAll('.tec-link');

const getSidebar = btn => btn.dataset.sidebar;

const hide = el => el.classList.add('hidden');

btns.forEach(btn =>
    btn.addEventListener('click', () => {
        const target = document.getElementById(getSidebar(btn));
        sidebars.forEach(hide);
        target.classList.remove('hidden');
    })
);
let i;
function unselectAll() {
    for (i = 0; i < links.length; i++) {
        links[i].classList.remove("underline-effect");
    }
}

links.forEach(btn => {
    btn.addEventListener('click', function () {
        unselectAll();
        this.classList.add("underline-effect");
    });
});




// SPECIFICATION SECTION SWITCH FUNCTION 

const sidebarsSpec = document.querySelectorAll('.sidebar-spec');
const btnsSpec = document.querySelectorAll('.spec-list');
const linksSpec = document.querySelectorAll('.spec-link');

const getSidebarSpec = btn => btn.dataset.sidebar;

const hideSpec = el => el.classList.add('hiddenn');

btnsSpec.forEach(btn =>
    btn.addEventListener('click', () => {
        const target = document.getElementById(getSidebarSpec(btn));
        sidebarsSpec.forEach(hideSpec);
        target.classList.remove('hiddenn');
    })
);
let iSpec;
function unselectAllToken() {
    for (iSpec = 0; iSpec < linksSpec.length; iSpec++) {
        linksSpec[iSpec].classList.remove("underline-effect");
    }
}

linksSpec.forEach(btn => {
    btn.addEventListener('click', function () {
        unselectAllToken();
        this.classList.add("underline-effect");
    });
});


const dots = document.querySelectorAll('.dot');
const techContainer = document.querySelectorAll('.sidebar')
const scrollDemo = document.querySelector(".sidebars")

function scrollFunction() {
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("activated");
    }
    if (scrollDemo.scrollLeft <= scrollDemo.scrollWidth * 0.18) {
        dots[0].classList.add("activated")
    } else if (scrollDemo.scrollLeft <= scrollDemo.scrollWidth * 0.36) {
        dots[1].classList.add("activated")
    } else if (scrollDemo.scrollLeft <= scrollDemo.scrollWidth * 0.54) {
        dots[2].classList.add("activated")
    } else if (scrollDemo.scrollLeft <= scrollDemo.scrollWidth * 0.72) {
        dots[3].classList.add("activated")
    } else {
        dots[4].classList.add("activated")
    }
}

// FADE-IN

window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('revealed');
        }
        else {
            reveals[i].classList.remove('revealed');
        }
    }
}


// COPY ADRESS


var copyButton = document.getElementById('copy-button');
var textToCopy = document.getElementById('text-to-copy');

copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(textToCopy.textContent)
        .then(function () {
            alert('Token contract copied!');
        })
        .catch(function () {
            alert('Copy failed. Please select the text and copy manually.');
        });
});

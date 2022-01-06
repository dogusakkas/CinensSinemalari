/* ŞUBELERİMİZ */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* ŞUBELERİMİZ */

/* POP-UP */

const modalBtn = document.getElementById("modal-ac");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modal-close");


modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

modalKapat.addEventListener("click", () => {
    modal.style.display = "none";
});

/* POP-UP */
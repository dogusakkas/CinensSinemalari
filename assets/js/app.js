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

/* Up Button */
jQuery(document).ready(function($) {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 200) {
            $('#yukari-cik').fadeOut();
        } else {
            $('#yukari-cik').fadeIn();
        }
    });
    $('#yukari-cik').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});
/* Up Button */
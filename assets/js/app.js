/* Dropdown */

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

/* Dropdown */



/* POP-UP */

const modalBtn = document.getElementById("modal-open");
const modal = document.querySelector(".modal");
const modalCls = document.getElementById("modal-close");


modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

modalCls.addEventListener("click", () => {
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

/* Sinemalar a vs i için css */

$(".navbar .dropdown button").hover(function() {
        $(".navbar .dropdown button i").css("color", "#EDDA3B");
    },
    function() {
        $(".navbar .dropdown button i").css("color", "white");
    });

/* Sinemalar a vs i için css */
/* Movies PopUp */

function toggle() {
    var trailers = document.querySelector(".trailer2")
    var iframe = document.querySelector(".iframe")
    trailers.classList.toggle("active");
    iframe.pause();
    iframe.currentTime = 0;
}


/* Movies PopUp */

/* Movies Dropdown */

function myFunction2() {
    document.getElementById("moviesDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* Movies Dropdown */

/* Youtube ve Fragman için css */

$(".movies .explanation .content .youtube").hover(function() {
        $(".movies .explanation .content .trailer").css("border-bottom", "1px solid black");
    },
    function() {
        $(".movies .explanation .content .trailer").css("border-bottom", "none");
    });

/* Youtube ve Fragman için css */

/* Youtube ve Fragman için css */

$(".movies .explanation .content .trailer").hover(function() {
        $(".movies .explanation .content .youtube").css("background-color", "red");
    },
    function() {
        $(".movies .explanation .content .youtube").css("background-color", "#ccc");
    });

/* Youtube ve Fragman için css */
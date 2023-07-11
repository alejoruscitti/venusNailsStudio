window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.whatsappButton').style.opacity = "1";
        } else {
            document.querySelector('.whatsappButton').style.opacity = "0";
        }
}
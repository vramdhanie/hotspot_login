document.addEventListener("DOMContentLoaded", function(event) {
    let n = 10;
    let timeDisplay;
    let login;
    let overlay;

    function countdown() {
        n--;
        timeDisplay.innerHTML = n;
        if(n > 0){
            window.setTimeout(countdown, 1000);
        } else {
            overlay.style.opacity = '0';
            // overlay.style.opacity = '0';
            // setTimeout(function() {
            //   overlay.remove();
            // }, 3000)
            login.style.opacity = '1';
        }
    }

    timeDisplay = document.getElementById('display_timer');
    login = document.getElementById('login');
    overlay = document.getElementById('counter');

    countdown();
});







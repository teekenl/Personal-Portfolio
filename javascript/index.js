// Delay animation before going to a new url.
function delay(a) {
    var wrapper = document.querySelector('#nav-wrapper');
    var particles = document.getElementById('particles-js');
    wrapper.classList.add("anim");
    particles.style.opacity = 0;
    setTimeout(function () {
        window.location = a;
    }, 600);
}

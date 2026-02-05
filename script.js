alert('You are directed to my profile . Welcome!!');

document.addEventListener('DOMContentLoaded', function () {
    const intro = document.getElementById('intro');
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            intro.classList.add('animate');
        }
    }, { threshold: [0] });

    observer.observe(intro);
});




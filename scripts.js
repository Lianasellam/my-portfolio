document.querySelector('.enter-button a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#section2').scrollIntoView({ behavior: 'smooth' });
});



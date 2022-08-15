const menuBox = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menuBox.addEventListener('click', function() {
    menuBox.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});

document.addEventListener('click', function(e){
    if (e.target.closest('#mobile-menu') || e.target.closest('.navbar__menu') || e.target.closest('.navbar')) return;
    menuBox.classList.remove('is-active');
    menuLink.classList.remove('active');
});
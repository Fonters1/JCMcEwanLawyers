const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbarMenu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});

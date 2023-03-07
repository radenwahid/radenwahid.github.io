//nav

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const scroll = document.querySelector('#scroll');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        scroll.classList.remove('hidden');
        scroll.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        scroll.classList.remove('flex');
        scroll.classList.add('hidden');
    }
};
// ham

const ham = document.querySelector('#ham');
const navMenu = document.querySelector('#nav-menu');
ham.addEventListener('click', function() {
    ham.classList.toggle('ham-active');
    navMenu.classList.toggle('hidden');
});

//click
window.addEventListener('click', function(e) {
    if (e.target != ham && e.target != navMenu) {
        ham.classList.remove('ham-active');
        navMenu.classList.add('hidden');

    }

});

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('#html');
darkToggle.addEventListener('click', function() {
   if (darkToggle.checked) {
    html.classList.add('dark')
   } else {
    html.classList.remove('dark')
   }
});


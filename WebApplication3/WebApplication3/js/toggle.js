burger = document.querySelector('.burger');
myfirstnav = document.querySelector('.myfirstnav');
myfirstnavlist = document.querySelector('.myfirstnavlist');
rightnav = document.querySelector('.myfirstrightnav');
burger.addEventListener('click', () => {
    myfirstnavlist.classList.toggle('v-nav');
    rightnav.classList.toggle('v-nav');
    myfirstnav.classList.toggle('hnav');

})
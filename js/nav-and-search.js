// Nav

const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
});

navLinks.forEach(function (item) {
    item.addEventListener('click', function (){
        navIcon.classList.remove('nav-icon--active');
        nav.classList.remove('nav--active');
    })
});


// Search

const searchForm = document.querySelector('.search');
const seacrhButton = document.querySelector('.search__button');

seacrhButton.addEventListener('click', function (event) {
    if (!searchForm.classList.contains('search--visible')) {
        event.preventDefault();
        searchForm.classList.toggle('search--visible');
    }
});
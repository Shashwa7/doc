//Select element function
const selectElement = element => {
    return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');
const nav_list = selectElement('.nav-list');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
});

nav_list.addEventListener('click', () => {
    body.classList.toggle('open');
});

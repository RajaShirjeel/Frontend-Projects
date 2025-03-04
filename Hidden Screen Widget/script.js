const searchIcon = document.querySelector('.search-icon');
const inputBar = document.querySelector('.input');
console.log(inputBar)

searchIcon.addEventListener('click', () => {
    inputBar.classList.toggle('active');
})
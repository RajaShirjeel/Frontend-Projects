const btnClose = document.getElementById('close');
const btnOpen = document.getElementById('open');
const container = document.querySelector('.container');

btnOpen.addEventListener('click', () => {
    container.classList.add('show-nav')
})

btnClose.addEventListener('click', () => {
    container.classList.remove('show-nav')
})

console.log('hi')
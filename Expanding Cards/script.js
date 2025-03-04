const imageContainer = document.querySelectorAll('.image-container');

const setActive = function(){
    imageContainer.forEach(con => {
        con.classList.remove('active');
        con.querySelector('.text').classList.remove('show');
        
    })
    this.classList.add('active');
    this.querySelector('.text').classList.add('show');
}

imageContainer.forEach(con => {
    con.addEventListener('click', setActive)
})
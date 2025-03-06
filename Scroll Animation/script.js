const containers = document.querySelectorAll('.item');
const BringInView = function(entries){
    entries.forEach(en => {
        if (en.isIntersecting){
            en.target.classList.add('show')
        }
    })
}

const observer = new IntersectionObserver(BringInView, {
    root: null, 
    threshold: 0.1
})


containers.forEach((item, ind) => {
    observer.observe(item)
})



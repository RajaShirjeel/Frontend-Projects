const containers = document.querySelectorAll('.item');
const BringInView = function(entries){
    const [entry] = entries;
    console.log(entry)
    // if (!entry.isIntersecting) return;
    entry.target.style.transform = `translateX(${0}%)`
    
}

const observer = new IntersectionObserver(BringInView, {
    root: null, 
    threshold: 0.1
})


containers.forEach((item, ind) => {
    observer.observe(item)
    console.log(item, ind)
    if (ind % 2 == 0){
        item.style.transform = `translateX(${-100}%)`
    }
    else{
        item.style.transform = `translateX(${100}%)`

    }
})



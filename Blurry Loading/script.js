const bg = document.querySelector('.bg');
const text = document.querySelector('.text');

let load = 0;


const blurring = function(){
    load++;
    if (load > 99){
        clearInterval(res);
    }
    text.textContent = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const res = setInterval(blurring, 30);



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
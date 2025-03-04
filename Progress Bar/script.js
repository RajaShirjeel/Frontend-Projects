const progressBars = document.querySelectorAll('.progress__bar--container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
console.log(progressBars.length)

let progress = 1;

const addProgress = function(){
    if (progress >= progressBars.length) return;
    prevBtn.classList.remove('disabled');
    const bar = progressBars[progress];
    bar.classList.add('filled');
    bar.children[0].classList.add('active');
    progress++;
    if (progress >= progressBars.length) nextBtn.classList.add('disabled');
}

const removeProgress = function(){
    if (progress == 1) return;
    nextBtn.classList.remove('disabled');
    const bar = progressBars[progress-1];
    bar.classList.remove('filled');
    bar.children[0].classList.remove('active');
    progress--;
    if (progress === 1) prevBtn.classList.add('disabled');
}

nextBtn.addEventListener('click', addProgress);
prevBtn.addEventListener('click', removeProgress);
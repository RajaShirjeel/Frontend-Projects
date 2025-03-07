const backgrounds = document.querySelectorAll('.bg');

const makeActive = function(e){
    const el = e.target.closest('.bg');
    if (!el) return;
    el.classList.add('expanded');
}

const disable = function(e){
    const el = e.target.closest('.bg');
    if (!el) return;
    el.classList.remove('expanded');
}

backgrounds.forEach(bg => {
    bg.addEventListener('mouseover', makeActive);
    bg.addEventListener('mouseout', disable);
})

const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.pass-input');
const emailSpans = document.querySelectorAll('.email-span');
const passSpans = document.querySelectorAll('.password-span');

emailInput.addEventListener('focus', (e) => {
    if (emailInput.value) return;
    emailSpans.forEach((sp, i) => {
        setTimeout(() => {
            sp.classList.remove('below');
        }, 100 + i*100)
    })
})

emailInput.addEventListener('blur', (e) => {
    if (emailInput.value) return;
    emailSpans.forEach((sp, i) => {
        setTimeout(() => {
            sp.classList.add('below');
        }, 100 + i*100)
    })
})

passInput.addEventListener('focus', (e) => {
    if (passInput.value) return;
    passSpans.forEach((sp, i) => {
        setTimeout(() => {
            sp.classList.remove('below');
        }, 100 + i*100)
    })
})

passInput.addEventListener('blur', (e) => {
    if (passInput.value) return;
    passSpans.forEach((sp, i) => {
        setTimeout(() => {
            sp.classList.add('below');
        }, 100 + i*100)
    })
})

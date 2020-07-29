
document.querySelector('#hambur-icon').addEventListener('click', () => {
    console.log('click')
    document.querySelector('.header__menu__hambur').classList.toggle('show')
})


document.querySelector('#closed-icon').addEventListener('click', () => {
    document.querySelector('.header__menu__hambur').classList.toggle('show')
})
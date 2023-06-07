const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


let body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'white';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    let scroll = window.pageYOffset;
    if (scroll < 1200) {
        // Clappy
        body.style.backgroundColor = '#b6dff5';
    } else if (scroll >= 1200 && scroll < 2000) {
        // Hakuna
        body.style.backgroundColor = '#ca2729';
    } else if (scroll >= 2000 && scroll < 2800) {
        // Tinyhouse
        body.style.backgroundColor = '#00c56f';
    } else if (scroll >= 3600 && scroll < 4400) {
        // Tinyhouse 2
        body.style.backgroundColor = '#c50000';
    } else if (scroll >= 4400 && scroll < 5200) {
        // Tinyhouse 3
        body.style.backgroundColor = '#32bf43';
    } else if (scroll >= 5200 && scroll < 6000){
        // Red Fuel
        body.style.backgroundColor = '#2d4280';
    }
}
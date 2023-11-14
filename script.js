
function toggleTab(event, tabName) {
    let tablinks = document.getElementsByClassName('products__navbar__item')
    let tabs = document.getElementsByClassName('product')

    for(let i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove('products__navbar__item_active')
    }

    for(let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove('product_active')
    }

    event.target.classList.add('products__navbar__item_active')
    document.getElementById(tabName).classList.add('product_active')
}

function toggleNav(event) {
    let nav = document.querySelector('.header__navbar')
    event.target.classList.toggle('burger-menu_open')

    nav.classList.toggle('header__navbar_open')
}
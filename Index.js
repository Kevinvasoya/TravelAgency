let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
}

let loginForm = document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    navbar.classList.remove('active')

}

let searchForm  = document.querySelector('.search-Form')
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active')
    loginForm.classList.remove('active')
 navbar.classList.remove('active')
}



window.onscroll = () =>{
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
    navbar.classList.remove('active')
}















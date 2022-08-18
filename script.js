let ham = document.querySelector('.hamburger');
let navbar = document.querySelector('.nav-bar');
let menu = document.querySelector('.pop-menu')

ham.onclick = () =>{
    menu.classList.toggle('active');//changes the 3 bars to an X
    // navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('active');//changes the X bars to an 3 when scrolling

}
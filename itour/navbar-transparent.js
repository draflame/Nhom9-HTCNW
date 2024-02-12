const navEl= document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    let width=window.innerWidth;
    if (window.scrollY >= 500&&width>=1280) {
        navEl.classList.add('navbar-scrolled');
    }
    else if(window.scrollY>=56&&width<1280){
        navEl.classList.add('navbar-scrolled');
    }
    else {
        navEl.classList.remove('navbar-scrolled');
    }
});

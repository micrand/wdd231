let hamburgerMenu = document.getElementById('hamburger-menu');
hamburgerMenu.addEventListener( 'click', () => {
    let navigationMenu = document.querySelector('.navigation');
    if(navigationMenu.style.display == 'block')
    {
        navigationMenu.style.display = 'none';
    } else {
        navigationMenu.style.display = 'block';
    }
    
});
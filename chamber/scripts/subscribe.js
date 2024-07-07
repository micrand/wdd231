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



let formData = document.getElementById('form-subscription-data');

const subscriptionDataUrl = location.href;

console.log(subscriptionDataUrl);



/* Handle Benefits modal */
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function ShowModal() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
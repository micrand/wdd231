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


let timestampDate = document.getElementById('timestamp');
// if(timestampData.value){
//     timestampDate.value = Date.now();
// }


let formDataContent = document.getElementById('form-subscription-data');

const subscriptionDataUrl = location.href;

let data = subscriptionDataUrl.split("?");
let userData = data[1].split("&");

let userItemHTML = '';
userData.forEach( (item)=>{ 
    let itemData = item.split("=");
    let fieldLabel = itemData[0].toUpperCase();
    let fieldValue = itemData[1];
    if(itemData[0]!='submit-subscription') {
        userItemHTML += `<div class="form-group"><span>${fieldLabel}</span>: <strong>${fieldValue}</strong></div>`;        
    }
    
});
formDataContent.innerHTML += userItemHTML;


/* Handle Benefits modal */
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function ShowModal() {
  modal.style.display = "block";
}
if(span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
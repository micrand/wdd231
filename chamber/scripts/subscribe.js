let timestampDate = document.getElementById('timestamp');
timestampDate.value = Date.now();


var elements = document.getElementsByClassName("help");
var triggerModalFunction = function() {
    let currentBenefit = this.getAttribute("rel");    
    let currentPrice = this.getAttribute("data-price");    
    ShowModal(currentBenefit, currentPrice);
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', triggerModalFunction, false);
}

/* Handle Benefits modal */
var modal = document.getElementById("benefit-modal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function ShowModal(b, p) {
    modal.style.display = "block";
    console.log(b, p);
    let modalBenefit = document.querySelector('.benefit-offer');
    let modalBenefitPrice = document.querySelector('.benefit-price');
    modalBenefit.textContent = b;
    modalBenefitPrice.textContent = p;
    
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
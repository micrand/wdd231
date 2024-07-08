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
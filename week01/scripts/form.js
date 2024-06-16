// footer dynamic dates
const d = new Date();
let currentYear = d.getFullYear();
let outputFullYear = document.querySelector('#current-year');
let outputLastModified = document.querySelector('#last-modified');
let lastModifiedDate = document.lastModified;

outputFullYear.innerHTML = `${currentYear}`;
outputLastModified.innerHTML = `${lastModifiedDate}`;

// product data arrays
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// constants
const productList = document.querySelector("#product-id");
let numVisited = Number(window.localStorage.getItem("number-visited")) || 0;
numVisited++;

// add product options
loadProductOptions();

function loadProductOptions(){
    if(productList){
        products.forEach(product => {
            let option = document.createElement("option");
            option.textContent = product.name;
            option.value = product.id;
            
            productList.appendChild(option);
        });
    }
}

/* review */
const getReviewsCounter = () => {
    return localStorage.getItem("reviews-count");
}

const setReviewsCounter = () => {
    numReviews++;
    localStorage.setItem("reviews-count", numReviews);
}

let numReviews = Number(getReviewsCounter()) || 0;
const blockNumReviews = document.querySelector("#num-reviews");



let submitButton = document.getElementById('product-review-form-button');
if( submitButton ) {
  submitButton.addEventListener( 'click', function() {
    let productID = document.getElementById('product-id');  
    let productName = document.querySelector('input[name=stars]');
    let productDate = document.getElementById('installation-date');
    let feature1 = document.getElementById('design');
    let feature2 = document.getElementById('durability');
    let feature3 = document.getElementById('ease-use');
    let feature4 = document.getElementById('performance');  

    let review = document.getElementById('review');  
    let name = document.getElementById('username');

    let pid = productID.value;
    let pname = productName.value;
    let dinstall = productDate.value;
    let design = feature1.value;
    let durability = feature2.value;
    let easeUse = feature3.value;
    let performance = feature4.value;
    let preview = review.value;
    let userName = name.value;

    localStorage.setItem( 'product_review_id', pid );
    localStorage.setItem( 'product_name', pname );
    localStorage.setItem( 'product_date_install', dinstall );
    localStorage.setItem( 'product_feature_design', design );
    localStorage.setItem( 'product_feature_durability', durability );
    localStorage.setItem( 'product_feature_ease_use', easeUse );
    localStorage.setItem( 'product_feature_performance', performance );
    localStorage.setItem( 'product_review', preview );
    localStorage.setItem( 'product_user_name', userName );  

  });
}

let productIdLS = localStorage.getItem('product_review_id');
let productNameLS = localStorage.getItem('product_name');
let productDateLS = localStorage.getItem('product_date_install');
let productFetureDesignLS = localStorage.getItem('product_feature_design');
let productFetureDurabilityLS = localStorage.getItem('product_feature_durability');
let productFetureEaseLS = localStorage.getItem('product_feature_ease_use');
let productFeturePerformanceLS = localStorage.getItem('product_feature_performance');
let productReviewLS = localStorage.getItem('product_review');
let productUserNameLS = localStorage.getItem('product_user_name');

let displayBlock = document.getElementById('display-data');

if( productIdLS ) 
{  
  displayBlock.appendChild(`Product Id = ${productIdLS}`);
}
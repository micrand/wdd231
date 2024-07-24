const d = new Date();
let currentYear = d.getFullYear();
let outputFullYear = document.querySelector('#currentyear');
let outputLastModified = document.querySelector('#lastmodified');
let lastModifiedDate = document.lastModified;

outputFullYear.innerHTML = `${currentYear}`;
outputLastModified.innerHTML = `${lastModifiedDate}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//URL TO REPLACE ON PROD
const testimonialUrl = '/wdd231/final/data/testimonial.json';
const newsApiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json';

async function testimonialFetch() {
	console.log(" before fetch ");
	try {

		const response = await fetch(testimonialUrl);

		if(!response.ok){
			throw new Exception( `Response status: ${response.status}` );
		}

		const testimonialDataJson = await response.json();

		const testimonialBlock = document.querySelector('#testimonials');

		let testimonialHTML = '';
		let count = '';

		testimonialDataJson.forEach( (customer) => {

			count++;
			if(count<=2) {
				testimonialHTML +=`<li><img src="${customer.avatar}" alt="${customer.name}" />`;
				testimonialHTML +=`<p>"${customer.message}"</p>`;
				testimonialHTML +=`<span>${customer.name}, ${customer.designation}</span></li>`;
			}
		});

		testimonialBlock.innerHTML = testimonialHTML;
	}
	catch(error){

	}


}

async function fetchNewsApi() {
	
	let newsItemHtml = '';
	
	try {
		let response = await fetch(newsApiUrl);	
		// let jsonData = response.json();
		if(!response.ok){
			throw new Exception( `Error status code ${response.error}` );
		}

		let newsData = await response.json();
		let newsNumbers = newsData.totalResults;
		let newsArticles = newsData.articles;

		let newsBlockList = document.getElementById('news-list');

		let counter = 0;
		newsArticles.forEach( (item)=>{			
			counter++;
			if (counter <= 20 ) {
				newsItemHtml += `<div class="row">
								<div class="blog-row">
									<img src="${item.urlToImage}" alt="${item.title}" width="371" />
									<div>
										<h4>${item.title}</h4>
										<p>${item.description}</p>
									</div>
								</div>
							</div>`;
							}
			}
			
		);
	newsBlockList.innerHTML = newsItemHtml;
			
	}
	catch(error){

	}
}

const sendContactForm = () => {

	let firstName = document.getElementById('firstname');
	let lastName = document.getElementById('lastname');
	let emailAddress = document.getElementById('email');
	let subject = document.getElementById('subject');
	let content = document.getElementById('content');
	let company = document.getElementById('company');
	let projectType = document.getElementById('project-type');

	let formBlock = document.getElementById('form-content');
	
	if( subject.value != "" ){

		let confirmBlock = document.createElement('div');


		let confirmBlockHTML = `<div class="form-confirmation">`;
		confirmBlockHTML += `<h4>Thank you for your contact.</h4>`;
		confirmBlockHTML += `We received your information:<br><br>`;
		confirmBlockHTML += `Name: ${firstName.value}<br>`;
		confirmBlockHTML += `Last name: ${lastName.value}<br>`;
		confirmBlockHTML += `Email: ${emailAddress.value}<br>`;
		confirmBlockHTML += `Subject: ${subject.value}<br>`;
		confirmBlockHTML += `Content: ${content.value}<br><br>`;
		confirmBlockHTML += `Company: ${company.value}<br><br>`;
		confirmBlockHTML += `Project Type: ${projectType.value}<br><br>`;
		confirmBlockHTML += `We will be back to you later!<br>`;
		confirmBlockHTML += `Makerdia Team`;
		confirmBlockHTML += `</div>`;

		confirmBlock.setAttribute( 'class', 'form-confirmation' );
		console.dir( confirmBlockHTML );

		formBlock.innerHTML = confirmBlockHTML ;
		
	}


}

let sendContact = document.getElementById('send-contact');
if(sendContact) {
	sendContact.addEventListener( 'click', (e)=>{
		e.preventDefault();
		sendContactForm();
	});

	let subject = document.getElementById('subject');
	subject.addEventListener('change', (e)=>{
		let currentValue = e.target.value;
		if( currentValue == 'enquiry' || currentValue == 'launch' ) {
			document.getElementById('quotation').style.display = 'block';
		}else{
			document.getElementById('quotation').style.display = 'none';
		}
	})
}

let newsletterButton = document.getElementById('subscribe-newsletter');

let currentStoredSubscription = localStorage.getItem( 'mkd_newsletter_subscribed' );


console.log( "cur: " + currentStoredSubscription)
if( newsletterButton ) {

	let newsletterForm = document.querySelector('.newsletter-form');
	let newsletterWrapper = document.getElementById('newsletter-wrapper');

	if( currentStoredSubscription !== null ) {

		
		// newsletterForm.style.display = 'none';
		let currentEmailSubscription = localStorage.getItem( 'mkd_newsletter_email' );

		if(currentEmailSubscription != "") {			
			newsletterWrapper.innerHTML = `<div class="newsletter-message bg-primary">You are now subscribed with the email:<br> ${currentEmailSubscription}`;
			newsletterWrapper.innerHTML += `<span class="reset-newsletter" id="reset-newsletter">Reset subscription</span></div>`;
		}	

	}	

	let resetNewsletter = document.getElementById('reset-newsletter');
	if( resetNewsletter ) {

		resetNewsletter.addEventListener( 'click', function(){

			var confirmReset = confirm("Are you sure to reset your subscription?");

			if(confirmReset){
				localStorage.removeItem( 'mkd_newsletter_subscribed' );
				localStorage.removeItem( 'mkd_newsletter_email' );
				localStorage.clear();
				newsletterForm.style.display = 'block';
				// resetNewsletter.remove();
			}
			

		});
	}

}




if(newsletterButton){
	newsletterButton.addEventListener('click', function(e){
		e.preventDefault();
		let newEmailSubscription = document.getElementById('newsletter');

		if(newEmailSubscription.value!=""){

			localStorage.setItem( 'mkd_newsletter_subscribed', true );
			localStorage.setItem( 'mkd_newsletter_email', newEmailSubscription.value );		
			let textSubscription = document.querySelector('.text-subscription');
			textSubscription.innerHTML = "Thank you for your subscription!";
		}
		

	});
}

window.onload = function(){

	testimonialFetch();
	let currentPage = location.pathname;
	
	if( currentPage == '/final/blog.html' )
	{
		fetchNewsApi();
	}
	
};
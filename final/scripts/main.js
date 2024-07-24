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
const testimonialUrl = '/final/data/testimonial.json';
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

	console.log( subject.value );

	if(!subject.value){
		console.log( "return error!!!");
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


window.onload = function(){

	testimonialFetch();
	let currentPage = location.pathname;
	
	if( currentPage == '/final/blog.html' )
	{
		fetchNewsApi();
	}
	
};
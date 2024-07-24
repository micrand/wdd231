const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const testimonialUrl = 'http://127.0.0.1:5500/final/data/testimonial.json';
const newsApiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json';

async function testimonialFetch() {

	try {

		const response = await fetch(testimonialUrl);

		if(!response.ok){
			throw new Exception( `Response status: ${response.status}` );
		}

		const testimonialDataJson = await response.json();

		const testimonialBlock = document.querySelector('#testimonials');

		const testimonialHTML = '';

		testimonialDataJson.forEach( (customer) => {

			//console.log( customer );

			testimonialHTML +=`<li><img src="${projectUrl}" alt="" />`;
			testimonialHTML +=`<p>"Neque nisidapibus mattis"</p>`;
			testimonialHTML +=`<span>Jane Doe, CEO of UntitledCorp</span></li>`;
			testimonialBlock.appendChild(testimonialHTML);

		});

		

		//testimonialBlock.innerHTML = testimonialHTML;



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


	
}

let sendContact = document.getElementById('send-contact');
if(sendContact) {
	sendContact.addEventListener( 'click', (e)=>{
		e.preventDefault();
		console.log( "yes submitted");
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


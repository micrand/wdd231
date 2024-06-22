const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');


async function getProphetData() {
	const response = await fetch(url);
	const data = await response.json();
	// console.table(data.prophets);
	displayProphets(data.prophets);
}


const displayProphets = (prophets) => {

	prophets.forEach( (prophet) => {

		let card = document.createElement('section');
		let fullName = document.createElement('h2');
		let fullNameText = `${prophet.lastname} ${prophet.name}`;
		let altText = `Portrait of ${fullNameText}`;
		let portrait = document.createElement('img');

		fullName.textContent = fullNameText;
		portrait.setAttribute('src', prophet.imageurl);
		portrait.setAttribute('alt', altText);
		portrait.setAttribute('loading', 'lazy');
		portrait.setAttribute('width', '340');
		portrait.setAttribute('height', '440');

		card.appendChild(fullName);
		card.appendChild(portrait);

	});

}
getProphetData();
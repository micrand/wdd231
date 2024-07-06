let gridButton = document.getElementById('grid-button');
let listButton = document.getElementById('list-button');
let gallery = document.querySelector('article.directory');

function showList() {
    gallery.classList.add("list");
    gallery.classList.remove("grid");
}

function showGrid() {
    gallery.classList.add("grid");
    gallery.classList.remove("list");
}


gridButton.addEventListener( 'click', () => {
    showGrid();    
});

listButton.addEventListener( 'click', () => {
    showList();
});


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


async function fetchData() {

    const dataUrl = 'http://127.0.0.1:5500/chamber/data/members.json';

    try {

        const response = await fetch(dataUrl);
        if(!response.ok){
            throw new Exception( `Response status: ${response.status}` );
        }

        const jsonData = await response.json();
        const directory = document.querySelector('.directory');
        let htmlMemberItem = '';                
        
        jsonData.forEach( (member)=>{
            htmlMemberItem+='<section>';
            htmlMemberItem+=`<img src="${member.photourl}" alt="${member.firstname} ${member.lastname}" />`;
            htmlMemberItem+=`<h3>${member.firstname} ${member.lastname}</h3>`;
			htmlMemberItem+=`<p>${member.address.city}</p>`;
			htmlMemberItem+=`<a href="https://${member.website}" target="_blank" class="more">Details</a>`;
            htmlMemberItem+='</section>';            
            directory.innerHTML = htmlMemberItem;                        
        });

    }
    catch( error ) {

    }
}


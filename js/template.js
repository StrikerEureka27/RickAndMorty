const templateCard = document.getElementById('card1');
const templateCardPromise = document.getElementById('card2');
const templateCardAsync = document.getElementById('card3');





const sendTemplate = (object, i, typecall) => {
    const card = document.createElement('div');

    card.innerHTML = `
        <div class="card">
            <img src="${object[i].image}" class="card-img-top" alt=" Fallo al cargar la imagen ${object[i].id}">
            <div class="card-body">
                <h5 class="card-title">${object[i].name}</h5>
                <p class="card-text"> Origin: ${object[i].id}</p>
                <p class="${object[i].status.toLowerCase()} card-text"> Status: ${object[i].status}</p> 
            </div>
        </div>
    `
    if (typecall===1) return templateCard.appendChild(card);
    
    if (typecall===2) return templateCardPromise.appendChild(card);

    if(typecall===3) return templateCardAsync.appendChild(card);


}


export { sendTemplate };



const templateCard = document.getElementById('card');
const templateCardPromise = document.getElementById('card2');


const sendTemplate = (object, i, typecall) => {
    const card = document.createElement('div');

    card.innerHTML = `
    <div class="card border">
        <img src="${object[i].image}" class="card-img-top" alt=" Fallo al cargar la imagen ${object[i].id}">
        <div class="card-body">
            <h5 class="card-title">${object[i].name}</h5>
            <p class="card-text"> Origin: ${object[i].id}</p>
            <p class="card-text"> Status: ${object[i].status}</p>
        </div>
    </div>
    `
    if (typecall===1){
        templateCard.appendChild(card);
    }
    
    if (typecall===2){
        templateCardPromise.appendChild(card);
    }
     
}


export { sendTemplate };



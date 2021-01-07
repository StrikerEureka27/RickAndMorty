const templateCard = document.getElementById('card');
const templateCard2 = document.getElementById('cardTest');



const sendTemplate2 = (object, i) => {
    const card = document.createElement('div');
    //card.classList.add('card')

    card.innerHTML = `
    <div class="test border">
        <img src="${object[i].image}" class="card-img-top" alt=" Fallo al cargar la imagen ${object[i].id}">
        <div class="card-body">
            <h5 class="card-title"> Name: ${object[i].name}</h5>
            <p class="card-text"> Origin: ${object[i].id}</p>
            <p class="card-text"> Status: ${object[i].status}</p>
        </div>
    </div>
    `
    templateCard2.appendChild(card);
}




const sendTemplate = ( object, i ) => {
    templateCard.innerHTML +=  `
    <div class="card" style="width: 18rem;">
        <img src="${object[i].image}" class="card-img-top" alt=" Fallo al cargar la imagen ${object[i].id}">
        <div class="card-body">
            <h5 class="card-title"> Name: ${object[i].name}</h5>
            <p class="card-text"> Origin: ${object[i].id}</p>
            <p class="card-text"> Status: ${object[i].status}</p>
        </div>
    </div>`;
}

export { sendTemplate, sendTemplate2 };



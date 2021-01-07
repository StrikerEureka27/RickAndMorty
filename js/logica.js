import { sendDataWithCallback, sendDataWithPromises } from './sendData.js';
import {sendTemplate } from './template.js';

const API = 'https://rickandmortyapi.com/api/character/';
const character = [];
const MAXCHARACTER = 5;


const obtainRickAndMortyData = (i) => {
    sendDataWithCallback(API, (err1, data1)=>{
        if(err1) return console.error(err1) 
          sendDataWithCallback(`${API}${data1.results[i].id}`, (err2, data2)=>{
            if(err2) return console.error(err2)
             objectToArray(i, data1);
             sendTemplate(objectToArray(), i, 1);
          })
    })
}


const obtainRickAndMortyData2 = (i) =>{
    sendDataWithPromises(API)
    .then( object =>{
        sendTemplate(objectToArray(i, object),i, 2);
    })
    .catch( error =>{
        console.error(error);
    })
}


const objectToArray = (i, data) => {
    character[i] = data;   
    var mapCharacter = character.map( (object, iterator) =>{
        let characterObject = {
            id: object.results[iterator].origin.name, 
            name: object.results[iterator].name,
            status: object.results[iterator].status,
            image: object.results[iterator].image
        }
        return characterObject;
     })
     return mapCharacter;
}





for(let i=0; i<MAXCHARACTER; i++){
    obtainRickAndMortyData(i);
}

for(let i=5; i<10; i++){
    obtainRickAndMortyData2(i);
}






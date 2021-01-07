import { sendDataWithCallback } from './module.js';
import {sendTemplate, sendTemplate2 } from './template.js';

const API = 'https://rickandmortyapi.com/api/character/';
const character = [];


const obtainRickAndMortyData = (i) => {
    sendDataWithCallback(API, (err1, data1)=>{
        if(err1) return console.error(err1) 
          sendDataWithCallback(`${API}${data1.results[i].id}`, (err2, data2)=>{
            if(err2) return console.error(err2)
            character[i] = data1;
            var mapCharacter = character.map( (object, iterator ) =>{
                let characterObject = {
                    id: object.results[iterator].origin.name, 
                    name: object.results[iterator].name,
                    status: object.results[iterator].status,
                    image: object.results[iterator].image
                }
                return characterObject;
                
             })
             sendTemplate2(mapCharacter, i);
             //sendTemplate(mapCharacter, i);
          })
    })
}

for(let i=0; i<5; i++){
    obtainRickAndMortyData(i);
}






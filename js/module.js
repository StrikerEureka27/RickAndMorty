


const sendDataWithCallback = (url_api, callback) =>{
    var xml = new XMLHttpRequest();
    xml.open('GET', url_api, true);
    xml.onreadystatechange = event => {
            if(xml.readyState === 4){ // Si se completo la operacion 
                if(xml.status===200){
                    callback(null, JSON.parse(xml.responseText)); 
                }else{
                    const error = new Error('Error' + url_api);
                    return callback(error, null);
                }
            }
        }
    xml.send();    
    }


    

export { sendDataWithCallback };


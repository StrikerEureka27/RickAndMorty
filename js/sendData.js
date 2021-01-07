


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

const sendDataWithPromises = url_api => {
    return new Promise((resolve, reject) =>{
        try {
            var xml2 = new XMLHttpRequest();
            xml2.open('GET', url_api, true);
            xml2.onreadystatechange = event =>{
                if(xml2.readyState === 4){
                    if(xml2.status === 200){
                        resolve(JSON.parse(xml2.responseText)); 
                    }
                }
            }
        } catch (error) {
            const msmError = new Error(error + url_api);
            reject(msmError);
        }
        xml2.send();
    })
}


    

export { sendDataWithCallback, sendDataWithPromises };


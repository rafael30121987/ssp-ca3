
const url = 'condominium.json'
let data = '';

const localData = localStorage
.getItem('temp');
console.log(localData);

if(!localData){
    myJson();
    console.log('saved to local storage');
}else{
    console.log(localData)
    data = JSON.parse(localData);
    console.log(data)
}

function myJson(){
    fetch(url)
    .then(rep => rep.json())
    .then(json => {
        data = JSON.parse(json);
        console.log(data);
    })
}
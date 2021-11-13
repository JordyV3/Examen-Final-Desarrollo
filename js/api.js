const API_URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
  if (this.readyState === 4 && this.status === 200) {
    
    const data = JSON.parse(this.response);
    console.log(data);
  }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/`);
xhr.send();
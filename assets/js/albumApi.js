const API = "https://rickandmortyapi.com/api/character";


const getData = (api) => {

    return fetch (api)
    .then((response) => response.json())
    .then((json) => { 

    fillData(json); 
    })
.catch((error) => {
    console.log("Error", error); 
});
}

const fillData = (data) => { 
let html = ""; 
data.results.forEach((cc) => { 

    html += ' <div class="col">'; 
    html += '<div class="card h-100">';
    html += `<img src="${cc.image}" class="card-img-top" alt="${cc.name}"></img>`; 
    html += '<div class="card-body">';
    html += `<h5 class="card-title"> ${cc.name} </h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";



});

document.getElementById("dataAlbum").innerHTML = html; 
};



getData(API);
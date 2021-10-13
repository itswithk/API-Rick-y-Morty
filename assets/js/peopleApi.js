// URL API - http que vamos a consumir.
const API = "https://jsonplaceholder.typicode.com/users";
const btnSearch = document.getElementById("btnSearch");

//Obtener los resultados de la API.
//Consumir API -
const getData = (api) => {
  // fetch es el request, es decir, el GET que trae la información de la API.
  // Parámetro (api) tiene la URL, que a su vez contiene el JSON con el array.
  // Return para que retome lo que respondió la petición.
  // pedir (get) (get trae lo de la URL) y responde.
  return (
    fetch(api)
      //promesas
      //Nos promete traernos lo que tenga la API.
      .then((response) => response.json())
      .then((json) => { //ENVÍA LOS DATOS A LA FUNCIÓN FILLDATA
        //console.log(json); 

        fillData(json);
      })
      .catch((error) => {
          console.log("Error in the API", error);
      })
  );
};

//Tomar los datos de las personas (10json) y dibujarlos en una card.
//Llenar datos al recibir los mismos.
const fillData = (json) => { //recibiendo datos.
    let html = ""; //primer paso para guardar la información

    json.forEach(pp => { //forEach: recorrer un array rapidamente. PP: abreviatura (people): guarda cada item que recorre el forEach.
        //concatena los datos a la variable para mostrarlos cuando sean invocados.
        html += ' <div class="col">'; //+= se le está agregando cada valor a la variable.
        html += '<div class="card h-100">';
        html += '<div class="card-body">';
        html += `<h5 class="card-title"> ${pp.name} </h5>">`;
        html += `<p class="card-text"> ${pp.email}</p>`;
        html += `<p class="card-text">Episodes: ${pp.phone}</p>`;
        html += `<p class="card-text"> <a  href="${pp.website}" target="_blank">Web personal</a></p>`;
        html += '<div class="card-footer">';
        html += `<small class="text-muted"> ${pp.address.suite}</small>`

        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });

    document.getElementById("dataPeople").innerHTML = html; //Insertar cards desde JS. InnerHTML escribir en el HTML lo que se encuentre en la variable html.
}

btnSearch.onclick = function () {
  //Un parámetro recibe un valor - variables.
  //Se ejecuta la API.
  getData(API);
};

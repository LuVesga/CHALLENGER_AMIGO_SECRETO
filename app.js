// seleccionar un elemento del codigo htlm
const inputAmigo = document.getElementById("amigo");
//variable para guardar los nombres de los amigos (muchos nombres), por lo que seria una lista (arreglos)
const listaAmigos = [];
// mostrar los nombre visualmente en la interfaz
const ulListaAmigos = document.getElementById("listaAmigos");
// mostrar el nombre del amigo secreto}
const ulResultado = document.getElementById("resultado");

// añadir nombre a la lista de amigos
// crea una funcion
function agregarAmigo() {
    if(inputAmigo.value == ""){
        alert("error: debes ingresar un nombre");
    };
    listaAmigos.push(inputAmigo.value);
    //innerHTML espera que insertes codigo html - il = lista
    ulListaAmigos.innerHTML += `<li> ${inputAmigo.value}</li>`;
};

//crear una funcion para sortear los nombres
function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    //en el html se va ha colocar el nombre del amigo seleccionado
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}



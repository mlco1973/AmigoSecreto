// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres=[] // guarda el listado de nombres que se ingresen
let botonSorteo=false // para poder identificar el fin del juego y reiniciar boton y datos

// funcion que va revisando los nombres y los agrega a la pagina web
function agregarAmigo() {
    
    // funcion validaIngreso revisa que el nombre se haya ingresado bien antes de agregarlo al concurso 
    if (validaIngreso(document.getElementById('amigo').value)===true) {

        listaNombres.push(document.getElementById('amigo').value);
               
        console.log(listaNombres);
        
        AgregaNombre(listaNombres[listaNombres.length-1])
        
        limpiaNombre();
        return;
    }
}

// Funcion que limpia el cuadro despues de ingresar un  nombre 
function limpiaNombre() {
    document.getElementById('amigo').value='';
}

// Funcion que valida que se ingreses valores de nombres correctos osea sin numeros ni caracteres especiales ni en blanco
function validaIngreso(valorIngresado) {
    
    const regex = /^[A-Za-z\s]+$/;
    let resultado = true 

    // valida que no se ingresen campos en blanco
    if (valorIngresado==="") {

        alert('debes ingresar un nombre valido');
        resultado=false;

    // valida que los valores sean letras y no numeros o caracteres especiales
    } else if (regex.test(valorIngresado)===false) {

        alert('debes ingresar un valor como texto sin caractrese especiales o numeros') ;
        limpiaNombre()
        resultado=false;

    // revisa que el nombre no este repetido. SI hay 2 personas con mismo nombre, deben poder identificarlas
    }  else if (listaNombres.includes(valorIngresado)) {

        alert('Este nombre ya esta ingresado. Debe agregar algun texto diferenciador si se trata de otra persona.') ;
        resultado=false;

    }
    
    return resultado;
}

// funcion que genera el sorteo
function sortearAmigo() {
  
    if (botonSorteo===true) {
        ReiniciaJuego()
    } else {

    let numGanador =  Math.floor(Math.random()*listaNombres.length)+1;  
    let nombreGanador = listaNombres[numGanador-1]

    console.log (numGanador)

    AgregaNombre('*****************************************************')
    AgregaNombre(`El amigo secreto ganador es : ${nombreGanador}`)
    AgregaNombre('*****************************************************')
    AgregaNombre('Selecciona nuevamente el Boton del sorteo para reiniciar el juego')

    botonSorteo=true
    
    }
  
}

// Agrega un nombre a la pagina web
function AgregaNombre(nuevoAmigo) {
 
    let li=document.createElement("li");
    li.textContent=nuevoAmigo
    document.getElementById("listaAmigos").appendChild(li)

}

// Reinicia el juego para volver a jugar
function ReiniciaJuego() {
    
    document.querySelector('ul').innerHTML=''
    botonSorteo=false
    listaNombres=[]
} 

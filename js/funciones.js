// Jordy Alexander Vega Aldana 1190-18-9769

// Funcion declarativa
function funcionDeclarativa(nombre) {
	return alert(`Hola este es una funcion declarativa`);
}

// Funcion expresiva
const funcionExpresiva = function(nombre){
  return alert(`Hola este es una funcion expresiva`)
}

// ----Qué es el scope en JavaScript----
// Variable global
function variables() {
  variableGlobal = 'Esto es una variable global'
}

variables();
console.log(variableGlobal);

// Variable Local
function variable(){
  var variableLocal = variableGlobal = 'Variable Global';
}
variable();

console.log(variableGlobal);

//coerción implícita 
let var1;
if (var1) {
  console.log('Hola mundo!!');
}

let var2 = 100;
if (var2) {
  console.log('Hello World!!');
}

// Funciones anonimas 
const coheteEspacial = function(){
  return alert('Despegue! 🚀🚀🚀');
}
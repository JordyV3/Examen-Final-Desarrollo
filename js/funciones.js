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
  var variableLocal =  'Esto es una Variable Local';
  console.log(variableLocal);
}
var variableLocal = "Esta variable esta afuera del bloque de codigo"
variable();

console.log(variableLocal);

//coerción implícita 
let name = 'Jordy Vega';
if (name) {
    console.info('Hello ' + name);
}

// Funciones anonimas 
const coheteEspacial = function(){
  return alert('Despegue! 🚀🚀🚀');
}
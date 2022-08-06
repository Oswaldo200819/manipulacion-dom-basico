const a = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input);
console.log({
a,
p,
parrafito,
pid,
input,

});

a.innerHTML = 'he cambiado <br> de título'; //innerHTML : manipula el elemento
//a.innerText : para insertar texto

//console.log(a.getAttribute('pantalla')); ver el atributo
//a.setAttribute('class','blue'); // poner un atributo o clase

a.classList.add('newClass'); //agrega clase a elemento
a.classList.remove('newClass');//elimina clase a elemento

input.value = 'Eh brow! cambie de texto'; //.value accede al metodo que puede utilizar en ese elemento.

const img = document.createElement('img'); //createElement crea un elemento desde cero
img.setAttribute('src','img/miau.png');
console.log(img);

pid.append(img);//añade html(elemento) justo despues el ultimo hijo de un elemento seleccionado.
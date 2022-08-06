const val1 = document.getElementById('calculo1');
const val2 = document.getElementById('calculo2');
const bntCal = document.getElementById('btnCalcular');
const result = document.getElementById('result');
const form = document.getElementById('form');

//btnCal.addEventListener('click', calInput);

form.addEventListener('click', calInput);//addEventListener escucha cualquier evento que suceda en el documento HTML -- Con eso queda mas legible el codigo

//se pone event porq necesita el addEventListener
function calInput(event) {
    event.preventDefault(); //preventDefault para que recargue en la misma pag
    let sum;
    sum = Number(val1.value) + Number(val2.value) 
    result.innerText = "Resultado: "+ sum;
}

//const tipoDeSuscripcion = 0;

// switch(tipoDeSuscripcion){
//     case 'Free':
//         console.log('Solo puedes tomar los cursos');
//         break;
//     case 'Basic':
//         console.log('Puedes tomar casi todos los cursos  de Platzi durante un mes');
//         break;
//     case 'Expert':
//         console.log('Puedes tomar casi todos los cursos  de Platzi durante un año');
//         break;
//     case 'ExpertPlus':
//         console.log('Tú y alguien mas Pueden tomar todos los cursos  de Platzi durante un mes');
//         break;

// }
console.log('1.-Free\n2.-Basic\n3.-Expert\n4.-ExpertPlus');
 let dato;
 let tipoDeSuscripcion = prompt('Escojer Tipo Suscripcion\n1.-Free\n2.-Basic\n3.-Expert\n4.-ExpertPlus');
 dato = parseInt(tipoDeSuscripcion);
if (dato ===1) {
    console.log('Solo puedes tomar los cursos');
}else if (dato ===2) {
    console.log('Puedes tomar casi todos los cursos  de Platzi durante un mes');
    
}else if (dato ===3) {
    console.log('Puedes tomar casi todos los cursos  de Platzi durante un año');
    
}else if (dato ===4) {
    console.log('Tú y alguien mas Pueden tomar todos los cursos  de Platzi durante un mes');
}
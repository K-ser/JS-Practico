const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
const btn = document.querySelector('#calculator');
const pResult = document.querySelector('#result');


    //Si queremos usar arrow functions se deben declras antes de usarse
// let calculoOfInputs = () => {
//     let inputResult= +input1.value + +input2.value;
//     pResult.innerText = `Resultado: ${inputResult}`;
// }


    //DE ESTA MANERA EVITAMOS EL SUBMIT DEL FORMULARIO
    //COLOCAMOS EL event.preventDefault

// form.addEventListener('submit', calculoOfInputs);

// function calculoOfInputs(event) {
//     console.log(event);
//     event.preventDefault();
//     const inputResult= +input1.value + +input2.value;
//     pResult.innerText = `Resultado: ${inputResult}`;
// }

//PARA QUE ESTO FUNCIONE, DEBEMOS AGREGAR type="button" EN LA ETIQUETA DEL BOTON
btn.addEventListener('click', calculoOfInputs);

function calculoOfInputs() {
    const inputResult= +input1.value + +input2.value;
    pResult.innerText = `Resultado: ${inputResult}`;
}

const form = document.getElementById('form');
const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');


function validarCalculo(numberA, numberB) {
    if(numberB > numberA) {
        return true
    }
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    valueA = numberA.value;
    valueB = numberB.value;

    calculo = validarCalculo(valueA,valueB)

    if (calculo) {
        const sucessMessage = document.getElementById('success-message');
        sucessMessage.innerHTML = "CORRETO: O Valor B é maior que o A";
        sucessMessage.style.display = 'block' ;

        numberA.value = '';
        numberB.value = '';
    }
    else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerHTML = "ERRO: O Valor A é maior que o B";
        errorMessage.style.display = 'block' ;
        errorMessage.classList.add('error');

    }

})

const input01 = document.getElementById('number-a');
const input02 = document.getElementById('number-b');
const menssage01 = document.getElementById('success-message');
const menssage02 = document.getElementById('error-message');


input01.addEventListener('click', function(event){
    menssage01.style.display = 'none';
})

input02.addEventListener('click', function(event){
    menssage02.style.display = 'none';
})

// nesse exemplo coloquei no if e else um sem classList e outro com para conseguir ver de forma rapida as oções que tenho e para poder treinar de forma diferentes. Porem posso fazer os 2 da mesma forma.
// Também segui com o código para que ao clicar ele limpar o campo inserido de está correto ou não. Visualmente mais agradavel.

const submitButton = document.querySelector('#addition');
const submitButton1 = document.querySelector('#substraction');
const submitButton2 = document.querySelector('#multiplication');
const submitButton3 = document.querySelector('#division');
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');

const resultValue = document.querySelector('#resultValue');

submitButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );

submitButton1.addEventListener('click', () => {
    const result = fieldOne.value - fieldTwo.value;
    console.log(result);
    resultValue.innerHTML = result;

});

submitButton2.addEventListener('click', () => {
    const result = fieldOne.value * fieldTwo.value;
    console.log(result);
    resultValue.innerHTML = result;

});

submitButton3.addEventListener('click', () => {
    const result = fieldOne.value / fieldTwo.value;
    console.log(result);
    resultValue.innerHTML = result;

});






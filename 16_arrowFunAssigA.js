

const show = () => {
    console.log(`Good Morning, Today is Thursday`);
}
show();

const mul = (num1, num2, num3) => {
    console.log(`Multiplication is: ${num1*num2*num3}`);
}
mul(5, 5, 2);

const multi = (num1, num2, num3=1) => {
    console.log(`Multiplication is: ${num1*num2*num3}`);
}
multi(10,4);

const add = (n1, n2, n3, n4, n5) => {
    return n1+n2+n3+n4+n5;
}
const returnValue = add(100, 100, 200, 349, 756);
console.log(`Addition is: ${returnValue}`);

const Addition = (n1, n2, n3, n4, n5) => {
    return n1+n2+n3+n4+n5;
}

const values = Addition("I am","learning","ES6","features","in depth");
console.log(`Addition is: ${values}`);
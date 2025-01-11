function firstWord(firstName, helloName) {
    return helloName + firstName
}

const result = firstWord('Sergey', 'Hello ');
console.log(result)

// // =========================================

const numbers = [1, 2, 32, -4, 7, 8, 9, 10, 11, 12, -21, 58, 123];

function checkNumbers(array) {
    for (let a = 0; a < array.length; a++) {
        if (array[a] > 10) {
            console.log(array[a]);
        }
    }
}

checkNumbers(numbers);


// ===========================================================

// Сложение
function calc1(num1, num2, operator){
    if (operator !== undefined)
    return num1 + num2;
}
console.log(calc1(2, 3, 'plus'));

// Вычитание
function calc2(num1, num2, operator){
    if (operator !== undefined)
    return num1 - num2;
}
console.log(calc2(2, 3, 'minus'));

// Умножение
function calc3(num1, num2, operator){
    if (operator !== undefined)
    return num1 * num2;
}
console.log(calc3(2, 3, 'multiplication'));


// Деление
function calc4(num1, num2, operator){
    if (operator !== undefined)
    return num1 / num2;
}
console.log(calc4(2, 3, 'division'));
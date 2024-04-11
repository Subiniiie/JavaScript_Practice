// const player = {
//     name: 'Nico',
//     age: 98,
// }

// console.log(player);
// player.name = 'Nicolas'
// console.log(player);
// player.sexy = 'soon';
// console.log(player);


// function plus(a, b) {
//     console.log(a + b);
// }
// plus(5, 10);


// function minusFive(a) {
//     console.log(a - 5);
// }
// minusFive(16);


// a + b
// a - b
// a / b
// a ** b
// calculator.add(1, 2)
// calculator.min(1, 2)
// calculator.div(1, 2)
// claculator.powerOf(1, 2) 


// const calculator = {
//     add: function(a, b){
//         console.log(a + b);
//     },
//     min: function(a, b){   
         
//         console.log(a - b);
//     },
//     div: function(a, b){
//         console.log(a / b);
//     },
//     powerOf: function(a, b){
//         console.log(a ** b);
//     },
// };


// calculator.add(1, 5);
// calculator.min(1, 5);
// calculator.div(1, 5);
// calculator.powerOf(1, 5);


// const age = 96;
// function calculatorKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }


// // function 안에서 return을 사용하면
// // 나중에 function을 사용할 때 결과값이 return 값으로 대체
// // calculatorKrAge(age) 값은 calculatorKrAge(ageOfForeigner) 값으로 대체
// const KrAge = calculatorKrAge(age);
// console.log(KrAge);


const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const divideResult = calculator.divide(10, minusResult);
const powerResult = calculator.power(divideResult, 2);
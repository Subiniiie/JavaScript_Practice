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


// const calculator = {
//     plus: function (a, b) {
//         return a + b;
//     },
//     minus: function (a, b) {
//         return a - b;
//     },
//     divide: function (a, b) {
//         return a / b;
//     },
//     power: function(a, b) {
//         return a ** b;
//     },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const divideResult = calculator.divide(10, minusResult);
// const powerResult = calculator.power(divideResult, 2);


// const age = prompt("How old are you?");

// // parseInt("15")


// console.log(age, parseInt(age));


// const age = parseInt(prompt("How old are you?"));

// console.log(age);


// const age = parseInt(prompt("How old are you?"));
// false가 나오면 age가 NaN인 것이 아니라는 뜻 = age는 숫자라는 뜻
// true가 나오면 age가 NaN이라는 뜻 = age가 숫자가 아니라는 뜻
// console.log(isNaN(age));


// if(isNaN(age)){
//     console.log("Please wrtie a number.");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else {
//     console.log("You can drink.");
// }


// if(isNaN(age) || age < 0) {
//     console.log("Please write a real positive number.");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink.");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise.");
// } else if (age === 100) {
//     console.log("wow you are wise.");
// } else if (age > 80) {
//     console.log("You can do whatever you want.");
// }

// document = HTML
// document.title = 'Hello! From HTML!';

// HTML에서 id="title"을 추가했고
// JS에서 getElementById라는 함수를 사용했기 때문에 웹에서 수정 가능
// document.title = document.getElementById("title");
// // console.log(title);
// // console.dir(title);

// title.innerText = "Got you!";
// console.log(title);
// console.log(title.innerText);
// console.log(title.id);
// console.log(title.className);


// const title = document.getElementById("somthing");
// title.innerText = "Got you!";
// console.log(title.className);

// const hello = document.getElementsByClassName("hellos");
// console.log(hello);


// const title = document.getElementsByTagName("h1");
// console.log(title);


// const title = document.querySelectorAll(".hello h1");
// console.log(title);

// const title = document.querySelector(".hello h1");
// title.innerText = "Hello";
// console.log(title);
// console.dir(title);

// title.style.color = 'blue';

// const title = document.querySelector(".hello h1");

// function handleTitleClick() {
//     console.log("title was clicked!");
// }

// title.addEventListener("click", handleTitleClick);

// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//     h1.style.color = "blue";
// }

// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!"
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// 같은 방법
// h1.onclick = handleh1Click;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

// console.dir(h1);


// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }


// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("ALL GOOOOOOOD");
// }



// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);


// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//     console.log(h1.style.color);
//     h1.style.color = "blue";
//     console.log(h1.style.color);
// }


// function handleTitleClick() {
//     if (h1.style.color === "blue") {
//         h1.style.color = "tomato";
//     } else {
//         h1.style.color = "blue";
//     }
// }


// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }


// h1.addEventListener("click", handleTitleClick);


// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }

// h1.addEventListener("click", handleTitleClick);


const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
    // 만약 있다면, toggle이 clicked를 제거한다
    // 만약 h1의 classlist에 clicked class가 없다면
    // clicked를 classList에 추가한다
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
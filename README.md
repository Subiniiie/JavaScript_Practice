JavaScript 복습
-------------------------

- 자바스크립트 : camelCase  
ex) myNameIsNico  

- 파이썬 : snake_case  
ex) my_name_is_nico

NaN = Not a Number

`&&` AND 연산자(operator)
`||` OR 연산자(operator)


true || true === true
true || false === true
false || true === true
false || false === false

true && true === true
true && false === false
false && true === false
false && fasle === fasle



- 조건문
```javascript
if(True조건) {
    if문이 True면 실행할 코드;
} else if (True조건) {
    if문이 False이고 else if문이 True이면 실행할 코드;
} else if (True조건) {
    if문이 False이고 첫번째 else if문이 False이고 
    두번째 else if문이 True일 때 실행할 코드;
} else (True조건) {
    위의 조건들이 다 False일 때 실행할 코드(else는 생략 가능);
}
```
`=` 같음  
`===` 확인할 때
- `a === b` 만약 a가 b라면
`!==`

`isNaN`은 boolean 반환(true, false)


`console.log();` 웹에서 console창에 그대로 보여줌
`console.dir();` 웹에서 console창에서 () 안에 있는 것을 자세히 보여줌


`gerElementById()` HTML에서 id를 통해 element를 찾아줌
```javascript
// id가 title인 element를 찾음
document.title = document.getElementById("title");

// title의 내용을 수정
title.innerText = "Got you!";
// title의 id를 console 창에 출력
console.log(title.id);
// title의 className을 console 창에 출력
console.log(title.className);
```
설정되어 있는 것만 가지고 올 수 있음


`getElementByClassName()` 
- 많은 element를 한번에 가지고 와야하는 경우
- 가져올 element의 className을 동일하게 정의

`getElementByTagName()` 
- Tag로 가지고 옴
- div, h1 등

`querySelector()` element를 CSS방식으로 검색할 수 있음
```javascript
document.querySelector(".hello h1")
```
- hello 클래스 안에 있는 h1 태그를 가지고 올 수 있음
- 같은 element가 여러 개 있으면 제일 처음 element만 가지고 옴

`querySelectorAll()` 조건에 맞는 모든 element의 array를 가지고 옴
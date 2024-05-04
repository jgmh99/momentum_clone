// function sayHello(name, age){
//     console.log("hello my name is " + name + " " + age + "세")
// }
// sayHello("a", 10);
// sayHello("b", 20);
// sayHello("c", 30);
// sayHello("d", 40);

// function cal(x,y){
//     console.log(x + y);
// }
// cal(1,3);

// const player = {
//     name : "jegal",
//     sayHello : function(otherName){
//         console.log("hola! ", otherName + " nice to Meet you~")
//     }
// };
// console.log(player.name);
// player.sayHello("serim");

// recap2-homework

// const cal = {
//     add : function(a,b){
//         console.log(a + b);
//     },
//     min : function(a,b){
//         console.log(a - b);
//     },
//     div : function(a,b){
//         console.log(a / b);
//     },
//     mul : function(a,b){
//         console.log(a * b);
//     },
//     square : function(a,b){
//         console.log(a ** b);
//     },
// }
// cal.add(1, 2);
// cal.min(10, 20);
// cal.div(30, 40);
// cal.mul(50, 60);
// cal.square(8, 7);

/**
// #returns <위 코드 return사용해서 하기>
    const cal = {
        plus: function(a, b){
            return a + b;
            //function은 return하면 끝나버리기 때문에 return이후에 적는 코드는 작동 안함
        },
        min: function(a, b){
            return a - b
        },
        tiems: function(a, b){
            return a * b
        },
        div: function(a, b){
            return a / b
        },
        power: function(a, b){
            return a ** b
        },
    };
    const plusResult = cal.plus(1, 2); 
    const minResult =  cal.min(plusResult, 1);
    const timesResult = cal.tiems(minResult, 2);
    const divResult = cal.div(timesResult, 2);
    const powerResult = cal.power(divResult, 3);

    console.log(plusResult, minResult, timesResult, divResult, powerResult);
*/

/**조건문 */
// const age = parseInt(prompt("님 몇살?"));
//위 프롬프트가 완료될때 까지 멈춤
//뭘 입력하든 string으로 반환하는데 이때 사용하는게 parseInt를 사용

//isNaN()이라는 함수를 쓰면 참거짓으로 알려줌
//숫자면 false / 문자면 true
// console.log(isNaN(age));
// isNaN(age) ? console.log("tlqkf") : console.log("^^");

// if(isNaN(age)){
//     console.log("숫자 입력하셈");
// }
// else if(age <= 0){
//     console.log("정자냐?")
// }
// else if(age >= 0 && age < 18){
//     console.log("돌아가")
// }
// else if(age >= 18 && age <= 50){
//     console.log("합격");
// }
// // && = and / || = or
// //&& 일때는 둘다 true여야하고, or일때는 하나만 true여도 실행할수 있다~~ 이거여~
// else{
//     console.log("아재 서요..?");
// }

                                            /* 3장 */

// const title = document.getElementById("title");
// console.dir(title);
// title.innerText="got you"

// const hellos = document.getElementsByClassName("hello");

// const title = document.getElementsByTagName("h1");
// console.log(title);
//배열로 출력

// const h1 = document.querySelector(".hello h1");
        //만약 위 조건에 맞는 모든걸 찾고 싶다면 querySelectorAll쓰면 됨
// console.log(h1);
        //css 선택자 처럼 요소 가져올 수 있음

/** 이벤트 클린 이벤트*/
/**
function handleTitleClick(){
    console.log(" 클릭감지");
    h1.style.color = "blue"
}

function handleMouseEnter(){
    h1.innerText = "ㅎㅇ!"
}
function handelMouseLeave(){
    h1.innerText = "ㅂㅇ!"
}
 */
/**
title.addEventListener("click", handleTitleClick)
//handleTitleClick 뒤에 () 붙이면 자동으로 실행됨
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handelMouseLeave)
 */
//위코드를 아래 처럼 쓸 수 있음
/**
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handelMouseLeave;
*/

//window 이벤트
/**
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}
window.addEventListener("resize", handleWindowResize); // 크기 바뀌면 색상변경

function handleWindowCopy(){
    alert("tlqkf놈이");
}
window.addEventListener("copy", handleWindowCopy); // 복사기능 사용시 alert!

function handelWindowOffline(){
    alert("와이파이 끊김")
}
function handelWindowOnline(){
    alert("와이파이 연결됨")
}
window.addEventListener("offline", handelWindowOffline);
window.addEventListener("offline", handelWindowOnline);
 */

    /**JS로 스타일 적용 */
/**
const h1 = document.querySelector(".hello h1");

const handleTitleClick = () => {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }
    else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);
*/
            /**
             * 1. element를 찾자
             * 2. event를 listen하자
             * 3. 그 event에 반응해라
             */
            

const h1 = document.querySelector(".hello h1");
function handleTitleClick(){
    const clickedClass = "clicked";

    // if(h1.className === clickedClass){
    //     h1.className = "";    
    // }
    // else{
    //     h1.className = clickedClass;
    // }

    // "active" 라고 적으면 오류의 위험이 생길 수 있음 -> const 로 변수로 만들어서 하면 더 좋음 | 추후 CSS이름이 바뀌어도 변수만 바꿔주면 끝남 | 만약 변수이름이 틀리면 JS에서 알려줄꺼임
    /** HTML에서 h1태그에 class가 명시 되어있을때 위 코드 실행시 기존 class날아가버림 그걸 방지하는 코드를 알아보자 | 위코드는 className을 바꾸는 www */
    /**
     * classList사용방법
     *  - 우리가 class들의 목록으로 작업 할 수 있게끔 만들어주는 www
    */
    /**
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }
    else{
        h1.classList.add(clickedClass);
    }
     */
    //위 코드로 작성하면 h1태그에 있는 class를 유지하면서 clicked라는 클래스를 추가 할 수 있음

    /**toggle 사용 : h1의 classList에서 clicked라는 클래스가 있는지 확인하고 있으면 '삭제' 없으면 '추가' 하는 거임*/
    h1.classList.toggle(clickedClass); // 이렇게 하면 if-else문 안쓰고도 할 수 있음

}
h1.addEventListener("click", handleTitleClick);


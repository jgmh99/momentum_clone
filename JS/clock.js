const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    /** 저는 초가 1초가 아니라 01초 이렇게 나오면 좋겠어요! 하면 다음과 같이 작성 */
    //padStart, padEnd를 사용해보자
    //padStart : ({글자수}, "조건에 맞는 글자수가 아니면? 앞에 문자를 붙인다")
    const hour = String(date.getHours()).padStart(2, "0")
    const min = String(date.getMinutes()).padStart(2, "0")
    const sec = String(date.getSeconds()).padStart(2, "0")

    clock.innerText = `${hour}:${min}:${sec}`;
}
getClock(); // 페이지 로드시 바로 실행
setInterval(getClock, 1000); // 1초가 지날때마다 다시 실행
/**
 * setInterval = 정해진 시간마다 반복을 하는거
 * setTimeout  = 정해진 시간을 기다렸다 실행하고 끝
 */
        // ineterval : 매2초마다~ 라고 할때 매2초마다 무슨 일이 일어나게 하고싶다? = interval
// setInterval(sayHello, 1000) // ()안에 2개의 argument를 받음 첫번째 자리는 실행할 함수를 받을거임, 2번째는 몇초마다 실행할것인지 적을거임 Ex) 5초 = 5000
        // timeout : interval과 비슷하게 생겼지만 다름
// setTimeout(sayHello,1000);



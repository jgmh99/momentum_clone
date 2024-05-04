문자열은 "로 시작해서 " 로 끝나던가 '로 시작해서 ' 로 끝나야함
true, false => NOT text!! boolean!
null
    : 비어있음을 의미 
    : 때떄로 코드안에 작성해야 할 때가 있음
    : 변수 안에 아무것도 없다는 것을 확실히 해두고 싶다면 말이지 ㅇㅇ
        Ex) const a = null;
undefined
    : 변수에 값을 부여하지 않은 상태
        Ex) let hello;
            console.log(hello); ==> undefined 출력

*** null 이랑 undefined는 같지 않음! ***
변수 만드는 방법
    !! 거의 const 사용하되 바뀔게 있으면 let을 사용하도록 하자
    !! No var NO!
    - const 
        : 값을 업데이트 못함
    - let
        : 값 업데이트 가능
            Ex) let jeglaIsFat = flase;
                jegalIsFat = ture; <-- false 에서 true로 바뀜

array
    const days = [ ]; // array = list라 생각하면서 만들도록 하자 array는 []를 사용해서 만듬
        [] 안에는 모든 유효한 데이터 타입이나 변수가 들어 갈 수 있음
        Ex) const jegal = "male"
            const array = [1,2, true, fales, null, undefined, "text", me];
                =컴퓨터는 0부터 셈
            console.log(array[6]); ==> text반환
            만약 바꾸고 싶다면?(업데이트)
                array[0] = "one";
                console.log(array); ==>  ["one", 2, true, fales, null, undefined, "text", me]
            만약 추가를 하고 싶다면?
                array.push("응애");
                console.log(array); ==>  ["one", 2, true, fales, null, undefined, "text", me, "응애"]
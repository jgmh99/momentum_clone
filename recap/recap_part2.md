object
    const player = {
        name: "jegal",
        age : 26,
    }
    player.name
    여기서 보면 우리가 흔히 쓰는 console.log와 형태가 비슷하단걸 알수가 있음!
    console은 object였던거임!!

    고로 console.log(player, console);을 해보면~~
    {name:jegal, age:26}
    console{ ~~~~ }하고 obj형태로 나옴
        ## 작성해보면~?
        cosnt consoel = {
            debug : function(){
                ...
            },
            log : function(){
                ...
            }
            ...
        }
        이런 형식으로 만들어져 있다는걸 알 수 있즘~!

    다시 돌아와서 
    const player = {
        name: "jegal",
        age : 26,
    };
    이 있을때
    player.name = "1q2w3e4r"; 이라하고
    console.log(player); 찍으면, {name : 1q2w3e4r, age:26}이런식으로 나옴~~

    player란 obj에 새로운 item을 만들고 싶으면
    player.sexy = "soooooon";
    console.log(player); ==> {name : 1q2w3e4r, age:26, sexy : sooooooon}
    //위에서 name이 jegal이 아닌 1q2w3e4r이라고 나온거는 위에서 player.name은 1q2w3e4r이라고 했기 때문이지


    function
        : 어떤 코드들을 캡슐화해서 그걸 계속 반복해서 사용할수 있도록 만든것임
        Ex)
            function plus(a, b){
                console.log(a + b);
            }
            plus(1,2);
            --> 3출력 a자리에 1이 들어가고 b자리에 2가 들어간다고 생각하면됨
            ==추가 설명==
            alert();을 그냥 실행하면 브라우저 상단에 아무 메세지가 없이 실행되는걸 볼 수 있즘
            ()안에 내용을 추가해서 실행하면 그 내용이 나오는것 처럼
            plus(); ()안에 넣을 값을 주면 plus function에서 실행하는거임
            function 잘 모르겠으면 alert을 생각해보자
        
        !!
        const cal = {
            add : function (a, b){
                console.log(a + b);
            }
        }
        cal.add(1, 1);
        => 2;

        
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

//todo 저장을 위해
//const toDos = []; 업데이트를 위해사 let으로 변경 / const로 하면 실행할때마다 빈걸로 시작하기 떄문에 ㅇㅇ
let toDos = [];

//localstorages에서 불러올 key
const TODOS_KEY = "todos";
//todo 저장함수
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));    
}

// todo삭제 func
function deleteTodo(e){
    const li = e.target.parentElement;
    /**설명
     * X 버튼을 클릭할때 e를 얻게 될거임
     * e는 target을 줄거고 target은 button임
     * button은 부모를 가지고 있지
     * 이제 나는 button의 부모에 접근가능 = li에 접근 가능하다는 말씀
     */
    console.log("클릭한 버튼 ID",li.id); // string타입으로 나옴 -> 고로 filter가 number랑 string이랑 비교하고있으니 안지워짐 -> li.id를 parseInt로 변경
    li.remove(); //버튼이 있는 해당 li 삭제한다는 뜻
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));    //toDo의 id가 li의 id와 다른 것만 남기고 싶어요 라는 뜻
    //localStorage에서 지운뒤에 saveTodos를 불어줘야함
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.addEventListener("click", deleteTodo)

    button.innerText = "❌"
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;// text안적어주면 [object, Object]이렇게 나오기 때문에 바꿔줌
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value; //input값의 현재 value를 newTodo에 저장, 고로 toDoInput.value에 영향 없음
    toDoInput.value = "";
    /*
        text 형태가 아닌 objcet로 받을거임
    */
    const newToDoObj = {
        text : newTodo,
        id : Date.now(),
    }
    //화면에 표시하기전에 array에 저장
    //toDos.push(newTodo);
    toDos.push(newToDoObj);
    //paintTodo(newTodo);
    paintTodo(newToDoObj);
    //요렇게 하면 localStorage에 text랑 id값 들어가는거 볼 수 있음
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log("parse 전",savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //윗줄 설명 : todolnput에 값 입력하면 출력되는거는 localStorage에서 가져온 string임 윗줄이 실행되면 js object로 변하게 될거임
    console.log("parse 후",parsedToDos);
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello);
    //forEach 설명 : parsedToDos가 가지고 있는 각각의 item에 sayHello 함수를 실행해줘 라는 거임 - 실행해보면 아이템 갯수만큼 console.log()가 찍힐거임
    // !!! forEach는 array의 각 item에 대해 function을 실행해줌
    // 즉 sayHello("a") ~ sayHello("z")이렇게 하면 this is the turn of a ~ z까지 출력해주는것임

    /** 아래 코드는 forEach 단축하는 코드임 고로 기존 forEach코드 주석처리 */
    //parsedToDos.forEach((item) => console.log("this is the turn of", item)); //똑같이 나오는걸 볼 수 있음
    parsedToDos.forEach(paintTodo); // <-- 이제 paintTodo 호출하면 끝

    /**
     * 여기서 문제 !! 기존에 있던 todoitem에 새로운 todo를 넣고 새로고침하면 기존에 있던것들이 사라짐! 기존에 있던것들에 덮어쓰고 있다는거임
     * 이유 : newToDo를 작성하고, form을 submit을 할때마다 빈 array에 push를 하기 때문임
     * handleToDoSubmit함수 보시게나!
     * 
     * 해결방법
     *  1.const toDos = [] 를 let으로 변경
     *  2.toDos에 parsedToDos를 넣엉서 이전에 있던 todo복원 =>  toDos = parsedToDos;
     */
}
//console.log(savedToDos); // localStorage에 아무것도 없으면 null 출력됨

/* 
    filter함수를 사용해서 삭제하는 방법(삭제할 item의 id를 제외하는거) 
    사용방법
*/
function sexyFilter(item){
    return item !== 3;
}
[1,2,3,4].filter(sexyFilter); //1,2,3,4에 sexyFliter가 실행될거임
/* sexyFilter는 무조건 true를 반환해야하는데 만약 위코드에서 3에서 flase를 반환한다면, 3을 빼고 1,2,4가 나올거임 */

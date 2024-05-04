const API_KEY = "33953045b545bb7a14cee85e5c93e811";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log("님 위치는 : ", lat, lon);
    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => {
        const weather = document.querySelector("#weather span:first-child" );
        const city = document.querySelector("#weather span:last-child" );
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

        }); //url부르는거 ㅇㅇ
    /*url을 fetch하고 그 다음으로 reseponse받아야함*/
}
function onGeoError(){
    alert("못찾음 ㅈㅅ..");
}
//위치찾기 www
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
//(실행할 함수 , 에러시 실행할 함수)
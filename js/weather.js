
const API_KEY = "cb086239e7d92da773553d767eedf33d";


function onGeoSuccess(position){    //JS에서 유저의 위치를 position (첫번째 argument)로 우리에게 줌
//이 paramter는 Object! 아무튼 JS에서 알아서 주니까 우리는 position이라는 자리만 만들어서 JS에게 넘겨주면 됨!!

    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(weatherURL).then(response => response.json()).then(data=>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-of-type(2)");
        const temp = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp}°C`;
    });    
    //response의 JSON을 가지고옴 (NETWORK에 있던 weatherURL 관련된 정보들이 다 JSON임)
    //그리고 이 정보들을 data라고 이름붙히고, 사용할 수 있게 됨
    //weather 같은 것들은 array로 써져있어서 [0]을 꼭 붙혀야함!!

}
function onGeoError(){
    
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);  //gets geolocation of the user





const API_KEY = "cb086239e7d92da773553d767eedf33d";

function onGeoSuccess(position){  
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
   
}
function onGeoError(){
    const unabledLocation = document.querySelector("#weather span:first-child");
    unabledLocation.innerText = "Unable to locate.\nPlease turn on your location for the weather service";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);  //gets geolocation of the user




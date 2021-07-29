const wifi_text = document.createElement("span");

if (navigator.onLine){
    wifi_text.innerText = "Wifi ON";
    document.getElementById("network").append(wifi_text);
}else{
    const wifi = document.createElement("img");
    wifi.src = `css/offline.jpg`;
    wifi.width = 50;
    wifi.height = 50;
    document.getElementById("network").append(wifi);
}

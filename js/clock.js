const clock = document.querySelector("#clock");
const currentDate = document.querySelector("#date");
function getDate(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0") ; //01, 02, ...
    const minutes = String(date.getMinutes()).padStart(2,"0");  //01,02...
    const seconds = String(date.getSeconds()).padStart(2,"0");  //01,02...
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0
    const year = date.getFullYear();

    currentDate.innerText = `${day}/${month}/${year}`; //current date

}

getDate(); 
setInterval(getDate, 1000); 

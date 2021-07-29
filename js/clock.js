const clock = document.querySelector("#clock"); //id가 clock걸 찾음
const currentDate = document.querySelector("#date"); //이건 <h4 id = date>을 위한것

function getDate(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0") ; //String으로 형변환, 01, 02, ...
    const minutes = String(date.getMinutes()).padStart(2,"0");  //01,02...
    const seconds = String(date.getSeconds()).padStart(2,"0");  //01,02...
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0
    const year = date.getFullYear();

    currentDate.innerText = `${day}/${month}/${year}`; //current date

}

getDate();  //맨 처음에 웹사이트 로드되자마자 부름
setInterval(getDate, 1000); //그리고 계속 1초마다 getDate부름 (1초마다 업데이트)

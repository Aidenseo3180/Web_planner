const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

const randomImg = images[Math.floor(Math.random()*images.length)];  //get random images

//html에 img src = "img/0.jpg" 처럼 추가할거임
//const bgImage = document.createElement("img");  //img라는 element를 HTML에 만듦!
//bgImage.src = `img/${randomImg}`;       //img의 src를 만들어줌

//이제 이 <img>를 <body> 안에 넣어줘야함 (img를 넣었지만, 찾질 못하고 있음)
//document.body.appendChild(bgImage);    //appendChild()가 body에 element를 넣어줌!!

document.body.style.backgroundImage = `url(img/${randomImg})`

const morning_images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];


const randomImg = morning_images[Math.floor(Math.random()*morning_images.length)];  //get random images

document.body.style.backgroundImage = `url(img/${randomImg})`

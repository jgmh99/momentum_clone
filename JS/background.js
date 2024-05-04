const images = ["0.jpeg","1.jpeg","2.jpeg",]
const choosenImages = images[Math.floor(Math.random() * images.length)];
console.log(choosenImages);

const bgImg = document.createElement("img");
bgImg.src = `img/${choosenImages}`;
document.body.appendChild(bgImg);
console.log(bgImg);
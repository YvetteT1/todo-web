const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
];

const imgTag = document.getElementById("bgImage");
const IMG_KEY = Math.floor(Math.random() * images.length);
const bgImage = images[IMG_KEY];
imgTag.src = `img/${bgImage}`;
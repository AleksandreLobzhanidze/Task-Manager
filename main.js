const images = [
    {
        img: 'img1.jpg',
    },
    {
        img: 'img2.jpg',
    },
    {
        img: 'img3.jpg',
    },
];

let first = 0;

const img = document.getElementById('surati');
const prevBtn =  document.querySelector('.prev-btn');
const nextBtn =  document.querySelector('.next-btn');

window.addEventListener('DOMContentLoaded', function () {
    const item = images[first];
    img.src = item.img;
  });

function showImage(x) {
    const item = images[x];
    img.src = item.x;

}

nextBtn.addEventListener('click', function () {
    first++;
    if (first > images.length - 1) {
      first = 0;
    }
    console.log(first);
    showImage(first);
});

prevBtn.addEventListener('click', function () {
    first--;
    if (first < 0) {
      first = images.length - 1;
    }
    console.log(first);
    showImage(first);
});
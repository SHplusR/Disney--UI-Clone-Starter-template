// css선택자를 기반으로 요소를 찾는 querySelector
let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

// 저장된 영화의 길이보다 slideindex가 크면 다시 처음으로 돌아가기.
const creatSlide = () =>{
    if(slideIndex >= movies.length){
        slideIndex =0;
    }
//js를 통해 html요소를 생성하는 createElement
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));

    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'moview-desc';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2)}% - ${30 * (sliders.length -2)}px)`;
    }
}

for(let i =0; i<6; i++){
    creatSlide();
}

setInterval(() =>{
    creatSlide();
},3000);

// video card

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach( item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })

    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})
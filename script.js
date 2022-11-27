"use strict"

// slider

let navigation = document.getElementById("navigation")
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
    navigation.classList.toggle("clickedNav");
    hamburger.classList.toggle("clicked-hamburger");
});
let imageData = [
    {
        id: 1,
        imageUrl: "https://cdn.mos.cms.futurecdn.net/S7694reojdRcYshMEHWmvS-1200-80.jpg.webp",
        slideTitle: "The \'Phantom Galaxy\'\n"
    },
    {
        id: 2,
        imageUrl: "https://cdn.mos.cms.futurecdn.net/AoWXgnHSxAAPxqymPQMQYL-1200-80.jpg.webp",
        slideTitle: "Carina Nebula"
    },
    {
        id: 3,
        imageUrl: "https://cdn.mos.cms.futurecdn.net/jTNKUAeoKHeoaCcHkrKsxC-1200-80.jpg.webp",
        slideTitle: "The Pillars of Creation\n"
    },
    {
        id: 4,
        imageUrl: "https://cdn.mos.cms.futurecdn.net/xzJ5BqnKVUdjZFoCMJZ3w9-1200-80.jpeg.webp",
        slideTitle: "'Bones' of a spiral galaxy\n"
    }
]

let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let sliderIndex = 0;

    function createDivSlides() {
        const divSlide = document.createElement('div');
        divSlide.classList.add('slide');
        return divSlide;
    }
    function createImgTag(item) {
        const imageTag = document.createElement('img');
        imageTag.setAttribute('src', item.imageUrl);
        imageTag.setAttribute('alt', item.slideTitle);
        imageTag.classList.add('image');
        return imageTag;
    }
    function createTitleTag(item){
        const titleTag = document.createElement('h4');
        titleTag.innerText = item.slideTitle ;
        return titleTag;
    }
    function createDots(){
        const dotWrapper = document.createElement('div');
        dotWrapper.classList.add('dot-wrapper');
        imageData.forEach(element =>{
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dotWrapper.appendChild(dot);
        })
        return dotWrapper;
    }
    function slide(){
        sliderContent.innerHTML=" ";
        const slideItem = createDivSlides(imageData[sliderIndex]);
        const imgTag = createImgTag(imageData[sliderIndex]);
        const titleTag = createTitleTag(imageData[sliderIndex])
        const dotElement = createDots();
        slideItem.appendChild(imgTag);
        slideItem.appendChild(titleTag);
        sliderContent.appendChild(slideItem);
        sliderContent.appendChild(dotElement);
}
        function arrowLeftClick(){
            if (sliderIndex==0){
                sliderIndex=imageData.length-1;
                slide();
                return;
            }
            sliderIndex--;
            slide();
        }

        function arrowRightClick(){
            if (sliderIndex==imageData.length-1){
                sliderIndex= 0;
                slide();
                return;
            }
            sliderIndex++;
            slide();
        }

    arrowLeft.addEventListener('click', arrowLeftClick);


    arrowRight.addEventListener('click', arrowRightClick);

    setInterval(()=>{arrowRightClick()}, 3000);
    slide();


































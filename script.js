
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const yierImg = document.getElementById('yier-img'); 

let size = 16; 
let clickCount = 0; 
let yesClickCount = 0; 

const messages = [
    "确定嘛",
    "真的嘛宝宝", 
    "不可以哦宝宝", 
    "不要宝宝了嘛💔",  
    "最后一次了宝宝😭"

];

const images = [
    "img/yier3.jpg", 
    "img/yier4.jpg", 
    "img/yier5.jpg", 
    "img/yier6.jpg", 
    "img/yier7.jpg"
    
    
];

const yesImages = [
    "img/bubu.jpg", 
];

noBtn.addEventListener('click', function() {
    size += 10; 
    noBtn.style.fontSize = size + 'px';
    noBtn.style.padding = size / 3 + 'px';

    if (clickCount < messages.length) {
        noBtn.innerText = messages[clickCount];
        yierImg.src = images[clickCount]; 
        clickCount++; 
    } else {
        noBtn.innerText = "给劳资点可以 不然绝交";
    }
});

yesBtn.addEventListener('click', function() {
    if (yesClickCount < yesImages.length) {
        yierImg.src = yesImages[yesClickCount]; 
        yesClickCount++;
    }

    if (yesClickCount >= yesImages.length) {
        yesBtn.innerText = "宝宝最棒了❤️"; 
    }
});



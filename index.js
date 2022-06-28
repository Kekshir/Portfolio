import i18Obj from './translate.js';

let portfolioBtn = document.body.querySelectorAll('.portfolio-btn');
let portfolioBtns = document.body.querySelector('.portfolio-item_btn');
let portfolioImages = document.body.querySelectorAll('.portfolio-img');
let language = document.body.querySelector('.languages');
let lngs = document.querySelectorAll('.languages-lang');

function changeImage(event) {
    if (event.target.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((image, index) => {
            image.src = `assets/images/${event.target.dataset.season}/${index + 1}.jpg`
        });
    }
}

function changeActiveForBtns() {
    portfolioBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            portfolioBtn.forEach(button => button.classList.remove('active'));
            btn.classList.add('active');
        });
    })
}

//translate
function getTranslate(lang) {
    const dataAttributes = document.body.querySelectorAll('[data-i18n]');
    let keys = i18Obj[lang];
    dataAttributes.forEach(data => {
        let dataValue = data.dataset.i18n;

        for (let i in keys) {
            if (i == dataValue) {
                data.textContent = keys[dataValue];
            }
        }
    })
} 
//getTranslate('en');

function getLanguage(event) {
    if (event.target.classList.contains('languages-lang')) {
        getTranslate(event.target.textContent)
    }
}

function changeActiveForLngs() {
    lngs.forEach(lng => {
        lng.addEventListener('click', () => {
            lngs.forEach(language => language.classList.remove('lang-active'));
            lng.classList.add('lang-active');
        });
    })
}
//function changeActiveForLngs() {
//    lngs.forEach(lng)
//}

language.addEventListener('click', getLanguage);
changeActiveForLngs();
changeActiveForBtns();
portfolioBtns.addEventListener('click', changeImage);
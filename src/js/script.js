// toggle menu script
const toggleMenuEl = document.getElementById('js-toggle-menu');
const toggleableMenuEl = document.getElementById('js-toggleable-menu');
const menu = document.getElementById('menu');
let isOpen = false;

const cvBtn = document.getElementById('CV-btn');

cvBtn.addEventListener('click', ()=>{
    const link = document.createElement("a");
    let lang = navigator.language || navigator.userLanguage;
    if(lang.startsWith("pl")){
        link.href = "cv_pl.pdf";
    } else {
        link.href = "cv_en.pdf";
    }
    link.download = "SebastianKacaCV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

toggleMenuEl?.addEventListener('click', function(){
    toggleableMenuEl?.classList.toggle('active');
    if(isOpen){
        menu.src = "src/img/burger-bar.png";
    }
    else{
        menu.src = "src/img/arrow.png";
    }
    isOpen = !isOpen; // change condition
})

// name on the top
window.addEventListener("scroll", () => {
    const name = document.getElementById("main-name");
    const menuName = document.getElementById("menu-name");
    const triggerPoint = name.offsetTop + name.offsetHeight;
  
    if (window.scrollY > triggerPoint) {
      menuName.innerText = "Sebastian Kaca";
      menuName.classList.add("visible");
    } else {
      menuName.innerText = "";
      menuName.classList.remove("visible");
    }
});

// changing photos
document.querySelectorAll('.slider').forEach(slider => {
    const photos = slider.querySelectorAll('.photos img');
    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');
    let current = 0;

    function showSlide(newIndex, direction){
        if (newIndex === current) return;

        const currentImg = photos[current];
        const nextImg = photos[newIndex];

        currentImg.classList.remove('active');
        nextImg.classList.remove('to_left');
        nextImg.classList.remove('to_right');
        nextImg.classList.add('active');

        if (direction == 'next'){
            currentImg.classList.add('to_left');
            nextImg.classList.add('active');
        } else {
            currentImg.classList.add('to_right');
            nextImg.classList.add('active');
        }

        current = newIndex;
    }

    nextBtn.addEventListener('click', () => {
        const newIndex = (current + 1) % photos.length;
        showSlide(newIndex, 'next');
    });
    
    prevBtn.addEventListener('click', () => {
        const newIndex = (current - 1 + photos.length) % photos.length;
        showSlide(newIndex, 'prev');
    });
})

const languageSwitcher = document.getElementById('language-switcher');

const urlParams = new URLSearchParams(window.location.search);
let langFromUrl = urlParams.get('lang');

let browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();

let currentLanguage;

if (langFromUrl) {
    currentLanguage = langFromUrl;
}else {
    currentLanguage = browserLang.startsWith("pl") ? "pl" : "en";
}

languageSwitcher.value = currentLanguage;

languageSwitcher.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    const url = new URL(window.location.href);

    if (selectedLanguage === (browserLang.startsWith("pl") ? "pl" : "en")) {
        url.searchParams.delete('lang');
    } else {
        url.searchParams.set('lang', selectedLanguage);
    }
    window.history.replaceState({}, '', url);

    i18next.changeLanguage(selectedLanguage).then(() => {
        document.querySelector("html").lang = selectedLanguage;
        translatePage();
    });
}
)

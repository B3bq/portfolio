// toggle menu script
const toggleMenuEl = document.getElementById('js-toggle-menu');
const toggleableMenuEl = document.getElementById('js-toggleable-menu');
const menu = document.getElementById('menu');
let isOpen = false;

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
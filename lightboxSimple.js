//creates a div in the html document (DOM)
const lightboxBg = document.createElement('div');
lightboxBg.id = "lightboxBg";
document.body.appendChild(lightboxBg);

const images = document.querySelectorAll('.zoomImg');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightboxBg.classList.add('active');
        const lightboxImg = document.createElement('img');
        lightboxImg.src = image.src;
        lightboxImg.id = "lightboxImg";
        while (lightboxBg.firstChild){
            lightboxBg.removeChild(lightboxBg.firstChild)
        }
        lightboxBg.appendChild(lightboxImg);
    })
})

//Removes the lightbox image when the mouse is clicked
lightboxBg.addEventListener('click', e => {
    lightboxBg.classList.remove('active');
})

//Removes the lightbox image when any key is pressed
document.addEventListener('keydown', e => {
    lightboxBg.classList.remove('active');
})



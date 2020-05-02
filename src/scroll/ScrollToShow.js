export default function scrollToShow (slideName, sideActive, pos) {
    const slides = document.querySelectorAll(slideName);
    window.addEventListener('scroll', () => {
        slides.forEach(slide => {
            var imgPos = 0;
            imgPos = slide.offsetTop;
            const pixelScroll = window.scrollY;
            const imgWhere = pixelScroll - pos;
            console.log('VT '+imgWhere);
            console.log('VP '+imgPos);
            if(imgWhere > imgPos){
                slide.classList.add(sideActive);
            }else{
                slide.classList.remove(sideActive);
            }
        })
    })
}

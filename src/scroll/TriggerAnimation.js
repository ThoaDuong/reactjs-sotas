export default function TriggerAnimation(slideName, animateName) {
    document.addEventListener('scroll', () => {
        var element = document.querySelectorAll(slideName);
        element.forEach(ele => {
            var elementHeight = ele.clientHeight;

            var windowHeight = window.innerHeight;

            var scrollY = window.scrollY || window.pageYOffset;

            var scrollPosition = scrollY + windowHeight;

            var elementPosition = ele.getBoundingClientRect().top + scrollY + elementHeight/2;

            if (scrollPosition > elementPosition) {
                ele.classList.add(animateName);
            }
        })
    });
}

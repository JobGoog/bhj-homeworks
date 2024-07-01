const blockVisibility = function  (reveal) {
    return function  () {
        reveal.forEach(element => {
            const { top, bottom } = element.getBoundingClientRect();

            if (bottom < 0 || top > window.innerHeight) {
                element.classList.remove('reveal_active');
            } else {
                element.classList.add('reveal_active');
            }
         });
    }
}

const reveal =[...document.querySelectorAll('.reveal')];
const inVis = blockVisibility(reveal);

document.addEventListener('scroll', inVis)
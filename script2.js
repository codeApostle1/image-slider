/* I COME YOUTUBE TO LEARN THIS THING EHAT THE HELL IS THIS AGAIN NA, EVEN THE FIRST CODE IS WEIRD...NAWA OEVERYONE WITH DIFFERNT APPROACH */

const buttons = document.querySelector('[data-carousel-btn]');
buttons.forEach(button => {
    button.addEventListener('click',() => {
        const offset = button.dataset.carouselBtn === "next" ? 1: -1;
    })
})
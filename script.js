const slider = document.querySelector('.slider'), 
cards = document.querySelector('.cards');

slider.addEventListener('mousemove', (e) => {
    let scrollWidth = e.pageX / slider.clientWidth * (slider.clientWidth  - cards.clientWidth) /*this will get me horizontal 
    length of my mouse from the edge of the document divided 
    by the width of the .slider */

    cards.style.left = `${scrollWidth.toFixed(1)}px`
    console.log(scrollWidth);
    
})


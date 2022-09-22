let slides = document.getElementsByClassName("slides")
let slideContainer = document.getElementById("slide-container")
let counter = 0;
function changeSlides() {
    let c = -(60 * counter)
    let b = c.toString()
    let d = b + "vw"
    console.log(d)
    slideContainer.style.left = b + "vw"
    if (counter < slides.length - 1) {
        counter++
    } else {
        counter = 0;
    }
    setTimeout(() => {
        changeSlides()
    }, 10000);
    
}

changeSlides()
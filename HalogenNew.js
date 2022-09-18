let count = 0 
const divList = document.getElementsByClassName("slider")
divList[0].style.display = "block";
divList[1].style.display = "none";
divList[2].style.display = "none";
divList[3].style.display = "none";

setInterval(() => {
    count++
    changeSlide()
}, 10000)

function clickToChangeSlide() {
    count++
    changeSlide()
}
function backSlide() {
    count--
    changeSlide()
}

const slideOne = () => {
    count = 0;
    changeSlide()
}
const slideTwo = () => {
    count = 1;
    changeSlide()
}
const slideThree = () => {
    count = 2;
    changeSlide()
}
const slideFour = () => {
    count = 3;
    changeSlide()
}


  console.log(count)
    
  

    const changeSlide = () => {
        if(count > 3) {
           count = 0
            }
            if(count == 0) {
                divList[0].style.display = "block";
                divList[1].style.display = "none";
                divList[2].style.display = "none";
                divList[3].style.display = "none";  
            } else if(count == 1) {
                divList[0].style.display = "none";
                divList[1].style.display = "block";
                divList[2].style.display = "none";
                divList[3].style.display = "none"; 
            } else if(count == 2) {
                divList[0].style.display = "none";
                divList[1].style.display = "none";
                divList[2].style.display = "block";
                divList[3].style.display = "none"; 
            } else if(count == 3) {
                divList[0].style.display = "none";
                divList[1].style.display = "none";
                divList[2].style.display = "none";
                divList[3].style.display = "block"; 
        }
        
} 


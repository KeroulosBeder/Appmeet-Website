// preloading 
const preloader = document.querySelector(".preloader");

window.addEventListener("load",function(){
            preloader.style.opacity = '0';  
            preloader.addEventListener("transitionend",function(){
                document.body.removeChild(preloader); 
                // reveal animation {{{{----------------------------------}}}}

let homeBoxes = document.querySelectorAll(".hero .container > *")

let featuresBoxes = document.querySelectorAll("#features .container > *")

let overviewBoxesP1 = document.querySelectorAll("#overview .container:nth-of-type(1) > *");
let overviewBoxesP2 = document.querySelectorAll("#overview .container:nth-of-type(2) > *");

let priceBoxes = document.querySelectorAll("#pricing .container > *")

let achievementsBoxs = document.querySelectorAll(".achievements .container > *")

let teamBoxes = document.querySelectorAll("#team .container > *")

let testiBoxesP1 = document.querySelectorAll("#reviews .container .card")
let testiBoxesP2 = document.querySelectorAll("#reviews .container .card,#reviews .seperator > *")

let newsLetter = document.querySelectorAll(".news-letter .container > *")

let callusBoxes = document.querySelectorAll(".call-us .container > *")

let footerBoxes = document.querySelectorAll("footer .container > *:not(hr)> *")

let seperators = document.querySelectorAll(".seperator")
for (let el of testiBoxesP1) {
    el.classList.add("go-right")
}
function reveal(arr,x =1.3,time = 150){
    for(let i = 0; i < arr.length; i++){
        if(arr[0].getBoundingClientRect().top < window.innerHeight / x){
        setTimeout(() => {
            
                arr[i].classList.add("active-reveal")
        }, i * time);
    }

    }
}

reveal(homeBoxes, 1.3, 10);  
reveal(featuresBoxes, 1.6, 250);  
reveal(overviewBoxesP1, 2.1, 200);     
reveal(overviewBoxesP2, 1.8, 200);     
reveal(achievementsBoxs, 1.5, 200);  
reveal(priceBoxes, 1.6, 250);  
reveal(teamBoxes, 1.6, 250);  
reveal(testiBoxesP2, 1.4, 70);  
reveal(newsLetter, 2, 100);  
reveal(callusBoxes, 1.3, 1);  
reveal(footerBoxes, 1.2, 1);  

window.addEventListener("scroll",function(){
    reveal(homeBoxes, 1.3, 10);  
    reveal(featuresBoxes, 1.6, 250);  
    reveal(overviewBoxesP1, 2.1, 200);     
    reveal(overviewBoxesP2, 1.8, 200);     
    reveal(achievementsBoxs, 1.5, 200);  
    reveal(priceBoxes, 1.6, 250);  
    reveal(teamBoxes, 1.6, 250);  
    reveal(testiBoxesP2, 1.4, 70);  
    reveal(newsLetter, 2, 100);  
    reveal(callusBoxes, 1.3, 1);  
    reveal(footerBoxes, 1.2, 1);  

})

            })
})



const bar = document.querySelector(".bars")
const headerUlAs = document.querySelectorAll("header ul a")
for(el of headerUlAs){
    el.addEventListener("click", function(){
        bar.classList.toggle("active")
        if(window.matchMedia(`(max-width: 767px)`).matches){
        document.body.classList.toggle("overflow-hide")
        }
    })
}
bar.addEventListener("click",function (){
    bar.classList.toggle("active")
    document.body.classList.toggle("overflow-hide")
})
// bar ends 
// video starts 
const videoBtn = document.getElementById("hero-video")
const video = document.querySelector(".video")
let videoClicked = false; 
videoBtn.addEventListener("click", function(){
    video.style.display = "flex"; 
})

video.querySelector("*").addEventListener("click",function(){
    videoClicked = true; 
})

video.addEventListener("click", function(){
    if(videoClicked == false){
        this.style.display = "none"; 
        video.querySelector("*").pause(); 
    }else{
        videoClicked = false; 
    }

})
// video ends 

// header starts 
const header = document.querySelector("header .flex")
const headerImg = document.querySelector("header .flex img")
const headerBtn = document.querySelector("header .btn")
function headerStyles(){
    if(this.scrollY > 400){
        header.style.height = "70px"; 
        headerImg.style.width = "135px"; 
        headerBtn.style.padding = "15px 25px"; 
        if(window.matchMedia(`(max-width: 767px)`).matches){
            header.querySelector("ul").style.height = "calc(100vh - 70px)"; 
            header.parentElement.style.backgroundColor = "var(--mainColor)"; 
            header.querySelector("img").setAttribute("src","../imgs/white-logo.svg")
            header.querySelector("ul").classList.remove("scrolled")

        }else{
            header.querySelector("ul").classList.remove("scrolled")
            header.querySelector("ul").style.height = "auto"; 
            header.parentElement.style.backgroundColor = "var(--lightColor)"; 
            header.parentElement.style.boxShadow = "0 0 15px 0 rgb(0,0,0,.1)"; 
            header.querySelector("ul").classList.add("scrolled");
            header.querySelector("img").setAttribute("src","../imgs/logo.svg")
            header.querySelector(".btn").className = "btn"; 
        }
    }else{
        header.querySelector("ul").classList.remove("scrolled")
        header.style.height = "90px"; 
        headerImg.style.width = "170px";  
        headerBtn.style.padding = "18px 35px"; 
        header.querySelector("img").setAttribute("src","../imgs/white-logo.svg")
        header.parentElement.style.backgroundColor = "var(--secondaryColor)"; 
        header.querySelector(".btn").classList.add("white") 
        header.parentElement.style.boxShadow = "0 0 0 0 transparent"; 
        if(window.matchMedia(`(max-width: 767px)`).matches){
            header.querySelector("ul").style.height = "calc(100vh - 90px)"; 
        }
        else{
            header.querySelector("ul").style.height = "auto"; 
        }

    }
}

// active link moving logic 

let headerLinks = document.querySelectorAll("header ul li a");

headerStyles(); 
moveActiveStyle(); 

window.addEventListener("scroll",function(){
headerStyles(); 
moveActiveStyle(); 



})

const style = document.createElement('style');
document.head.appendChild(style);



headerMethods() 
function moveActiveStyle(){
    headerMethods(); 
    
}


function headerMethods (){
    let homeSecTop = document.querySelector(".hero").getBoundingClientRect().top;
    let homeSecHeight = document.querySelector(".hero").getBoundingClientRect().height;
    let featuresSecTop= document.querySelector("#features").getBoundingClientRect().top;
    let featuresSecHeight= document.querySelector("#features").getBoundingClientRect().height;
    let overviewSecTop = document.querySelector("#overview").getBoundingClientRect().top;
    let overviewSecHeight = document.querySelector("#overview").getBoundingClientRect().height;
    let priceSecTop = document.querySelector("#pricing").getBoundingClientRect().top;
    let priceSecHeight = document.querySelector("#pricing").getBoundingClientRect().height;
    let teamSecTop = document.querySelector("#team").getBoundingClientRect().top;
    let teamSecHeight = document.querySelector("#team").getBoundingClientRect().height;
    let testiSecTop = document.querySelector("#reviews").getBoundingClientRect().top;
    let testiSecHeight = document.querySelector("#reviews").getBoundingClientRect().height;
    for (let el of headerLinks) {
        el.classList.remove("active")
    }

    if(homeSecTop > (-homeSecHeight / 1.75)){
        headerLinks[0].classList.add("active")
    }
    else if(featuresSecTop > -featuresSecHeight/1.75){
        headerLinks[1].classList.add("active")
    }
    else if(overviewSecTop > -overviewSecHeight/.9){
        headerLinks[2].classList.add("active")
    }
    else if(priceSecTop > -priceSecHeight/1.25){
        headerLinks[3].classList.add("active")
    }
    else if(teamSecTop > -teamSecHeight/1.75){
        headerLinks[4].classList.add("active")
    }
    else if(testiSecTop > -testiSecHeight/1.75){
        headerLinks[5].classList.add("active")
    }
}

function addMediaQuery(x,y) {
    style.textContent = `
      @media (max-width: 767px) {
        ${x} {
          height: ${y};
        }
      }
    `;
  }


//   scroll to top 
const scrollTop = document.querySelector(".scroll-to-top")
window.addEventListener("scroll",function(){
    if(this.scrollY > 1200){
        scrollTop.classList.add("active")
    }else{
        scrollTop.classList.remove("active")
    }
})


// let index = 0; 
// let isDeleting = false; 
// let wordIndex = 0; 
// function typeEffect (){
//     if(index > arryOfTypings[wordIndex].length - 1){
//         isDeleting = true;
//         index--; 
//         setTimeout(() => {
//             typeEffect(); 
//         }, 1200);
//         return; 
//     }else if (index === 0 ){
//         isDeleting = false;
//         wordIndex++  
//     }
//     if(wordIndex == arryOfTypings.length){
//         wordIndex = 0; 
//     }
//     if(isDeleting == false){
//         setTimeout(() => {
//             typeEffect(); 
//         }, 150 );
//         index++; 
//         heroSpan.textContent = arryOfTypings[wordIndex].substring(0, index)
//     }
//     if(isDeleting == true){
//         setTimeout(() => {
//             typeEffect(); 
//         }, 100 );
//         index--; 
//         heroSpan.textContent = arryOfTypings[wordIndex].substring(0, index)
//     }

// }
// typeEffect(); 

// let i = 0; 
// let isDeleting = false; 
// let j = 0; 
// let delay = false; 
// function typingeffect(){
//     if(!isDeleting){
//         j++; 
//         heroSpan.textContent = arryOfTypings[i].substring(0,j); 
//         setTimeout(typingeffect,200)
//     } 
//     else if (isDeleting == true){
//         console.log("is Deleting llopp")
//         if(delay == true){
//             delay = false; 
//             setTimeout(typingeffect,10200);
            
//         }else if(delay==false){
//             j--; 
//             heroSpan.textContent = arryOfTypings[i].substring(0,j); 
//             setTimeout(typingeffect,200);
//         }

//     }  
//         if(j == (arryOfTypings[i].length)){
//             isDeleting = true; 
//             delay = true; 
//             console.log("iam looping")
//             // setTimeout(typingeffect,200)
//         }





//     if(j == 0){
//         i++; 
//         isDeleting = false; 
//     }
//     if(i == (arryOfTypings.length)){
//         i = 0; 
//     }

// }

// typingeffect();


// there was many ways to make what have done 
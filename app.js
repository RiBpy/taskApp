// mobile nav section 
         const menuBtn = document.querySelector(".menu-icon span");
         const searchBtn = document.querySelector(".search-icon");
         const cancelBtn = document.querySelector(".cancel-icon");
         const items = document.querySelector(".nav-items");
         const form = document.querySelector("form");
         menuBtn.onclick = ()=>{
           items.classList.add("active");
           menuBtn.classList.add("hide");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }
         cancelBtn.onclick = ()=>{
           items.classList.remove("active");
           menuBtn.classList.remove("hide");
           searchBtn.classList.remove("hide");
           cancelBtn.classList.remove("show");
           form.classList.remove("active");
           cancelBtn.style.color = "#002482";
         }

//invitation offer section
const offerDiv=document.querySelector(".offer")
const offerCrossBtn=document.querySelector(".crossOffer")
  offerCrossBtn.addEventListener("click",()=>{
    offerDiv.style.display="none";
    
})


// slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slide_dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// slide show end

//trending offer section
const trendingOffer=document.querySelectorAll('.offer_container')
let ind=0;
let nextOffer=()=>{
  trendingOffer[ind].classList.remove("active_offer")
  ind=(ind+1)%trendingOffer.length;
  trendingOffer[ind].classList.add("active_offer")
}
let prevOffer=()=>{
  trendingOffer[ind].classList.remove("active_offer")
  ind=(ind-1+trendingOffer.length)%trendingOffer.length;
  trendingOffer[ind].classList.add("active_offer")
}

// reviews 

const review=document.querySelectorAll('.review_container');
let i=0;
let next=()=>{
  review[i].classList.remove("review_active")
  i=(i+1)%review.length;
  review[i].classList.add("review_active")
}
let prev=()=>{
  review[i].classList.remove("review_active")
  i=(i-1+review.length)%review.length;
  review[i].classList.add("review_active")
}
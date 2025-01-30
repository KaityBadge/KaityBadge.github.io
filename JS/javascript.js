//FORM VALIDATION
function validateForm(){
    let x = document.forms["contactForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

//OPEN AND CLOSE CONTACT FORM
function openForm() {
    document.getElementById("contactForm").style.display= "block";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}

//SLIDESHOW FUNCTIONS

//set variable of slide index to start at the first image (slide 1)
let slideIndex = 1;
showSlides(slideIndex);

//changes slide when arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes slides when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    //gets all elements with class name 'mySlides' and stores them in an array called "slides"
    let slides = document.getElementsByClassName("mySlides");
    //gets all elements with class name 'dot' and stores them in an array called "dots"
    let dots = document.getElementsByClassName("dot"); 
    //n is the number passed into the function
    //if n is greater than slides length then re-set the slideIndex to 1
    //so when you reach the last slide it will go back to the beginning
    if (n > slides.length) {slideIndex = 1};
    //if n is less than 1 then set slideIndex to the length/number of the slides
    //so if we run out of slides (clicking left or right), the value goes to the start/end
    if (n < 1) {slideIndex = slides.length};
    //for loop iterates through each slide and sets the display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for loop iterates through the 'dots' and removes the class "active" (the applied styles no longer work)
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    //Displays the image according to slide index
    slides[slideIndex - 1].style.display = "block";
    //adds active styling to the dot associated with the image
    dots[slideIndex - 1].className += "active";
}


//closes the contact form by clicking away from the form on other parts of the screen
//add an event listener to 'listen' for any clicks on the page
document.addEventListener("click", function(event) {
    //closeForm() is call if the click happens on the cancel button OR anywhere that IS NOT (!) the contact form 
    //and click IS NOT (!) on an element with the '.contact' class
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && 
    !event.target.closest(".pop_up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false )
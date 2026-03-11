/* MAIN BOOKING FORM */

function sendWhatsApp(){

let location = document.getElementById("location").value;
let pickupDate = document.getElementById("pickupDate").value;
let days = document.getElementById("days").value;

let phone = "917591955532";

let message = `Hello Orentin Cars,
I want to book a car.

Pickup Location: ${location}
Pickup Date: ${pickupDate}
Duration: ${days} Days`;

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url,"_blank");

}
function toggleContact(){
let menu = document.getElementById("contactDropdown");
menu.classList.toggle("show");
}
function openWhatsApp(){

let phone = "917591955532";

let message = `Hello Orentin Cars,
I would like to book a car.
Please share available cars.`;

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url,"_blank");

}

/* CAR CARD BOOKING */

let buttons = document.querySelectorAll(".book-btn");

buttons.forEach((btn)=>{

btn.addEventListener("click",function(){

let card = this.closest(".car-card");

let carName = card.querySelector("h3").innerText;

let phone = "917591955532";

let message = `Hello Orentin Cars,
I want to book this car:

Car Name: ${carName}`;

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url,"_blank");

});

});


/* DATE PICKER */

flatpickr("#pickupDate",{
minDate:"today",
dateFormat:"d M Y",
disableMobile: true
});


/* AUTO BANNER SLIDER */

let slides=document.querySelectorAll(".slide");

let index=0;

function showSlide(){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

index++;

if(index==slides.length){
index=0;
}

slides[index].classList.add("active");

}

setInterval(showSlide,4000);

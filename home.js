

const imgCon = document.querySelector('#imgs');
imgCon.classList.add('animate__animated', 'animate__fadeOut');
setTimeout(() => {
imgCon.classList.remove('animate__animated', 'animate__fadeOut');
}, 1000);

setInterval(() => {
      const images = ['./images/light3.jpg', './images/light4.jpg', './images/light1.jpg', 
'./images/light2.1.jpg', './images/light5.jpg'];
let  currentIndex = 0;
currentIndex++;
if (currentIndex == images.length) {
    currentIndex = 0;
    
}
imgCon.style.backgroundImage = 'url(' + images[currentIndex] + ')';
const imgCon = document.querySelector('#imgs');
imgCon.classList.add('animate__animated', 'animate__fadeOut');
setTimeout(() => {
imgCon.classList.remove('animate__animated', 'animate__fadeOut');
}, 1000);
});

// function to download pdf and doc files

function generatePDF() {
const pdf = new jsPDF();
const text = document.getElementById("details").textContent;
const textLines = pdf.splitTextToSize(text, pdf.internal.pageSize.getWidth() - 20); 
pdf.text(textLines, 10, 10);
pdf.save("About Us.pdf");
}

function generateDOC() {
const data = document.getElementById("details").textContent;
const blob = new Blob([data], {type: "text/plain;charset=utf-8"});
saveAs(blob, "details.doc");
}




      // setting the click function for the top navbar
const nav = document.querySelectorAll('a');
nav.forEach(a => {
a.addEventListener('click', ()  => {
  // Add or remove the clicked class to toggle the  color
  a.classList.toggle('clicked');

  // Reset text color on all other a elements
  for (let i = 0; i < nav.length; i++) {
    if(nav[i] !== a) {
      nav[i].style.color = 'white'; 
      nav[i].style.borderBottom = "none"
    }
  }

  // Add border and text color to the clicked a element
 a.style.color = '#685A3E';
 a.style.borderBottom = "1.5px solid  #B08D57"
})
})





// geolocation
function getLocation() {
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((pos, showError) => {
    getPlace(pos)
  })
} else{
  alert("This browser does not support geolocation.")
}
}
function showError(error) {
switch (error.code) {
case error.PERMISSION_DENIED:
  alert("User denied the request for Geolocation.")
  break;

}
}



getLocation(); // start getting location and weather data
async function getPlace(pos){

const req= await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`)
const res = await req.json()
console.log(res);
function updateTicker() {
var now = new Date();
var date = now.toDateString();
var time = now.toLocaleTimeString();

var ticker = document.getElementById("ticker");
var tickerContent = document.getElementById("ticker-content")
tickerContent.innerText = "Current time: " + time + " | Current date: " + date + " | Current location: " + res.locality + ", " + res.countryName + ", " + res.continent;
}     
setInterval(updateTicker, 1000);
}
if(!localStorage.getItem("visitor")){
localStorage.setItem("visitor", 0);
}
let count =  Number(localStorage.getItem("visitor")) + 1;
localStorage.setItem("visitor",count);
let counterSpan = document.getElementById("counter");
counterSpan.innerText = count



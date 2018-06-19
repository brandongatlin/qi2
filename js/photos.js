let images = [

  'images/1a.LOTIS QCX  Front View quarter profile with scanning head in  retracted position .JPG',
  'images/1b.LOTIS QCX front right quarter profile with taper forks in detail and scanning head retracted .JPG',
  'images/1c.LOTIS QCX right side profile front showing pipe clamp scanning head in the retracted position Front.JPG',
  'images/1d.LOTIS QCX - Left side 3 quarter profile  showing pipe clamp scanning head in retracted position.JPG',
  'images/1e.LOTIS QCX rear profile showing power and USB connections .JPG',
  'images/1f.LOTIS QCX rear profile showing device controls.JPG',
  'images/1g.LOTIS QCX underside profle .JPG',
  'images/2a.LOTIS QCX program screen for Article Inspection setup.JPG',
  'images/2b.LOTIS QCX program main command screen .JPG',
  'images/v2c.LOTIS QCX program screen manual overlay display.JPG',
  'images/2d.LOTIS QCX program screen with measurements display .JPG',
  'images/2e.LOTIS QCX program screen with display of electronic overlay of profiles .JPG',
  'images/1a.LOTIS QCX clamped for pin inspection.jpg',
  'images/1b.LOTIS QCX in profile with power supply and data cable attached.jpg',
  'images/v1c.LOTIS QCX powered up to scan pin thread at inspection station.jpg',
  'images/1d.LOTIS QCX dual lasers in close up view in scanning process.jpg',
  'images/1e.LOTIS QCX left profile showing taper fork and compression clamp.jpg',
  'images/1f.LOTIS QCX in left profile with shows proportional size to drill pipe.jpg',
  'images/1g.LOTIS QCX close up of clamp and scanning head in extended position.jpg',

];

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
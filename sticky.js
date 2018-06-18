// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  console.log('scrolling');
  if (window.pageYOffset >= sticky) {
    console.log('sticky');

    header.classList.add("sticky");
  } else {
    console.log('not!');

    header.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
};

// Get the header
var header = document.getElementById("myHeader");
var footer = document.getElementById("myFooter");


// Get the offset position of the navbar
var stickyHeader = header.offsetTop;
var stickyFooter = footer.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickyHeader) {
    header.classList.add("sticky");
    footer.classList.remove("sticky");
  }

  if (window.pageYOffset >= stickyFooter) {
    footer.classList.add("sticky");
    header.classList.remove("sticky");
  }



}
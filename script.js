// Get the navbar element
const navbar = document.querySelector("nav");

// Get the offset position of the navbar
const navbarOffset = navbar.offsetTop;

// Add event listener to the window object
window.addEventListener("scroll", () => {
  // Check if the user has scrolled past the navbar
  if (window.pageYOffset >= navbarOffset) {
    // Add the scrolled class to the navbar
    navbar.classList.add("scrolled");
  } else {
    // Remove the scrolled class from the navbar
    navbar.classList.remove("scrolled");
  }
});
// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
// Correct Email Input
const emailInput = document.getElementById('email');
  
  emailInput.addEventListener('input', function() {
    if (!emailInput.validity.valid) {
      emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
      emailInput.setCustomValidity('');
    }
  });
  const backToTop = document.querySelector('.back-to-top');
  const footer = document.querySelector('footer');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > footer.offsetTop - window.innerHeight) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  backToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  

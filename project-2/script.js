// Add sticky class to navbar on scroll
window.onscroll = function() {stickyNav()};

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// Set meters based on data attributes
document.querySelectorAll('.meter').forEach(meter => {
    meter.style.width = meter.getAttribute('data-level');
  });
  
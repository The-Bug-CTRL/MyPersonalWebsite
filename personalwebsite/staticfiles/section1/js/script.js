$(document).ready(function() {
  // Function to check if element is in viewport
  function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }


  $(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            var navHeight = $('.navbar').outerHeight();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - navHeight
            }, 800);
        }
    });
  });

  // Function to slide image in or out based on scroll position
  function slideImage() {
      var experienceSection = document.getElementById('experience-section');
      var trophyImage = document.querySelector('.trophy-img');

      if (isInViewport(experienceSection)) {
          trophyImage.classList.add('show');
      } else {
          trophyImage.classList.remove('show');
      }
  }

  // Initial check when document is ready
  slideImage();

  // Check when scrolling
  window.addEventListener('scroll', function() {
      slideImage();
  });

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
          event.preventDefault();
          var navHeight = $('.navbar').outerHeight();
          $('html, body').stop().animate({
              scrollTop: target.offset().top - navHeight
          }, 800);
      }
  });
});

document.addEventListener('DOMContentLoaded', function(){
  var imgCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(imgCarousel, {
    duration: 200,
    shift:5,
    padding:5,
    numVisible: 6
  });
});
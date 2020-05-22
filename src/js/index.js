import 'owl.carousel';
import Head from './head.js';

Head();

$(document).ready(function(){
  $('#website-carousel').owlCarousel({
    loop: true,
    items: 1,
    dotsContainer: '#website-dots'
  });
  $('#wedid-carousel').owlCarousel({
    loop: true,
    items: 1,
    dotsContainer: '#wedid-dots'
  });
});

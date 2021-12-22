// Any code you will write for your website (in the future!) should go here<script>
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.replace('bg-transparent', 'bg-dark');
  } else {
    nav.classList.add('bg-transparent');
  }
});

//* FAVICONS  *//
src = 'https://kit.fontawesome.com/9f49c39477.js';
crossorigin = 'anonymous';

//! Cassette Animation

const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [{ x: 200, y: -20 }],
};

const tween = TimelineLite();

tween.add(
  TweenLite.to('.cassette', 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

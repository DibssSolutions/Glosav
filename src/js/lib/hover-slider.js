var hero = $('.hero');
$(document).ready(function() {
  hero.hover(
    function() {hero.addClass('is-blur');},
    function() {hero.removeClass('is-blur');}
  );
});

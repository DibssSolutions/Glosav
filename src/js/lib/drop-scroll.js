var updownElem = $('.js-drop');

window.onscroll = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;
  var innerHeight = document.documentElement.clientHeight;
  if (pageY >= innerHeight) {
    updownElem.addClass('open');
  } else {
    updownElem.removeClass('open');
  }
};

updownElem.click(function() {
  $('html, body').animate({scrollTop: 0},500);
});

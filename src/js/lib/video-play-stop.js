var video = $('.video__video iframe');

$('video, .video__pause-play').click(function() {
  if (video[0].play()) {
    $('.video__pause-play').removeClass('opens');
    video[0].play();
  } else {
    video[0].pause();
    $('.video__pause-play').addClass('opens');
  }
  return false;
});

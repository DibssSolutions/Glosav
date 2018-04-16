import noUiSlider from 'nouislider';  
var switcher = '.js-switcher'; 

if ($(switcher).length) {
  var toggleSlider = document.querySelector(switcher);
  noUiSlider.create(toggleSlider, {
    start: [0, 1],
    range: {
      'min': 0,
      'max': 1
    },
    step: 1 
  });

  toggleSlider.noUiSlider.on('change', (values) => {
    console.log(+values[0]);
    if (+values[0] === 1) {
      $('.video').addClass('open');
      event.preventDefault();
      $('.js-if').attr('src','https://www.youtube.com/embed/2se9Thz5zyg?ecver=2');
      $('body').addClass('open');
      $('.slider').addClass('close');
    }
  });
};

$('.js-back-video').click(function() {
  toggleSlider.noUiSlider.reset();
  $('.slider').removeClass('close');
  $('.video').removeClass('open');
  $('body').removeClass('open');
  $('.js-if').attr('src','');
});



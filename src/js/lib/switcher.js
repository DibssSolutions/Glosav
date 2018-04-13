import noUiSlider from 'nouislider';  
var switcher = '.js-switcher'; 



if ($(switcher).length) {
  var toggleSlider = document.querySelector(switcher);
  noUiSlider.create(toggleSlider, {
    start: [1, 10],
    range: {
      'min': 1,
      'max': 10
    }
    
  });

  toggleSlider.noUiSlider.on('change', (values) => {
    console.log(+values[0]);
    if (+values[0] === 10) {
      $('.video').addClass('open');
      event.preventDefault();
      $('.js-if').attr('src','https://www.youtube.com/embed/2se9Thz5zyg?ecver=2');
      $('body').addClass('open');
      $('.slider').addClass('close');
    }
  });
};







// скрипт для моб меню


 $(document).ready(function () {
      $('#cssmenu li.has-sub > a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
        }
        else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
        }
      });

      $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
        });






$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});





$(function(){

// открывает модальное окно знакомиться

  $ ('.tele_btn').click(function(){

    $('#exampleModal1').arcticmodal();
    
  });


  // бургер меню открывает

   $ ('.fa-bars').click(function(){

    $('#exampleModal2').arcticmodal();
    
  });

 
});


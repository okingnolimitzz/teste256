//INICIO primeiro slider "Pronto para morar"
$(function(){

    $(".propriedades-container").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-next"),
        responsive: [
          {
            breakpoint: 1665,
              settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerMode: true
            }
          },
          {
            breakpoint: 1585,
              settings: {
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 4,
              
            }
          },
          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                centerMode: false
              }
            },
            {
              breakpoint: 989,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                centerMode: false,
              }
            },
            {
              breakpoint: 762,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                  focusOnSelect: false,
                  variableWidth: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
              }
            },
            {
              breakpoint: 391,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
              }
            }
          ]
    });

  })
    //FIM primeiro slider "Pronto para morar"


    // INICIO Segundo slider "Lançamentos"
    $(function(){

      $("#propriedades-container2").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        prevArrow: $("#arrow-prev2"),
        nextArrow: $("#arrow-next2"),
        responsive: [
          {
            breakpoint: 1665,
              settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerMode: true
            }
          },
          {
            breakpoint: 1585,
              settings: {
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 4,
              
            }
          },
          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                centerMode: false
              }
            },
            {
              breakpoint: 989,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                centerMode: false
              }
            },
            {
              breakpoint: 762,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                  focusOnSelect: false,
              }
            },
            {
              breakpoint: 600,
                settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                  focusOnSelect: false,
                  variableWidth: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
               // variableWidth: true,
              }
            }
          ]
    })

});
    // FIM Segundo slider "Lançamentos"


    //Início slider APTOS.html


    /*
      mini img wrapper => style="background-color:rgb(210,210,210);" 
      foto destaque => style="background-image:url('img/carro1.jpg');" 
     .nav-galeria-wraper {width: 200%};
      .mini-img-wraper {width:calc(33.3% * (100 / 200))};
    */
      $(function(){
      var imgShow = 3;
      var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
      var curIndex = 0;

      initSlider();
      navigateSlider();
      clickSlider();
      function initSlider(){
        var amt = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');
        elScroll.css('width',amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%');
      }

      function navigateSlider(){
        $('.arrow-right-nav').click(function(){
          if(curIndex < maxIndex){
            curIndex++;
            var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
            $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
          }else{
            //console.log('chegamos ao final');
          }
        });


          $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
              curIndex--;
              var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
              $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
              //console.log('chegamos ao final');
            }
          });
      }

      function clickSlider(){
        $('.mini-img-wraper').click(function(){
          $('.mini-img-wraper').css('background-color','transparent');
          $(this).css('background-color','rgb(255, 191, 0)');
          var img = $(this).children().css('background-image');
          $('.foto-destaque').css('background-image',img);
        })
        $('.mini-img-wraper').eq(0).click();
      }
});

//FIM slider APTOS.html


    






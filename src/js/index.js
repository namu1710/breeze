$(document).ready(function() {

    $('.header_langs_item').click(function() {
        $('.header_langs_item').removeClass('header_langs_active');
        $(this).addClass('header_langs_active')
      });
     
    $('.header_currency_item').click(function() {
        $('.header_currency_item').removeClass('header_currency_active');
        $(this).addClass('header_currency_active')
      });


    $('#login').click(function(){
        $('.header_nav_registration-form').slideToggle()
    })
    $('#signup').click(function(){
        $('.header_nav_registration-form').slideToggle()
    })

    $('.header_nav_form_close').click(function(){
        $('.header_nav_registration-form').css('display', "none")
    })

    $('.header_nav_form_message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
     });

     $('.main_slider_corousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
    })

    $('.header_mobile-menu_btn').click(function(){
        $('.main').slideToggle()
        $(this).toggleClass('mobile-menu_active')
        $('.header_nav').slideToggle()
        
    })

    $('.main_nav_list-mobile').click(function(){
        $('.main_nav_list').slideToggle("slow")
    })

    $('.main_nav_list li a').click(function(){
        var text = $(this).text()
        $('.main_nav_list-mobile span').text(text)
    })

    $('#dropdown_item').click(function(){
        $('.main_nav_dropdown-list').slideToggle('slow')
    })

    $('.main_nav_dropdown-list li').children().click(function(){
        var text = $(this).text()
        $('.main_nav_list-mobile span').text(text)
    })


})

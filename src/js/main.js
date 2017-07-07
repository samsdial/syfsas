$(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    //Accordion Box
    if($('.accordion_box').length){
        $(".accordion_box").on('click', '.btn_acc', function() {
            var outerBox = $(this).parents('.accordion_box');
            var target = $(this).parents('.accordion');
            if($(this).hasClass('active')!==true){
                $(outerBox).find('.accordion .btn_acc').removeClass('active');
            }
            if ($(this).next('.content_acc').is(':visible')){
                return false;
            }else{
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.content_acc').slideUp(300);
                target.addClass('active-block');
                $(this).next('.content_acc').slideDown(300);
            }
        });
    }
});

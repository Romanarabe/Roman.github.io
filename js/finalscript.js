$(document).ready(function(){
    $(window).scroll(function (){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior" , "smooth");
    });
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
    });
    $(".navbar .menu li a").click(function(){
        $(".navbar .menu").removeClass("active");
    });
});
    
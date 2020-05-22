//Cookies
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options = {}) {
    options = {
        path: '/'
        //...options
    };
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function deleteCookie(name) {
    setCookie(name, "", {"max-age": -1});
}

function setHeadScrollMod(){
    if(window.pageYOffset > 0){
        jQuery(".js-head").addClass("mod-fixed");
    }
    else{
        jQuery(".js-head").removeClass("mod-fixed");
    }
}
export default function Head(){
jQuery(document).ready(function($){

    //Header scroll
    $(window).on("scroll", function (){
        setHeadScrollMod();
    });
    setHeadScrollMod();

    //Mobile menu
    $(".js-head-nav-tr").on("click", function(e){
        e.preventDefault();
        $("body").addClass("mod-ns");
        $(".js-head-contact").removeClass("active");
        $(".js-head-nav").addClass("active");
    });
    $(".js-head-nav-cl").on("click", function(e){
        e.preventDefault();
        $("body").removeClass("mod-ns");
        $(".js-head-nav").removeClass("active");
    });

    //Contact menu
    $("a[href='#contact']").on("click", function(e){
        e.preventDefault();
        $("body").addClass("mod-ns");
        $("#drift-widget-container").fadeOut();
        $(".js-head-nav").removeClass("active");
        $(".js-head-contact").addClass("active");
    });
    $(".js-head-contact-cl").on("click", function(e){
        e.preventDefault();
        $("body").removeClass("mod-ns");
        $("#drift-widget-container").fadeIn();
        $(".js-head-contact").removeClass("active");
    });

    //GDPR
    if(getCookie("gdpr")!="hide"){
        $(".js-gdpr").fadeIn();
    }
    $(".js-gdpr-accept").on("click", function(e){
        e.preventDefault();
        $(".js-gdpr").fadeOut();
        setCookie("gdpr", "hide", {"max-age": 60*60*24*30});
    });

    //Home hero slider
    if($(".home-hero").length>0){
        $(".home-hero").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-white',
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    //Home services mobile slider
    if($(".home-services").length>0){
        $(".home-services .wr").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-white',
            autoplay: true,
            autoplaySpeed: 5000,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: 'unslick'
                }
            ]
        });
    }

    //Press slider
    if($(".press").length>0){
        $(".press .list").slick({
            slidesToShow: 6,
            slidesToScroll: 6,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-black',
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    }

    //Brands slider
    if($(".brands").length>0){
        $(".brands .list").slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-black',
            autoplay: true,
            autoplaySpeed: 5000,
            rows: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    }

    //Awards slider
    if($(".awards").length>0){
        $(".awards .list").slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-black',
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    //Reviews slider
    if($(".home-reviews").length>0){
        $(".home-reviews .list").slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-black',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
    }
    if($(".capabilities-i-reviews").length>0){
        $(".capabilities-i-reviews .list").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-black'
        });
    }

    //Help slider
    if($(".capabilities-i-help").length>0){
        $(".capabilities-i-help .list").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-black',
            rows: 2,
            slidesPerRow: 3,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesPerRow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesPerRow: 1
                    }
                }
            ]
        });
    }

    //Video slider
    if($(".capabilities-i-video").length>0){
        $(".capabilities-i-video .list").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-black',
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    //Squad slider
    if($(".agency-squad").length>0){
        $(".agency-squad .list").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots slick-dots-black',
            rows: 3,
            slidesPerRow: 3,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesPerRow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesPerRow: 1
                    }
                }
            ]
        });
    }

    //Careers
    if($(".careers-list").length>0){
        $(".careers-item-header").on("click", function(e){
            e.preventDefault();
            if($(this).hasClass("active")){
                $(this).removeClass("active").next().slideUp();
            }
            else{
                $(".careers-item-header.active").removeClass("active").next().slideUp();
                $(this).addClass("active").next().slideDown();
            }
        });
    }

    //Temp subnav
    $(".js-subnav a").on("click", function(e){
        e.preventDefault();
        if(!$(this).hasClass("current")){
            $(this).parent().parent().find(".current").removeClass("current");
            $(this).addClass("current");
        }
    });

    //Temp tabnav
    $(".js-tabnav a").on("click", function(e){
        e.preventDefault();
        if(!$(this).hasClass("current")){
            let linked_tab = $(this).attr("href");
            $(linked_tab).siblings(".active").slideUp("normal", function(){
                $(this).removeClass("active");
            });
            $(linked_tab).slideDown("normal", function(){
                $(this).addClass("active");
            });
            $(this).parent().parent().find(".current").removeClass("current");
            $(this).addClass("current");
        }
    });

    //Filter dropdown
    $(".js-filter-dd .filter-item-tr").on("click", function(e){
        e.preventDefault();
        if($(this).hasClass("active")){
            $(this).removeClass("active").next().fadeOut();
        }
        else{
            $(".js-filter-dd .filter-item-tr.active").removeClass("active").next().fadeOut();
            $(this).addClass("active").next().fadeIn();
        }
    });

    //Share
    $(".share-op").on("click", function(e){
        e.preventDefault();
        $(this).next().fadeIn();
        $(this).parent().find(".share-cont").slideDown();
    });
    $(".share-cl").on("click", function(e){
        e.preventDefault();
        $(this).fadeOut();
        $(this).parent().find(".share-cont").slideUp();
    });

});
}

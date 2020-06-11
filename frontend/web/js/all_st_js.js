$(document).ready(function () {

    $(".phone").inputmask("+7 (999) 999 99 99");

    AOS.init({
        duration: 1000,
        once: true
    });

    $("a[rel=group1]").fancybox();
    $("a[rel=group2]").fancybox();
    $("a[rel=group3]").fancybox();

    var owl1 = $("#news");
    owl1.owlCarousel({
        smartSpeed: 1000,
        loop:true,
        margin: 30,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:1,
            }
        },
        dots: false,
    });
    $('#to-right1').click(function() {
        owl1.trigger('next.owl.carousel');
    });
    $('#to-left1').click(function() {
        owl1.trigger('prev.owl.carousel');
    });

    var owl2 = $("#anons");
    owl2.owlCarousel({
        smartSpeed: 1000,
        loop:true,
        margin: 30,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:1,
            }
        },
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause:true
    });
    $('#to-right2, #to-left2').hover(function () {
            owl2.trigger('stop.owl.autoplay')
        }, function () {
            owl2.trigger('play.owl.autoplay',[4000])
        }
    );
    $('#to-right2').click(function() {
        owl2.trigger('next.owl.carousel');
    });
    $('#to-left2').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    var owl3 = $("#courses");
    owl3.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        margin: 10,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:4,
            }
        },
    });
    $('#to-right3').click(function() {
        owl3.trigger('next.owl.carousel');
    });
    $('#to-left3').click(function() {
        owl3.trigger('prev.owl.carousel');
    });

    var owl4 = $("#abus1");
    owl4.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        margin: 30,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:1,
            }
        },
    });
    $('#to-right4').click(function() {
        owl4.trigger('next.owl.carousel');
    });
    $('#to-left4').click(function() {
        owl4.trigger('prev.owl.carousel');
    });

    var owl5 = $("#abus4");
    owl5.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        loop: true,
        responsive:{
            0:{
                items:2,
            },
            993:{
                items:4,
            }
        },
    });
    $('#to-right5').click(function() {
        owl5.trigger('next.owl.carousel');
    });
    $('#to-left5').click(function() {
        owl5.trigger('prev.owl.carousel');
    });

    var owl6 = $("#edu4");
    owl6.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        margin: 10,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:2,
            }
        },
    });
    $('#to-right6').click(function() {
        owl6.trigger('next.owl.carousel');
    });
    $('#to-left6').click(function() {
        owl6.trigger('prev.owl.carousel');
    });

    var owl7 = $("#news2");
    owl7.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 0,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:3,
            }
        },
    });
    $('#to-right7').click(function() {
        owl7.trigger('next.owl.carousel');
    });
    $('#to-left7').click(function() {
        owl7.trigger('prev.owl.carousel');
    });

    function news4im() {
        $('.news4_img_item').removeClass('active');
        $('#news4im .owl-item.active:first .news4_img_item').addClass('active');
        var url = $('.news4_img_item.active .news4_im').attr('src');
        $('.news4_main_img img').attr('src', url);
    }

    var owl8 = $("#news4im");
    owl8.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        margin: 0,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:2,
            }
        },
    });
    $('#to-right8').click(function() {
        owl8.trigger('next.owl.carousel');
        setTimeout(function () {
            news4im();
        },500)
    });
    $('#to-left8').click(function() {
        owl8.trigger('prev.owl.carousel');
        setTimeout(function () {
            news4im();
        },500)
    });
    setTimeout(function () {
        news4im();
    },500);

    function news4vi() {
        $('.news4_main_video').removeClass('active');
        $('.news4_video_item').removeClass('active');
        $('#news4vi .owl-item.active:first .news4_video_item').addClass('active');
        var video = $('.news4_video_item.active').data('srcvi');
        var title = $('.news4_video_item.active').data('titvi');
        var image = $('.news4_video_item.active .news4_video_im').attr('src');
        $('.news4_video').attr('src', video);
        $('.news4_mvideo_img').attr('src', image);
        $('.news_mvideo_title p').html(title);
    }
    var owl9 = $("#news4vi");
    owl9.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        margin: 0,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:2,
            }
        },
    });
    $('#to-right9').click(function() {
        owl9.trigger('next.owl.carousel');
        setTimeout(function () {
            news4vi();
        },500)
    });
    $('#to-left9').click(function() {
        owl9.trigger('prev.owl.carousel');
        setTimeout(function () {
            news4vi();
        },500)
    });
    setTimeout(function () {
        news4vi();
    },500);

    var owl10 = $("#ourt2");
    owl10.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        margin: 10,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:4,
            }
        },
    });
    $('#to-right10').click(function() {
        owl10.trigger('next.owl.carousel');
    });
    $('#to-left10').click(function() {
        owl10.trigger('prev.owl.carousel');
    });

    var owl11 = $("#ourt3");
    owl11.owlCarousel({
        smartSpeed: 1000,
        dots: false,
        margin: 10,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:4,
            }
        },
    });
    $('#to-right11').click(function() {
        owl11.trigger('next.owl.carousel');
    });
    $('#to-left11').click(function() {
        owl11.trigger('prev.owl.carousel');
    });

    var owl12 = $("#mobnews");
    owl12.owlCarousel({
        smartSpeed: 1000,
        loop:true,
        margin: 30,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:1,
            }
        },
        dots: false,
    });
    $('#to-right12').click(function() {
        owl12.trigger('next.owl.carousel');
    });
    $('#to-left12').click(function() {
        owl12.trigger('prev.owl.carousel');
    });

    var owl13 = $("#mobhsec6");
    owl13.owlCarousel({
        smartSpeed: 1000,
        loop:true,
        margin: 30,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:1,
            }
        },
        dots: false,
    });
    $('#to-right13').click(function() {
        owl13.trigger('next.owl.carousel');
    });
    $('#to-left13').click(function() {
        owl13.trigger('prev.owl.carousel');
    });

    var owl14 = $("#news2mob");
    owl14.owlCarousel({
        smartSpeed: 1000,
        margin: 10,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:1,
            }
        },
        dots: false,
    });
    $('#to-right14').click(function() {
        owl14.trigger('next.owl.carousel');
    });
    $('#to-left14').click(function() {
        owl14.trigger('prev.owl.carousel');
    });

    var owl15 = $("#coun3mob");
    owl15.owlCarousel({
        smartSpeed: 1000,
        margin: 30,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:1,
            }
        },
        dots: false,
    });
    $('#to-right15').click(function() {
        owl15.trigger('next.owl.carousel');
    });
    $('#to-left15').click(function() {
        owl15.trigger('prev.owl.carousel');
    });






























});
$(document).ready(function () {

    var page = $('.page').data('page');
    $('.menu_item[data-page='+ page +']').addClass('active');
    $('.mobmenu_item[data-page='+ page +']').addClass('active');
    if(page===2 || page===3){
        var subpage = $('.page').data('subpage');
        $('.menu_item[data-page='+ page +'] .submenu_item[data-subpage='+ subpage +']').addClass('active');
        $('.mobmenu_item[data-page='+ page +'] .mob_submenu_item[data-subpage='+ subpage +']').addClass('active');
    }

    var width = $(window).width();

    setTimeout(function () {
        $('.loader').removeClass('active');
        setTimeout(function () {
            $('.loader').hide();
        },900)
    },1000);

    setTimeout(function () {
        $('.hsec1_title_box').removeClass('active');
        setTimeout(function () {
            if(width>992){
                hsec1(1);
            }
            setTimeout(function () {
                $('.hsec1_tochka').removeClass('active');
                setTimeout(function () {
                    $('.hsec1_tline').removeClass('active');
                    setTimeout(function () {
                        $('.hsec1_tplashka').removeClass('active2');
                        setTimeout(function () {
                            $('.hsec1_tplashka').removeClass('active');
                        },50)
                    },450)
                },490)
            }, 3800);

            infra1(1);

            $('.coun1_item_box').removeClass('active');

            $('.admis1_item[data-admis1=1]').removeClass('active');
            setTimeout(function () {
                $('.admis1_item[data-admis1=2]').removeClass('active');
                setTimeout(function () {
                    $('.admis1_item[data-admis1=3]').removeClass('active');
                    setTimeout(function () {
                        $('.admis1_item[data-admis1=4]').removeClass('active');
                    },490)
                },490)
            },490);


        },490);

        $('.cours1_info').removeClass('active');

        $('.abus1_left').removeClass('active');

        $('.infra1_top').removeClass('active');

        $('.sho1_left').removeClass('active');

        $('.edu1_left').removeClass('active');

        $('.news1_left').removeClass('active');

        $('.ourt1_box').removeClass('active');

        $('.coun1_titbox').removeClass('active');

        $('.admis1_titbox').removeClass('active');

    },1900);


    function hsec1(k) {
        if(k === 4){
            setTimeout(function () {
                hsec1(1)
            },1500)
        }else {
            $('.hsec1_pl').removeClass('active');
            $('.hsec1_pl.hs1_pl'+ k).addClass('active');
            setTimeout(function () {
                k = k + 1;
                hsec1(k)
            },1500)
        }
    }

    function infra1(t){
        if(t === 7){
            setTimeout(function () {
                infra1(1)
            },1500)
        }else {
            $('.infra1_item').removeClass('active');
            $('.infra1_item.infra1_i'+ t).addClass('active');
            setTimeout(function () {
                t = t + 1;
                infra1(t);
            },1500)
        }
    }

    $('.hsec3_item_box').hover(function () {
        var text = $(this).find('.hsec3_item_title').text();
        $('.hsec3_hover_text p').text(text);
        }, function () {
        $('.hsec3_hover_text p').text('');
        }
    );

    $(window).scroll(function () {
        var top;
        var topOfwin;
        if(width > 992){
            top = $(window).height() * 0.7;
            topOfwin = $(window).scrollTop() + top;
        }else {
            top = $(window).height() * 0.85;
            topOfwin = $(window).scrollTop() + top;
        }
        if($('div').hasClass('hsec2_info')){
            var topOfhsec2 = $('.hsec2_info').offset().top;
            if(topOfhsec2 < topOfwin){
                $('.hsec2_info').removeClass('active');
            }
        }

        if($('div').hasClass('abus2_info')){
            var topOfabus2 = $('.abus2_info').offset().top;
            if(topOfabus2 < topOfwin){
                $('.abus2_item_t2').addClass('active');
                setTimeout(function () {
                    $('.abus2_item_t1').addClass('active');
                },5000)
            }
        }

        if($('div').hasClass('infra2_info')){
            var topOfinfra2 = $('.infra2_info').offset().top;
            if(topOfinfra2 < topOfwin){
                var t=0;
                $('.infra2_item').each(function () {
                    var infra2 = $(this).data('infra2');
                    setTimeout(function () {
                        $('.infra2_item[data-infra2='+ infra2 +']').removeClass('active');
                    },t);
                    t = t + 1000;
                });
            }
        }

        if($('div').hasClass('sho3_right')){
            var topOfsho3 = $('.sho3_right').offset().top;
            if(topOfsho3 < topOfwin){
                $('.sho3_right').removeClass('active');
            }
        }

        if($('div').hasClass('edu2_info')){
            var topOfedu2 = $('.edu2_info').offset().top;
            if(topOfedu2 < topOfwin){
                $('.edu2_info').removeClass('active');
            }
        }

        if($('div').hasClass('coun2_left_box')){
            var topOfcoun2 = $('.coun2_left_box').offset().top;
            if(topOfcoun2 < topOfwin){
                if(width > 992){
                    $('.coun2_l1, .coun2_l2, .coun2_l3, .coun2_l4, .coun2_l5').removeClass('active');
                    setTimeout(function () {
                        $('.coun2_l1_line, .coun2_l2_line').removeClass('active');
                    },1000);
                    setTimeout(function () {
                        $('.coun2_l1_tochka, .coun2_l2_tochka, .coun2_l3_tochka, .coun2_l4_tochka, .coun2_l5_tochka').removeClass('active');
                    },2000)
                }else {
                    $('.coun2_l1, .coun2_l2, .coun2_l3, .coun2_l4, .coun2_l5').removeClass('active');
                    $('.coun2_l1_line, .coun2_l2_line').removeClass('active');
                    setTimeout(function () {
                        $('.coun2_l1_tochka, .coun2_l2_tochka, .coun2_l3_tochka, .coun2_l4_tochka, .coun2_l5_tochka').removeClass('active');
                    },500)
                }

            }
        }




    });


    $('body').on('click', function (e) {
        if (!$(e.target).closest('.select_block').length) {
            $('.select_item_box').each(function () {
                if(!$(this).hasClass('select_item_hide')){
                    $(this).addClass('select_item_hide')
                }
            });
        }
    });
    $('.select_main').click(function () {
        var th = $(this).parents('.select_block');
        var select_item_box = th.find('.select_item_box');
        if(select_item_box.hasClass('select_item_hide')){
            select_item_box.removeClass('select_item_hide')
        }else {
            select_item_box.addClass('select_item_hide')
        }
    });
    $('.select_item').click(function () {
        var th = $(this);
        var parent = th.parents('.select_block');
        parent.find('.select_item').removeClass('active');
        th.addClass('active');
        var text = th.find('p').text();
        parent.find('.select_main p').text(text);
        parent.find('.select_item_box').addClass('select_item_hide');
        if(th.hasClass('select_item_main')){
            th.css('display', '')
        }else {
            parent.find('.select_item_main').css('display', 'block');
        }
    });


    $('body').on('click', '.submit', function (e) {
        e.preventDefault();
        var success = true;
        var form = $(this).parents('form');
        $(form).find('.not_empty').each(function () {
            var val = $(this).val();
            if(val == ''){
                $(this).addClass('error');success = false;
            } else{$(this).removeClass('error');}
            if($(this).hasClass('phone')){
                val = val.replace(/[^0-9]/g,'');
                if (val.length != "11") {$(this).addClass('error');success = false;
                }else{$(this).removeClass('error');}
            }
        });
        if(success){
            location.reload()
        }
    });

    if($('div').hasClass('abus1_right_item')){
        var abus1im = $('.abus1_right_item');
        var abus1size = abus1im.length;
        $('.abus1_right_item[data-abus1=1]').addClass('act act1');
        $('.abus1_right_item[data-abus1=2]').addClass('act');
        $('.abus1_right_item[data-abus1='+ abus1size +']').addClass('act act0');
    }

    $('#to-right4').click(function () {
        var i = $('.abus1_right_item.act1').data('abus1');
        var k = abus1size - 1;
        var m, n;
        if(i === k){
            m = 1; n = abus1size;
        }else if(i === abus1size){
            m = 2; n = 1;
        }else {
            m = i + 2; n = i + 1;
        }
        $('.abus1_right_item').removeClass('act act0 act1');
        $('.abus1_right_item[data-abus1='+ n +']').addClass('act act1');
        $('.abus1_right_item[data-abus1='+ i +']').addClass('act act0');
        $('.abus1_right_item[data-abus1='+ m +']').addClass('act');
    });

    $('#to-left4').click(function () {
        var i = $('.abus1_right_item.act1').data('abus1');
        var m, n;
        if(i === 2){
            m = 1; n = abus1size;
        }else if(i === 1){
            m = abus1size; n = abus1size - 1;
        }else {
            m = i - 1; n = i - 2;
        }
        $('.abus1_right_item').removeClass('act act0 act1');
        $('.abus1_right_item[data-abus1='+ m +']').addClass('act act1');
        $('.abus1_right_item[data-abus1='+ n +']').addClass('act act0');
        $('.abus1_right_item[data-abus1='+ i +']').addClass('act');
    });

    $('body').on('click','.edu3_lmenu_item', function () {
        var th = $(this).data('edu3');
        $('.edu3_lmenu_item').removeClass('active');
        $('.edu3_linfo_item').removeClass('active');
        $(this).addClass('active');
        $('.edu3_linfo_item[data-edu3='+ th +']').addClass('active');
        $('.edu3_right_img.active').removeClass('active').addClass('active2');
        $('.edu3_right_img[data-edu3='+ th +']').addClass('active');
        setTimeout(function () {
            $('.edu3_right_img.active2').removeClass('active active2');
        },1500)
    });

    $('body').on('click','.news4_mvideo_img', function () {
        $('.news4_main_video').addClass('active');
        $('.news4_video').get(0).play();
    });

    $('.regis_form_btn').click(function (e) {
        e.preventDefault();
        $('.regis_form').trigger('click');
        $('.admis2_bottom_btnbox').css('display','flex');
    });

    $('.humberger').click(function () {
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $('html').css('overflow', 'hidden');
            $('.menu_mobbox').slideDown(750);
        }else{
            $(this).removeClass('active');
            $('html').css('overflow', '');
            $('.menu_mobbox').slideUp(750);
        }
    });

    $('.menu_item.show').hover(
        function(){
            $('.submenu_fon2').addClass('active');
            $(this).find('.submenu_fon').css('display','block');
            $(this).find('.submenu_box').css('display','block');
        },
        function(){
            $('.submenu_fon2').removeClass('active');
            $('.menu_item .submenu_fon').hide();
            $('.menu_item .submenu_box').hide();

        }
    );

    $('.mobsub').hover(function () {
        $(this).find('.mobsubmenu').slideDown(500);
        },
        function () {
        $(this).find('.mobsubmenu').slideUp(500);
        }
    );

    $('.abus3_mobbtn').click(function () {
        if(!$(this).hasClass('active')){
            $('.abus3_info').css('max-height', '100em');
            $(this).addClass('active');
        }else {
            $('.abus3_info').css('max-height', '');
            $(this).removeClass('active');
        }
    });


    $('body').on('click', function (e) {
        if (!$(e.target).closest('.edu3_select_box').length) {
            if($('.edu3_mobsel_box').hasClass('active')){
                $(this).removeClass('active').slideUp(500);
            }
        }
    });
    $('.edu3_mobsel_main').click(function () {
        var th = $(this).parents('.edu3_select_box');
        var edu3_mobsel_box = th.find('.edu3_mobsel_box');
        if(edu3_mobsel_box.hasClass('active')){
            edu3_mobsel_box.removeClass('active').slideUp(500);
        }else {
            edu3_mobsel_box.addClass('active').slideDown(500);
        }
    });
    $('.edu3_mobsel_item').click(function () {
        var th = $(this);
        var id = th.data('edu3');
        var parent = th.parents('.edu3_select_box');
        var text = th.find('p').text();
        parent.find('.edu3_mobsel_main p').text(text);
        parent.find('.edu3_mobsel_box').removeClass('active').slideUp(500);
        $('.edu3_mob_item').removeClass('active');
        $('.edu3_mob_item[data-edu3='+ id +']').addClass('active');
        setTimeout(function () {
            parent.find('.edu3_mobsel_item').removeClass('active');
            th.addClass('active');
        },500);
    });

    $()

});
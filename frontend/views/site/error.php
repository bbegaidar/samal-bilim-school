<?php include('header.php') ?>
<style>
    body{
        padding-left: unset;
    }
    .menu_box{
        display: none;
    }
    footer{
        display: none;
    }
</style>
<section id="page404">
    <div class="page404_pl_box">
        <img src="/img/page404_pl.png" class="page404_pl mob_none">
        <img src="/img/mobile/page404_pl.png" class="page404_mobpl mob_block">
        <div class="page404_maint mob_none">
            <a href="https://maint.kz/" target="_blank" class="foot_maint">
                <img src="/img/maint-icon.png">
            </a>
        </div>
    </div>
    <div class="page404_info flex">
        <div class="page404_left">
            <div class="page404_title">
                Ошибка
            </div>
            <div class="page404_text">
                Запрашиваемая страница не найдена
            </div>
            <div class="page404_btn mob_none">
                <a href="index.php" class="btn">
                    <div class="btn_left">
                        <img src="/img/home-icon.png" class="btn_icon">
                    </div>
                    <div class="btn_right">
                        <p>на главную страницу</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="page404_right">
            <img src="/img/num404.png" class="num404">
        </div>
    </div>
    <div class="mob_flex page404_mobbtn">
        <a href="index.php" class="btn">
            <div class="btn_left">
                <img src="/img/home-icon.png" class="btn_icon">
            </div>
            <div class="btn_right">
                <p>на главную страницу</p>
            </div>
        </a>
    </div>
</section>
<?php include('footer.php') ?>
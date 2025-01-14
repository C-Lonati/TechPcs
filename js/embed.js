$(function(){
    $('#login').load('https://c-lonati.github.io/TechPcs/login.html');
    $('#langBox').load('https://c-lonati.github.io/TechPcs/lang.html');
    $('#header').load('https://c-lonati.github.io/TechPcs/header.html');
    $('#footer').load('https://c-lonati.github.io/TechPcs/footer.html');
$search = $('<div id="searchBox"><form method="post"><p class="underLine"><input type="search"><input type="image" src="images/search.svg" alt="찾아보기"></p><p class="gray"><a href="error404.html">팻 겔싱어 사임</a><img src="images/xBtn.png"></p><p class="gray"><a href="error404.html">인텔 cpu</a><img src="images/xBtn.png"></p><p class="gray"><a href="error404.html">리사 수</a><img src="images/xBtn.png"></p><p class="gray"><a href="error404.html">RTX 5090</a><img src="images/xBtn.png"></p></form></div>');
$modal = $('<div id="modal"></div>');
    $searchToggle='off';
    $('#login').hide();
    $('#langBox').hide();
    $(document).on('click', '#headLang', function (){
        $('#langBox').show();
        if ($('#langBox').hasClass('lbHead')) {
            $('#langBox').removeClass('lbHead');
            $('#langBox').hide();
        } else $('#langBox').addClass('lbHead');
    });
    $(document).on('click','#langBox img', function () {
        $('#headLang').html('');
        $(this).clone().appendTo('#headLang');
        $('#langBox').removeClass('lbHead');
        $('#langBox').hide();
    });
    $(document).on('click', '.login' ,function(){
        $modal.prependTo($('body'));
        $('#login').show();
    });
    $(document).on('click', '#header .search', function () {
        if ($searchToggle == 'off') {
            $search.prependTo($('#header'));
            $searchToggle = 'on';
        }
        else {
            $search.detach();
            $searchToggle = 'off';
        }
    });
    $(document).on('click', '#header>.hamburger', function () {
        $('.slideLnb').html('');
        $lnbInner = $('.lnb').clone();
        $('.slideLnb').html($lnbInner);
        $modal.prependTo($('body'));
        $('#slideMenu').css('left', '0');
    });
    let $lastScrollY = 0;
    $(window).on('scroll', function(){
        let scrollY = window.scrollY;
        let scrollDown = scrollY < $lastScrollY;
        if(scrollY<500){
            $('#header').show();
        }else if (scrollDown && scrollY) {
            $('#header').slideDown();
        } else {
            $('#header').slideUp();
        }
        $lastScrollY = scrollY;
    });
    $modal.on('click' ,function(){
        $modal.detach();
        $('#login').hide();
        $('#slideMenu').css('left', '-80%');
    });
    let winWidth = $(window).width();
    if (winWidth > 1199) {
        $(document).on('click', '.formToggle', function () {
            if ($('.loginTextBox').hasClass('textBoxRight')) {
                $('.loginTextBox').removeClass('textBoxRight');
                $('.loginTextBox').addClass('textBoxLeft');
                $('.loginTextRight').addClass('hidden');
                $('.loginTextLeft').removeClass('hidden');
            } else {
                $('.loginTextBox').removeClass('textBoxLeft');
                $('.loginTextBox').addClass('textBoxRight');
                $('.loginTextLeft').addClass('hidden');
                $('.loginTextRight').removeClass('hidden');
            }
        });
    }
});
$(document).ready(function(){
    $('#login').load('https://c-lonati.github.io/TechPcs/login.html');
    $('#langBox').load('https://c-lonati.github.io/TechPcs/lang.html');
    $('#header').load('https://c-lonati.github.io/TechPcs/header.html');
    $('#footer').load('https://c-lonati.github.io/TechPcs/footer.html');
$search = $('<div id="searchBox"><form method="post"><p class="underLine"><input type="search"><input type="image" src="images/search.svg" alt="찾아보기"></p></form></div>');
$modal = $('<div id="modal"></div>');
    $searchToggle='off';
    $('#header>.logo').ready(function(){
        $('#langBox').hide()
        $('#headLang').on('click',function(){
            $('#langBox').show();
            if($('#langBox').hasClass('lbHead')){
                $('#langBox').removeClass('lbHead');
                $('#langBox').hide();
            }else $('#langBox').addClass('lbHead');
        });
        $('.login').on('click focus' ,function(){
            $modal.prependTo($('body'));
            $('#login').removeClass('hidden');
        });
        $('.search').on('click focus' ,function(){
            if($searchToggle=='off'){
                $search.prependTo($('#header'));
                $searchToggle='on';
            }
            else{
                $search.detach();
                $searchToggle='off';
            } 
        });
        $('#langBox img').on('click focus', function(){
            $('#headLang').html('');
            $(this).clone().appendTo('#headLang');
            $('#langBox').removeClass('lbHead');
            $('#langBox').hide();
        });
        $lastScrollY = 0;
        $(window).on('scroll', function(){
            const scrollY = window.scrollY;
            const scrollDown = scrollY < $lastScrollY;
            if (scrollDown) {
                $('#header').slideDown();
            } else {
                $('#header').slideUp();
            }
            $lastScrollY = scrollY;
        });
    });
    $modal.on('click focus' ,function(){
        $modal.detach();
        $('#login').addClass('hidden');
    });
    let winWidth = $(window).width();
    if(winWidth > 1199){
        $('.formToggle').ready(function(){
            $('.formToggle').on('click focus', function(){
                if($('.loginTextBox').hasClass('textBoxRight')){
                    $('.loginTextBox').removeClass('textBoxRight');
                    $('.loginTextBox').addClass('textBoxLeft');
                    $('.loginTextRight').addClass('hidden');
                    $('.loginTextLeft').removeClass('hidden');
                }else {
                    $('.loginTextBox').removeClass('textBoxLeft');
                    $('.loginTextBox').addClass('textBoxRight');
                    $('.loginTextLeft').addClass('hidden');
                    $('.loginTextRight').removeClass('hidden');
                }
            });
        });
    }
});
$(document).ready(function(){
    $('#header').load('https://c-lonati.github.io/TechPcs/header.html');
    $('#footer').load('https://c-lonati.github.io/TechPcs/footer.html');
    $('#login').load('https://c-lonati.github.io/TechPcs/login.html');
    $('.langBox').load('https://c-lonati.github.io/TechPcs/lang.html');
$search = $('<div id="searchBox"><form method="post"><p class="underLine"><input type="search"><input type="image" src="images/search.svg" alt="찾아보기"></p></form></div>');
$modal = $('<div id="modal"></div>');
    let searchToggle='off';
    $('#header>.logo').ready(function(){
        $('#headLang').on('click',function(){
            $('.langBox').removeClass('lbFoot hidden');
            if($('.langBox').hasClass('lbHead')){
                $('.langBox').removeClass('lbHead');
                $('.langBox').addClass('hidden');
            }else $('.langBox').addClass('lbHead');
        });
        $('.login').on('click' ,function(){
            $modal.prependTo($('body'));
            $('#login').removeClass('hidden');
        });
        $('.search').on('click' ,function(){
            if(searchToggle=='off'){
                $search.prependTo($('#header'));
                searchToggle='on';
            }
            else{
                $search.detach();
                searchToggle='off';
            } 
        });
        $('.langBox img').on('click', function(){
            alert('클릭');
        });
    });
    $modal.on('click' ,function(){
        $modal.detach();
        $('#login').addClass('hidden');
    });
    $('.formToggle').ready(function(){
        $('.formToggle').on('click', function(){
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
    $('#footLang').ready(function(){
        $('#footLang').on('click',function(){
            $('.langBox').removeClass('lbHead hidden');
            if($('.langBox').hasClass('lbFoot')){
                $('.langBox').removeClass('lbFoot');
                $('.langBox').addClass('hidden');
            }else $('.langBox').addClass('lbFoot');
        });
    });
});
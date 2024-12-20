$(document).ready(function(){
    $('#header').load('https://c-lonati.github.io/TechPcs/header.html');
    $('#footer').load('https://c-lonati.github.io/TechPcs/footer.html');
    $lang = $('<div class="langBox"><ul><li><img src="images/lang1.svg" alt="한국어">한국어</img></li><li><img src="images/lang2.svg" alt="중국어">中文</img></li><li><img src="images/lang3.svg" alt="일본어">日語</img></li><li><img src="images/lang4.svg" alt="영어(미국)">English(US)</img></li><li><img src="images/lang5.svg" alt="영어(영국)">English(UK)</img></li><li><img src="images/lang6.svg" alt="프랑스어">French</img></li><li><img src="images/lang7.svg" alt="스페인어">Castellano</img></li><li><img src="images/lang8.svg" alt="힌디어">Hindi</img></li></ul></div>');
    $(document).on('click', $('.lang1>img') ,function(){
        $lang.prependTo($('#header'));
        $lang.css('top', '80px');
    });
    $(document).on('click', $('.lang2>img') ,function(){
        $lang.prependTo($('#footer'));
        $lang.css('bottom', '100px');
    });
    /*$(document).on('click', $('.login') ,function(){
        console.log('클릭');
    });
    $(document).on('click', $('.search') ,function(){
        console.log('클릭');
    });*/
});
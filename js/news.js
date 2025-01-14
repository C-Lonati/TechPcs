$(function(){
    if($(window).width()>1199){
        $(window).on('scroll', function(){
            if(window.scrollY>100)
            $('#otherNews').css('top',50 + window.scrollY + 'px');
            else $('#otherNews').css('top','180px');
        });
    }
    $('.category>li').on('click', function(){
        $('.cateSelect').removeClass('cateSelect');
        $(this).addClass('cateSelect');
        $cate = $(this).text();
        $('.cate').html($cate);
        $('.hardwareNews .news').hide();
        switch($cate){
            case '전체보기' : $('.hardwareNews .news').show();
            break;
            case '업계동향' : $('.hardwareNews .news.trends').show();
            break;
            case 'CPU' : $('.hardwareNews .news.cpu').show();
            break;
            case 'GPU' : $('.hardwareNews .news.gpu').show();
            break;
            case '메인보드' : $('.hardwareNews .news.mainBoard').show();
            break;
            case 'PSU' : $('.hardwareNews .news.psu').show();
            break;
            case 'RAM' : $('.hardwareNews .news.ram').show();
            break;
            case '저장장치' : $('.hardwareNews .news.memory').show();
            break;
        }
    });
});
$(function(){
    let startX, endX;
    let $winWidth = $(window).width();
    if ($winWidth < 768) {
        //저사양(게이밍) cpu 좌우 슬라이드 제어
        let temp = 0;
        $('.mainstreamCpu, .mainstreamCpu *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('.mainstreamCpu, .mainstreamCpu *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = (startX - endX);
            $main = $('.mainstreamCpu');
            temp = temp - $distance;
            $main.css('left', temp);
            if (temp > 0) {
                $main.css('left', '0');
                temp = 0;
            } else if (temp < $main.parent().width() - $main.width()) {
                $main.css('left', $main.parent().width() - $main.width() + 'px');
                temp = $main.parent().width() - $main.width();
            }
        });
    }
    //더보기 버튼 제어
    $('.moreBtn').on('click', function(){
        if($(this).hasClass('hide')){
            $(this).parent().find('.hidden').removeClass('block');
            $(this).parent().find('.line').addClass('noneLine');
            $(this).removeClass('hide');
            $(this).text('더보기');
        }
        else{
            $(this).parent().find('.hidden').addClass('block');
            $(this).parent().find('.line').removeClass('noneLine');
            $(this).addClass('hide');
            $(this).text('접기');
        }

    });
});
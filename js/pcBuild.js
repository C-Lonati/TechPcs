$(function(){
    var getData = [];
    let startX, endX;
    let $winWidth = $(window).width();
    if ($winWidth < 1200){
        let $partsTemp = 0;
        $('#part, #part *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#part, #part *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = startX - endX;
            if($distance < -90)
                $distance = -90;
            else if($distance > 90)
                $distance = 90;
            $parts = $('#part>.part');
            $partsTemp = $partsTemp - $distance;
            $parts.css('left', $partsTemp + 'px');
            if ($partsTemp > 0) {
                $parts.css('left', '0');
                $partsTemp = 0;
            } else if ($partsTemp < $parts.parent().width() - $parts.width()) {
                $parts.css('left', $parts.parent().width() - $parts.width());
                $partsTemp = $parts.parent().width() - $parts.width();
            }
        });
        $('#part>.part>li').on('click tap', function(){
            $('#part>.part>li').removeClass('partSelect');
            $(this).addClass('partSelect');
            getData = [];
            $('#classification li').removeClass('liSelect');
        });
    }else {
        $('#partMenu>.partMenu>li').on('click tap', function(){
            $('#partMenu>.partMenu>li').removeClass('partSelect');
            $(this).addClass('partSelect');
            getData = [];
            $('#classification li').removeClass('liSelect');
        });
    }
    $('#classification li').on('click tap', function(){
        if($(this).hasClass('liSelect')){
            $(this).removeClass('liSelect');
            for(let i = 0; i < getData.length; i++) {
                if (getData[i] == $(this).text()) { //누른 버튼과 일치하는 텍스트 찾기
                    getData.splice(i, 1); //일치하는 텍스트 삭제
                    i--; //배열 인덱스넘버 재정렬
                }
            }
        }else {
            $(this).addClass('liSelect');
            getData[getData.length] = $(this).text();
        }
    });
});
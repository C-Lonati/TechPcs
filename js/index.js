$(function(){
    let startX, endX;
    let $winWidth = $(window).width();
    let $bannerPrev, $bannerNext, $bannerNow;
    let $bannerLen = $('#banner .bannerImg').length;
    let $bannerIndex = 1;
    
    //배너 왼쪽->오른쪽 이동 함수
    let bannerLeft = function() {
        if(!banner) return 0;
        $bannerNow = $('#banner .img' + $bannerIndex);
        $bannerNext = $('#banner .img' + $bannerIndex + 1);
        $bannerIndex--;
        if ($bannerIndex <= 0) {
            $bannerIndex = $bannerLen;
            $bannerPrev = $('#banner .img' + $bannerIndex);
            $bannerPrev.css('left', '-100%');
        } else {
            $bannerPrev = $('#banner .img' + $bannerIndex);
            $bannerPrev.css('left', '-100%');
        }
        $bannerNow.animate({
            'left': '0',
            'left': '100%',
        }, 1000);
        $bannerPrev.animate({
            'left': '-100%',
            'left': '0',
        }, 999);
    }

    //배너 오른쪽->왼쪽 이동 함수
    let bannerRight = function() {
        if(!banner) return 0;
        $bannerNow = $('#banner .img' + $bannerIndex);
        $bannerIndex++;
        if ($bannerIndex > $bannerLen) {
            $bannerIndex = 1;
            $bannerNext = $('#banner .img' + $bannerIndex);
            $bannerNext.css('left', '100%');
        } else {
            $bannerNext = $('#banner .img' + $bannerIndex);
            $bannerNext.css('left', '100%');
        }
        $bannerNow.animate({
            'left': '0',
            'left': '-100%',
        }, 1000);
        $bannerNext.animate({
            'left': '100%',
            'left': '0',
        }, 999);
    }
    //배너 자동실행 관련 기능
    let bannerMove = setInterval(bannerRight, 3000);
    $('#banner').hover(function(){
        clearInterval(bannerMove);
    },function(){
        bannerMove = setInterval(bannerRight, 3000);
    });

    //데스크탑 해상도 설정
    if ($winWidth > 1199) {
        $('#banner .prev').on('click', bannerLeft);
        $('#banner .next').on('click', bannerRight);
        //버튼누르면 버튼에 맞게 배너 슬라이드
        $('#pcBuild .buildBtn img, .bannerBtn').on('click', ()=>{
            window.open('pcBuild.html','bookPage', 'width = 1400px, height = 950px, scrollbars=no location = no, toolbar = no, statusbar = no');
        });
        //성능대별 GPU추천 자세히보기 여닫기 제어
        $('.recomnGpu').on('click', function () {
            if ($(this).hasClass('gpuToggle')) {
                $(this).removeClass('gpuToggle');
                $(this).find('.hidden').removeClass('block');
            } else {
                $(this).addClass('gpuToggle');
                $(this).find('.hidden').addClass('block');
            }
        });

        //PC주요 부품 슬라이드 버튼 제어
        let mainPartsLeft = 0;
        $mainParts = 1200 - $('.mainParts').width();
        $('#mainParts>.next').on('click', function () {
            mainPartsLeft -= 1200;
            if (mainPartsLeft < $mainParts) mainPartsLeft = $mainParts;
            $('.mainParts').css('left', mainPartsLeft + 'px');
        });
        $('#mainParts>.prev').on('click', function () {
            mainPartsLeft += 1200;
            if (mainPartsLeft > 0) mainPartsLeft = 0;
            $('.mainParts').css('left', mainPartsLeft + 'px');
        });

        
        //PC주변기기 슬라이드 버튼 제어
        let periLeft = 0;
        $peri = 1200 - $('.peripherals').width();
        $('#peripherals>.next').on('click', function () {
            periLeft -= 1200;
            if (periLeft < $peri) periLeft = $peri;
            $('.peripherals').css('left', periLeft + 'px');
        });
        $('#peripherals>.prev').on('click', function () {
            periLeft += 1200;
            if (periLeft > 0) periLeft = 0;
            $('.peripherals').css('left', periLeft + 'px');
        });
    } else if ($winWidth > 767) { //tablet
        //배너 스와이프 감지
        $('#banner *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#banner *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = (startX - endX);
            if($distance >= 100){
                bannerRight();
            }
            if($distance <= -100){
                bannerLeft();
            }
        });

        //pc빌드 클릭 감지 및 제어
        $('#pcBuild .buildBtn, .bannerBtn').on('click', function(){
            window.open('pcBuild.html');
        });

        //뉴스 클릭시 내용 더보기 제어
        $('.news').on('click', function () {
            if ($(this).hasClass('newsFocus')) {
                $(this).removeClass('newsFocus');
            } else $(this).addClass('newsFocus');
        });

        //왼쪽 PC빌드 섹션 위치제어
        $(window).on('scroll', function () {
            if (window.scrollY < 2700) {
                $('#pcBuild').css('top', '2200px');
            } else {
                $('#pcBuild').css('top', window.scrollY-500 + 'px');
            }
        });

        //주요부품 좌우 슬라이드 제어
        $partsTemp = 0;
        $('#mainParts, #mainParts *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#mainParts, #mainParts *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = (startX - endX)/5;
            $parts = $('#mainParts>.mainParts');
            $partsTemp = $partsTemp - $distance;
            $parts.css('left', $partsTemp);
            if ($partsTemp > 0) {
                $parts.css('left', '0');
                $partsTemp = 0;
            } else if ($partsTemp < $parts.parent().width() - $parts.width()) {
                $parts.css('left', $parts.parent().width() - $parts.width());
                $partsTemp = $parts.parent().width() - $parts.width();
            }
        });
        
        //주변기기 좌우 슬라이드 제어
        $periTemp = 0;
        $('#peripherals, #peripherals *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#peripherals, #peripherals *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = (startX - endX)/5;
            $peri = $('#peripherals>.peripherals');
            $periTemp = $periTemp - $distance;
            $peri.css('left', $periTemp);
            if ($periTemp > 0) {
                $peri.css('left', '0');
                $periTemp = 0;
            } else if ($periTemp < $peri.parent().width() - $peri.width()) {
                $peri.css('left', $peri.parent().width() - $peri.width());
                $periTemp = $peri.parent().width() - $peri.width();
            }
        });
    } else if ($winWidth < 768) { //mobile
        //배너 슬라이드 감지 및 제어
        $('#banner *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#banner *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = (startX - endX);
            if($distance >= 100){
                bannerRight();
            }
            if($distance <= -100){
                bannerLeft();
            }
        });
        $('#pcBuild .buildBtn img, .bannerBtn').on('click', function(){
            window.open('pcBuild.html');
        });
        //뉴스 자세히보기 제어
        $('.news').on('click', function () {
            if ($(this).hasClass('newsFocus')) {
                $(this).removeClass('newsFocus');
            } else $(this).addClass('newsFocus');
        });
        //상단 슬라이드 메뉴 제어
        let temp = 0;
        $('#subMenu, #subMenu *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#subMenu, #subMenu *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = (startX - endX)/3;
            $snb = $('#subMenu>.snb');
            temp = temp - $distance;
            $snb.css('left', temp);
            if (temp > 0) {
                $snb.css('left', '0');
                temp = 0;
            } else if (temp < $snb.parent().width() - $snb.width()) {
                $snb.css('left', $snb.parent().width() - $snb.width());
                temp = $snb.parent().width() - $snb.width();
            }
        });
        //Cpu섹션 슬라이드 제어
        $cpuTemp = 0;
        $('#recomnCpu, #recomnCpu *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#recomnCpu, #recomnCpu *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = (startX - endX)/3;
            $cpu = $('#recomnCpu>.recomnCpu');
            $cpuTemp = $cpuTemp - $distance;
            $cpu.css('left', $cpuTemp);
            if ($cpuTemp > 0) {
                $cpu.css('left', '0');
                $cpuTemp = 0;
            } else if ($cpuTemp < $cpu.width() * -1.1) {
                $cpu.css('left', $cpu.width() * -1.1);
                $cpuTemp = $cpu.width() * -1.1;
            }
        });
        //주요부품 슬라이드 제어
        let $partsTemp = 0;
        $('#mainParts, #mainParts *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#mainParts, #mainParts *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = startX - endX;
            if($distance < -60)
                $distance = -60;
            else if($distance > 60)
                $distance = 60;
            $parts = $('#mainParts>.mainParts');
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
        //주변기기 슬라이드 제어
        $periTemp = 0;
        $('#peripherals, #peripherals *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#peripherals, #peripherals *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            $distance = startX - endX;
            if($distance < -70)
                $distance = -70;
            else if($distance > 70)
                $distance = 70;
            $peri = $('#peripherals>.peripherals');
            $periTemp = $periTemp - $distance;
            $peri.css('left', $periTemp + 'px');
            if ($periTemp > 0) {
                $peri.css('left', '0');
                $periTemp = 0;
            } else if ($periTemp < $peri.parent().width() - $peri.width()) {
                $peri.css('left', $peri.parent().width() - $peri.width() + 'px');
                $periTemp = $peri.parent().width() - $peri.width();
            }
        });
    }
});
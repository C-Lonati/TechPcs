$(document).ready(function () {
    let $winWidth = $(window).width();
    if ($winWidth > 1199) {
        $('.recomnGpu').on('click', function () {
            if ($(this).hasClass('gpuToggle')) {
                $(this).removeClass('gpuToggle');
                $(this).find('.hidden').removeClass('block');
            } else {
                $(this).addClass('gpuToggle');
                $(this).find('.hidden').addClass('block');
            }
        });
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
    } else if ($winWidth < 768){
        $('.news>article').on('click tap', function () {
            if ($(this).hasClass('newsFocus')) {
                $(this).removeClass('newsFocus');
            } else $(this).addClass('newsFocus');
        });
        let temp = 0;
        $('#subMenu>.snb').swipe({swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == 'left') {
                    temp = temp - distance;
                    $(this).css('left', temp);
                } else if (direction == "right") {
                    temp = temp + distance;
                    $(this).css('left', temp);
                }
                if(temp>0){
                    $(this).css('left', '0');
                    temp = 0;
                }else if(temp<$(this).parent().width() - $(this).width()){
                    $(this).css('left', $(this).parent().width() - $(this).width());
                    temp = $(this).parent().width() - $(this).width();
                }
            },
            threshold: 0
        });
        $cpuTemp = 0;
        $('#recomnCpu>.recomnCpu').swipe({swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                console.log('cpuswipe');
                if (direction == 'left') {
                    $cpuTemp = $cpuTemp - distance;
                    $(this).css('left', $cpuTemp);
                } else if (direction == "right") {
                    $cpuTemp = $cpuTemp + distance;
                    $(this).css('left', $cpuTemp);
                }
                if($cpuTemp>0){
                    $(this).css('left', '0');
                    $cpuTemp = 0;
                }else if($cpuTemp<$(this).parent().width() - $(this).width()){
                    $(this).css('left', $(this).parent().width() - $(this).width());
                    $cpuTemp = $(this).parent().width() - $(this).width();
                }
                console.log(temp);
            },
            threshold: 0
        });
        /*$('#recomnCpu>.recomnCpu *').swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                console.log('swipe');
                $cpu = $('#recomnCpu>.recomnCpu *');
                if (direction == 'left') {
                    $cpuTemp = $cpuTemp - distance;
                    $cpu.css('left', $cpuTemp);
                } else if (direction == "right") {
                    $cpuTemp = $cpuTemp + distance;
                    $cpu.css('left', $cpuTemp);
                }
                if($cpuTemp>0){
                    $cpu.css('left', '0');
                    $cpuTemp = 0;
                }else if($cpuTemp<$cpu.parent().width() - $cpu.width()){
                    $cpu.css('left', $cpu.parent().width() - $cpu.width());
                    $cpuTemp = $cpu.parent().width() - $cpu.width();
                }
                console.log(temp);
            },
            threshold: 0
        });*/
        
        $partsTemp = 0;
        $('#mainParts>.mainParts').swipe({swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                console.log('partsswipe');
                if (direction == 'left') {
                    $partsTemp = $partsTemp - distance;
                    $(this).css('left', $partsTemp);
                } else if (direction == "right") {
                    $partsTemp = $partsTemp + distance;
                    $(this).css('left', $partsTemp);
                }
                if($partsTemp>0){
                    $(this).css('left', '0');
                    $partsTemp = 0;
                }else if($partsTemp<$(this).parent().width() - $(this).width()){
                    $(this).css('left', $(this).parent().width() - $(this).width());
                    $partsTemp = $(this).parent().width() - $(this).width();
                }
                console.log(temp);
            },
            threshold: 0
        });
        
        $periTemp = 0;
        $('#peripherals>.peripherals').swipe({swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                console.log('swipe');
                if (direction == 'left') {
                    $periTemp = $periTemp - distance;
                    $(this).css('left', $periTemp);
                } else if (direction == "right") {
                    $periTemp = $periTemp + distance;
                    $(this).css('left', $periTemp);
                }
                if($periTemp>0){
                    $(this).css('left', '0');
                    $periTemp = 0;
                }else if($periTemp<$(this).parent().width() - $(this).width()){
                    $(this).css('left', $(this).parent().width() - $(this).width());
                    $periTemp = $(this).parent().width() - $(this).width();
                }
                console.log(temp);
            },
            threshold: 0
        });
    }
});
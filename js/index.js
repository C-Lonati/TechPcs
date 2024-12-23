$(document).ready(function () {
    let startX, endX;
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
    } else if ($winWidth > 767) { //tablet
        $('.news>article').on('click tap', function () {
            if ($(this).hasClass('newsFocus')) {
                $(this).removeClass('newsFocus');
            } else $(this).addClass('newsFocus');
        });
        $('#pcBuild').css('top', '2800px');
        $(window).on('scroll', function () {
            if (window.scrollY < 2600) {
                $('#pcBuild').css('top', '2800px');
            } else {
                $('#pcBuild').css('top', (window.scrollY + 200) + 'px');
            }
        });
        $partsTemp = 0;
        $('#mainParts, #mainParts *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#mainParts, #mainParts *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            distance = (startX - endX)/3;
            $parts = $('#mainParts>.mainParts');
            $partsTemp = $partsTemp - distance;
            $parts.css('left', $partsTemp);
            if ($partsTemp > 0) {
                $parts.css('left', '0');
                $partsTemp = 0;
            } else if ($partsTemp < $parts.parent().width() - $parts.width()) {
                $parts.css('left', $parts.parent().width() - $parts.width());
                $partsTemp = $parts.parent().width() - $parts.width();
            }
        });
        $periTemp = 0;
        $('#peripherals, #peripherals *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#peripherals, #peripherals *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            distance = (startX - endX)/3;
            $peri = $('#peripherals>.peripherals');
            $periTemp = $periTemp - distance;
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
        $('.news>article').on('click tap', function () {
            if ($(this).hasClass('newsFocus')) {
                $(this).removeClass('newsFocus');
            } else $(this).addClass('newsFocus');
        });
        let temp = 0;
        $('#subMenu, #subMenu *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#subMenu, #subMenu *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            distance = (startX - endX)/3;
            $snb = $('#subMenu>.snb');
            temp = temp - distance;
            $snb.css('left', temp);
            if (temp > 0) {
                $snb.css('left', '0');
                temp = 0;
            } else if (temp < $snb.parent().width() - $snb.width()) {
                $snb.css('left', $snb.parent().width() - $snb.width());
                temp = $snb.parent().width() - $snb.width();
            }
        });
        $cpuTemp = 0;
        $('#recomnCpu, #recomnCpu *').on('touchstart', function (event) {
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $('#recomnCpu, #recomnCpu *').on('touchend', function (event) {
            endX = event.originalEvent.changedTouches[0].screenX;
            distance = (startX - endX)/3;
            $cpu = $('#recomnCpu>.recomnCpu');
            $cpuTemp = $cpuTemp - distance;
            $cpu.css('left', $cpuTemp);
            if ($cpuTemp > 0) {
                $cpu.css('left', '0');
                $cpuTemp = 0;
            } else if ($cpuTemp < $cpu.width() * -1.1) {
                $cpu.css('left', $cpu.width() * -1.1);
                $cpuTemp = $cpu.width() * -1.1;
            }
            $partsTemp = 0;
            $('#mainParts, #mainParts *').on('touchstart', function (event) {
                startX = event.originalEvent.changedTouches[0].screenX;
            });
            $('#mainParts, #mainParts *').on('touchend', function (event) {
                endX = event.originalEvent.changedTouches[0].screenX;
                distance = (startX - endX)/3;
                $parts = $('#mainParts>.mainParts');
                $partsTemp = $partsTemp - distance;
                $parts.css('left', $partsTemp);
                if ($partsTemp > 0) {
                    $parts.css('left', '0');
                    $partsTemp = 0;
                } else if ($partsTemp < $parts.parent().width() - $parts.width()) {
                    $parts.css('left', $parts.parent().width() - $parts.width());
                    $partsTemp = $parts.parent().width() - $parts.width();
                }
            });
            $periTemp = 0;
            $('#peripherals, #peripherals *').on('touchstart', function (event) {
                startX = event.originalEvent.changedTouches[0].screenX;
            });
            $('#peripherals, #peripherals *').on('touchend', function (event) {
                endX = event.originalEvent.changedTouches[0].screenX;
                distance = (startX - endX)/3;
                $peri = $('#peripherals>.peripherals');
                $periTemp = $periTemp - distance;
                $peri.css('left', $periTemp);
                if ($periTemp > 0) {
                    $peri.css('left', '0');
                    $periTemp = 0;
                } else if ($periTemp < $peri.parent().width() - $peri.width()) {
                    $peri.css('left', $peri.parent().width() - $peri.width());
                    $periTemp = $peri.parent().width() - $peri.width();
                }
            });
        });
    }
});
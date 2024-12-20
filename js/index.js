$(document).ready(function(){
    var winWidth = $(window).width();
    if(winWidth > 1199){
        $('.recomnGpu').on('click', function(){
            if($(this).hasClass('gpuToggle')){
                $(this).removeClass('gpuToggle');
                $(this).find('.hidden').removeClass('block');
            }else {
                $(this).addClass('gpuToggle');
                $(this).find('.hidden').addClass('block');
            }
        });
        let mainPartsLeft=0;
        $mainParts = 1200-$('.mainParts').width();
        $('#mainParts>.next').on('click', function(){
            mainPartsLeft-=1200;
            if(mainPartsLeft<$mainParts) mainPartsLeft = $mainParts;
            $('.mainParts').css('left',mainPartsLeft + 'px');
        });
        $('#mainParts>.prev').on('click', function(){
            mainPartsLeft+=1200;
            if(mainPartsLeft>0) mainPartsLeft=0;
            $('.mainParts').css('left',mainPartsLeft + 'px');
        });
        let periLeft=0;
        $peri = 1200-$('.peripherals').width();
        $('#peripherals>.next').on('click', function(){
            periLeft-=1200;
            if(periLeft<$peri) periLeft = $peri;
            $('.peripherals').css('left',periLeft + 'px');
        });
        $('#peripherals>.prev').on('click', function(){
            periLeft+=1200;
            if(periLeft>0) periLeft=0;
            $('.peripherals').css('left',periLeft + 'px');
        });
    }else {
        
    }
});
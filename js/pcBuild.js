$(function(){
    let $cpuMaker = [], $gpuMaker = [];
    let cpuCompnay = [], gpuCompnay = [];
    let cpuProcess = [], gpuProcess = [];
    let cpuCore = [];
    function cpuMake(){
        for (let i = 0; i < cpu.length; i++) {
            $cpuMaker[i] = $(`
                <li class="underLine cpu ${cpu[i].company} process${cpu[i].process} core${cpu[i].core}">
                    <img src="${cpu[i].img}" alt="제품사진">
                    <h3 class="partsName">${cpu[i].partsName}</h3>
                    <p class="specs">${cpu[i].specs}</p>
                    <h4 class="price">${(cpu[i].price).toLocaleString()}</h4>
                    <span>원</span>
                    <img src="images/highBtn.png" alt="장바구니">
                </li>`
            );
            $('.partsList').append($cpuMaker[i]);
        }
    }
    function gpuMake(){
        for (let i = 0; i < gpu.length; i++) {
            $gpuMaker[i] = $(`
                <li class="underLine gpu ${gpu[i].company} process${gpu[i].process}">
                    <img src="${gpu[i].img}" alt="제품사진">
                    <h3 class="partsName">${gpu[i].partsName}</h3>
                    <p class="specs">${gpu[i].specs}</p>
                    <h4 class="price">${(gpu[i].price).toLocaleString()}</h4>
                    <span>원</span>
                    <img src="images/highBtn.png" alt="장바구니">
                </li>`
            );
            $('.partsList').append($gpuMaker[i]);
        }
    }
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
        $('#part>.part>li').on('click', function(){
            $('#part>.part>li').removeClass('partSelect');
            $(this).addClass('partSelect');
            getData = [];
            $('#classification li').removeClass('liSelect');
            $text = $(this).text();
            $('.partsList *').remove();
            switch($text){
                case 'CPU': cpuMake(); break;
                case 'GPU': gpuMake(); break;
                default : $('.partsList').append(`<p>제품이 없습니다</p>`);
            }
        });
    }else {
        $('#partMenu>.partMenu>li').on('click', function(){
            $('#partMenu>.partMenu>li').removeClass('partSelect');
            $(this).addClass('partSelect');
            getData = [];
            $('#classification li').removeClass('liSelect');
            $text = $(this).text();
            $('.partsList *').remove();
            switch($text){
                case 'CPU': cpuMake(); break;
                case 'GPU': gpuMake(); break;
                default : $('.partsList').append(`<p>제품이 없습니다</p>`);
            }
        });
    }
    $('#classification li').on('click', function(){
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
    cpuMake();
});
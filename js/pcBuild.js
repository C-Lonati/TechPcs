$(function(){
    let $cpuMaker = [], $gpuMaker = [];
    let cpuCompnay = [], gpuCompnay = [];
    let cpuProcess = [], gpuProcess = [];
    let cpuCore = [];
    let totalPrice = 0, price = 0;
    let cartCount = 0;
    $('#modal').hide();
    function cpuMake(){
        for (let i = 0; i < cpu.length; i++) {
            $cpuMaker[i] = $(`
                <li class="underLine cpu ${cpu[i].distinguished} ${cpu[i].company} process${cpu[i].process} core${cpu[i].core}" data-price="${cpu[i].price}">
                    <img src="${cpu[i].img}" alt="제품사진">
                    <h3 class="partsName">${cpu[i].partsName}</h3>
                    <p class="specs">${cpu[i].specs}</p>
                    <h4 class="price">${(cpu[i].price).toLocaleString()}</h4>
                    <span>원</span>
                    <img src="images/highBtn.png" class="highBtn" alt="장바구니">
                </li>`
            );
            $('#partsList .partsList').append($cpuMaker[i]);
            cpuCompnay[i] = cpu[i].company;
            cpuProcess[i] = cpu[i].process;
            cpuCore[i] = cpu[i].core;
        }
        let set = new Set(cpuCompnay);
        cpuCompnay = Array.from(set);
        set = new Set(cpuProcess);
        cpuProcess = (Array.from(set)).sort();
        set = new Set(cpuCore);
        cpuCore = (Array.from(set)).sort((a, b) => a - b);
        let classification = [], classificationMaker;
        let category = ['company', 'process', 'core'];
        $('#classification').find('*').remove();
        for (let j = 0; j < cpuCompnay.length; j++) {
            if (classification[0])
                classification[0] = classification[0] + `<li class="${cpuCompnay[j]}">${cpuCompnay[j]}</li>`;
            else classification[0] = `<li class="${cpuCompnay[j]}">${cpuCompnay[j]}</li>`;
        }
        for (let j = 0; j < cpuProcess.length; j++) {
            if (classification[1])
                classification[1] = classification[1] + `<li class="${cpuProcess[j]}">${cpuProcess[j]}</li>`;
            else classification[1] = `<li class="${cpuProcess[j]}">${cpuProcess[j]}</li>`;
        }
        for (let j = 0; j < cpuCore.length; j++) {
            if (classification[2])
                classification[2] = classification[2] + `<li class="${cpuCore[j]}">${cpuCore[j]}</li>`;
            else classification[2] = `<li class="${cpuCore[j]}">${cpuCore[j]}</li>`;
        }
        for (let i = 0; i < category.length; i++) {
            classificationMaker = $(`
                <div class="underLine ${category[i]}">
                    <h4 class="col2">${category[i]}</h4>
                    <ul class="col10">
                    ${classification[i]}
                    </ul>
                </div>
            `);
            $('#classification').append(classificationMaker);
        }
    }
    function gpuMake(){
        for (let i = 0; i < gpu.length; i++) {
            $gpuMaker[i] = $(`
                <li class="underLine gpu ${gpu[i].company} process${gpu[i].process}" data-price="${gpu[i].price}">
                    <img src="${gpu[i].img}" alt="제품사진">
                    <h3 class="partsName">${gpu[i].partsName}</h3>
                    <p class="specs">${gpu[i].specs}</p>
                    <h4 class="price">${(gpu[i].price).toLocaleString()}</h4>
                    <span>원</span>
                    <img src="images/highBtn.png" class="highBtn" alt="장바구니">
                </li>`
            );
            $('#partsList .partsList').append($gpuMaker[i]);
            gpuCompnay[i] = gpu[i].company;
            gpuProcess[i] = gpu[i].process;
        }
        let set = new Set(gpuCompnay);
        gpuCompnay = Array.from(set);
        set = new Set(gpuProcess);
        gpuProcess = (Array.from(set)).sort();
        
        let classification = [], classificationMaker;
        let category = ['company', 'process'];
        $('#classification').find('*').remove();
        for (let j = 0; j < gpuCompnay.length; j++) {
            if (classification[0])
                classification[0] = classification[0] + `<li class="${gpuCompnay[j]}">${gpuCompnay[j]}</li>`;
            else classification[0] = `<li class="${gpuCompnay[j]}">${gpuCompnay[j]}</li>`;
        }
        for (let j = 0; j < gpuProcess.length; j++) {
            if (classification[1])
                classification[1] = classification[1] + `<li class="${gpuProcess[j]}">${gpuProcess[j]}</li>`;
            else classification[1] = `<li class="${gpuProcess[j]}">${gpuProcess[j]}</li>`;
        }
        for (let i = 0; i < category.length; i++) {
            classificationMaker = $(`
                <div class="underLine ${category[i]}">
                    <h4 class="col2">${category[i]}</h4>
                    <ul class="col10">
                    ${classification[i]}
                    </ul>
                </div>
            `);
            $('#classification').append(classificationMaker);
        }
    }
    //var getData = [];
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
            //getData = [];
            //$('#classification li').removeClass('liSelect');
            $text = $(this).text();
            $('#partsList .partsList *').remove();
            switch($text){
                case 'CPU': cpuMake(); break;
                case 'GPU': gpuMake(); break;
                default : $('#partsList .partsList').append(`<p>제품이 없습니다</p>`);
            }
        });
        $('#searchBar .cart').on('click',function(){
            $('#cart').css('bottom','0');
            $('#modal').show();
        }); 
        $('#modal').on('click',function(){
            $('#cart').css('bottom','-100%');
            $('#modal').hide();
        }); 
    }else {
        $('#partMenu>.partMenu>li').on('click', function(){
            $('#partMenu>.partMenu>li').removeClass('partSelect');
            $(this).addClass('partSelect');
            //getData = [];
            //$('#classification li').removeClass('liSelect');
            $text = $(this).children('span').text();
            //console.log($text);
            $('#partsList .partsList *').remove();
            switch($text){
                case 'CPU': cpuMake(); break;
                case 'GPU': gpuMake(); break;
                default : $('#partsList .partsList').append(`<p>제품이 없습니다</p>`);
            }
        });
    }
    $(document).on('click','#classification li', function(){
        if($(this).hasClass('liSelect')){
            $(this).removeClass('liSelect');
            /*for(let i = 0; i < getData.length; i++) {
                if (getData[i] == $(this).text()) { //누른 버튼과 일치하는 텍스트 찾기
                    getData.splice(i, 1); //일치하는 텍스트 삭제
                    i--; //배열 인덱스넘버 재정렬
                }
            }*/
        }else {
            $(this).addClass('liSelect');
            //getData[getData.length] = $(this).text();
        }
    });
    cpuMake();
    $(document).on('click','.highBtn', function(){
        let par = $(this).parent();
        price = Number(par.attr('data-price'));
        totalPrice += price;
        $('.totalPrice').text(totalPrice.toLocaleString());
        let copy = par.clone();
        copy.append(`
            <img src="images/xBtn.png" class="xBtn" alt="취소">
        `);
        $('#partMenu .partSelect, #cart .cartList').append(copy);
        cartCount++;
        counting();
    });
    $(document).on('click','.xBtn', function(){
        let par = $(this).parent();
        price = par.attr('data-price');
        totalPrice -= price;
        $('.totalPrice').text((Number(totalPrice)).toLocaleString());
        par.remove();
        cartCount--;
        counting();
    });
    let cartCounting = $(`<div class="redBall">0</div>`);
    $('#searchBar>form').append(cartCounting);
    function counting(){
        if(cartCount>0) {
            $('.redBall').text(cartCount);
            $('.redBall').show();
        }
        else $('.redBall').hide();
    }
});
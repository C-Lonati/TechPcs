$(function(){
    let yMinus = 80;
    let $winWidth = $(window).width();
    let $lastScrollY = 0;
    $(window).on('scroll', function(){
        let scrollY = window.scrollY;
        let scrollDown = scrollY < $lastScrollY;
        if(scrollY<500){
            $('#compareCpu').css('top', window.scrollY + 'px');
        }else if (scrollDown && scrollY) {
            $('#compareCpu').css('top', window.scrollY + 'px');
        } else {
            $('#compareCpu').css('top', (window.scrollY-yMinus) + 'px');
        }
        $lastScrollY = scrollY;
    });
    if ($winWidth > 1199) {
        yMinus = 60;
        $(window).on('scroll', function () {
            $('#compareIndex').css('top', (window.scrollY + 80) + 'px');
        });
    }
    let highCpu = new Array;
    highCpu = [3416, 23094, 102.4, 241011, 170];
    let cpu1 = [3333,17500,89.6,240603,65];
    let cpu2 = [2971,18105,83.2,230103,120];
    let compareCpu1 = new Array, compareCpu2 = new Array;
    for(let i=0;i<highCpu.length;i++){
        compareCpu1[i] = compareCpu1[i]/highCpu[i];
        compareCpu2[i] = compareCpu2[i]/highCpu[i];
    }
    let myChart = new Chart($('#chartScore'), {
    type: 'radar',
    data: {
        labels: ['싱글코어', '멀티코어', '메모리 대역폭', '출시날짜', 'TDP'],
        datasets: [
        {
            label: '9700x',
            data: [3333,17500,89.6,240603,65],
            fill : false,
        },
        {
            label: '7900x3D',
            data: [2971,18105,83.2,230103,120],
            fill : false,
        }
        ]
    },
    options: {
        scales: {
            r: {
                grid: {
                    display: true,
                },
                ticks:{ 
                    display: false,
                },
                suggestedMin : 10,
                suggestedMax : 20,
            },
        },
        plugins:{
        },
    },
    });
});
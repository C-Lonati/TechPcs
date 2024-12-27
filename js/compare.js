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
    highCpu = [3416, 23094, 102.4, 50101, 60];
    let cpu1 = [3333,17500,89.6,40603,65];
    let cpu2 = [2971,18105,83.2,30103,120];
    let compareCpu1 = new Array, compareCpu2 = new Array;
    for(let i=0;i<highCpu.length-1;i++){
        compareCpu1[i] = cpu1[i]/highCpu[i];
        compareCpu2[i] = cpu2[i]/highCpu[i];
    }
    compareCpu1[highCpu.length-1] = highCpu[highCpu.length-1]/cpu1[highCpu.length-1];
    compareCpu2[highCpu.length-1] = highCpu[highCpu.length-1]/cpu2[highCpu.length-1];
    let myChart = new Chart($('#chartScore'), {
    type: 'radar',
    data: {
        labels: ['싱글코어', '멀티코어', '메모리 대역폭', '출시날짜', 'TDP'],
        datasets: [
        {
            label: '9700x',
            data: [ compareCpu1[0] , compareCpu1[1], compareCpu1[2], compareCpu1[3], compareCpu1[4],],
            fill : false,
            value: ['3333', '17500', '89.6 GB/s', '2024-06-03 ', '65 W',],
        },
        {
            label: '7900x3D',
            data: [ compareCpu2[0], compareCpu2[1], compareCpu2[2], compareCpu2[3], compareCpu2[4],],
            fill : false,
            value: ['2971', '18105', '83.2 GB/s', '2023-01-04 ', '120 W',],
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
                min : 0,
                max : 1,
            },
        },
        plugins:{
            tooltip: {
                enabled: false
            }
        },
    },
    });
});
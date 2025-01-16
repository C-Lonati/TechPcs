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
    cpuTop = new Object();
    cpuTop.singleScore = 3444;
    cpuTop.multiScore = 24020;
    cpuTop.cine2024SingleScore = 150;
    cpuTop.cine2024MultiScore = 2557;


    cpu9700x = new Object();
    cpu9700x.name = '9700x';
    cpu9700x.singleScore = 3333;
    cpu9700x.multiScore = 17500;
    cpu9700x.memoryC = 89.6;
    cpu9700x.date = 40603;
    cpu9700x.tdp = 65;
    cpu9700x.cine2024SingleScore = 133;
    cpu9700x.cine2024MultiScore = 1115;
    
    cpu7900x3d = new Object();
    cpu7900x3d.name = '7900x3D';
    cpu7900x3d.singleScore = 2971;
    cpu7900x3d.multiScore = 18105;
    cpu7900x3d.memoryC = 83.2;
    cpu7900x3d.date = 30103;
    cpu7900x3d.tdp = 120;
    cpu7900x3d.cine2024SingleScore = 122;
    cpu7900x3d.cine2024MultiScore = 1596;

    let highCpu = [3416, 23094, 102.4, 41230, 60];
    let cpu1 = [cpu9700x.singleScore,cpu9700x.multiScore,cpu9700x.memoryC,cpu9700x.date,cpu9700x.tdp];
    let cpu2 = [cpu7900x3d.singleScore,cpu7900x3d.multiScore,cpu7900x3d.memoryC,cpu7900x3d.date,cpu7900x3d.tdp];
    let compareCpu1 = new Array, compareCpu2 = new Array;
    for(let i=0;i<highCpu.length-2;i++){
        if(cpu1[i]>cpu2[i]){
            compareCpu2[i] = cpu2[i]/cpu1[i];
            compareCpu1[i] = 1;
        }else {
            compareCpu1[i] = cpu1[i]/cpu2[i];
            compareCpu2[i] = 1;
        }
    }
    compareCpu1[highCpu.length-2] = cpu1[highCpu.length-2]/highCpu[highCpu.length-2];
    compareCpu2[highCpu.length-2] = cpu2[highCpu.length-2]/highCpu[highCpu.length-2];
    if(cpu1[highCpu.length-1]>cpu2[highCpu.length-1]){
        compareCpu1[highCpu.length-1] = cpu2[highCpu.length-1]/cpu1[highCpu.length-1];
        compareCpu2[highCpu.length-1] = 1;
    }else{
        compareCpu2[highCpu.length-1] = cpu1[highCpu.length-1]/cpu2[highCpu.length-1];
        compareCpu1[highCpu.length-1] = 1;
    }
    let myChart = new Chart($('#chartScore'), {
    type: 'radar',
    data: {
        labels: ['싱글코어', '멀티코어', '메모리 대역폭', '출시날짜', 'TDP'],
        datasets: [
        {
            label: '9700x',
            data: [ compareCpu1[0] , compareCpu1[1], compareCpu1[2], compareCpu1[3], compareCpu1[4],],
            fill : false,
            //nested: {value: ['3333', '17500', '89.6 GB/s', '2024-06-03 ', '65 W',]},
        },
        {
            label: '7900x3D',
            data: [ compareCpu2[0], compareCpu2[1], compareCpu2[2], compareCpu2[3], compareCpu2[4],],
            fill : false,
            //nested: {value: ['2971', '18105', '83.2 GB/s', '2023-01-04 ', '120 W',]},
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
                pointLabels: {
                  font: {
                    size: 14
                  }
                }
            },
        },
        plugins:{
            tooltip: {
                enabled: false
            },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14
                    }
                }
            }
        },
    },
    });
    function tofix(a, b){
        let re = (Number(a/b*100)).toFixed(2) + "%" ;
        return re;
    }

    $('.cine2024single .first .scoreNum').text(cpuTop.cine2024SingleScore);
    $('.cine2024single .second .scoreNum').text(cpu9700x.cine2024SingleScore);
    $('.cine2024single .second .chartBar').width(tofix(cpu9700x.cine2024SingleScore, cpuTop.cine2024SingleScore));
    $('.cine2024single .third .scoreNum').text(cpu7900x3d.cine2024SingleScore);
    $('.cine2024single .third .chartBar').width(tofix(cpu7900x3d.cine2024SingleScore, cpuTop.cine2024SingleScore));
    $('.cine2024single').on('mouseover', function(){
        $('.cine2024single .first .scoreNum').text('100%');
        $('.cine2024single .second .scoreNum').text(tofix(cpu9700x.cine2024SingleScore, cpuTop.cine2024SingleScore));
        $('.cine2024single .third .scoreNum').text(tofix(cpu7900x3d.cine2024SingleScore, cpuTop.cine2024SingleScore));
    });
    $('.cine2024single').on('mouseleave', function(){
        $('.cine2024single .first .scoreNum').text(cpuTop.cine2024SingleScore);
        $('.cine2024single .second .scoreNum').text(cpu9700x.cine2024SingleScore);
        $('.cine2024single .third .scoreNum').text(cpu7900x3d.cine2024SingleScore);
    });

    $('.cine2024multi .first .scoreNum').text(cpuTop.cine2024MultiScore);
    $('.cine2024multi .second .scoreNum').text(cpu9700x.cine2024MultiScore);
    $('.cine2024multi .second .chartBar').width(tofix(cpu9700x.cine2024MultiScore, cpuTop.cine2024MultiScore));
    $('.cine2024multi .third .scoreNum').text(cpu7900x3d.cine2024MultiScore);
    $('.cine2024multi .third .chartBar').width(tofix(cpu7900x3d.cine2024MultiScore, cpuTop.cine2024MultiScore));
    $('.cine2024multi').on('mouseover', function(){
        $('.cine2024multi .first .scoreNum').text('100%');
        $('.cine2024multi .second .scoreNum').text(tofix(cpu9700x.cine2024MultiScore, cpuTop.cine2024MultiScore));
        $('.cine2024multi .third .scoreNum').text(tofix(cpu7900x3d.cine2024MultiScore, cpuTop.cine2024MultiScore));
    });
    $('.cine2024multi').on('mouseleave', function(){
        $('.cine2024multi .first .scoreNum').text(cpuTop.cine2024MultiScore);
        $('.cine2024multi .second .scoreNum').text(cpu9700x.cine2024MultiScore);
        $('.cine2024multi .third .scoreNum').text(cpu7900x3d.cine2024MultiScore);
    });

    



    $('.geek6single .first .scoreNum').text(cpuTop.singleScore);
    $('.geek6single .second .scoreNum').text(cpu9700x.singleScore);
    $('.geek6single .second .chartBar').width(tofix(cpu9700x.singleScore, cpuTop.singleScore));
    $('.geek6single .third .scoreNum').text(cpu7900x3d.singleScore);
    $('.geek6single .third .chartBar').width(tofix(cpu7900x3d.singleScore, cpuTop.singleScore));
    $('.geek6single').on('mouseover', function(){
        $('.geek6single .first .scoreNum').text('100%');
        $('.geek6single .second .scoreNum').text(tofix(cpu9700x.singleScore, cpuTop.singleScore));
        $('.geek6single .third .scoreNum').text(tofix(cpu7900x3d.singleScore, cpuTop.singleScore));
    });
    $('.geek6single').on('mouseleave', function(){
        $('.geek6single .first .scoreNum').text(cpuTop.singleScore);
        $('.geek6single .second .scoreNum').text(cpu9700x.singleScore);
        $('.geek6single .third .scoreNum').text(cpu7900x3d.singleScore);
    });

    $('.geek6multi .first .scoreNum').text(cpuTop.multiScore);
    $('.geek6multi .second .scoreNum').text(cpu9700x.multiScore);
    $('.geek6multi .second .chartBar').width(tofix(cpu9700x.multiScore, cpuTop.multiScore));
    $('.geek6multi .third .scoreNum').text(cpu7900x3d.multiScore);
    $('.geek6multi .third .chartBar').width(tofix(cpu7900x3d.multiScore, cpuTop.multiScore));
    $('.geek6multi').on('mouseover', function(){
        $('.geek6multi .first .scoreNum').text('100%');
        $('.geek6multi .second .scoreNum').text(tofix(cpu9700x.multiScore, cpuTop.multiScore));
        $('.geek6multi .third .scoreNum').text(tofix(cpu7900x3d.multiScore, cpuTop.multiScore));
    });
    $('.geek6multi').on('mouseleave', function(){
        $('.geek6multi .first .scoreNum').text(cpuTop.multiScore);
        $('.geek6multi .second .scoreNum').text(cpu9700x.multiScore);
        $('.geek6multi .third .scoreNum').text(cpu7900x3d.multiScore);
    });

});
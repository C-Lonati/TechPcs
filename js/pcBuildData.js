var cpu = [], gpu = [];
function Cpu(partsName, specs, price, company, core = 1, process = '11nm', img, distinguished) {
    this.partsName = partsName;
    this.specs = specs;
    this.price = price;
    this.company = company;
    this.core = core;
    this.process = process;
    this.img = img;
    this.distinguished = distinguished;
}
cpu[0] = new Cpu('AMD 라이젠7-6세대 9800X3D (그래니트 릿지)', 'AMD(소켓AM5) / 6세대(Zen5) / TSMC 4nm / 8코어 / 16스레드 / 기본 클럭:4.7GHz / 최대 클럭:5.2GHz / L2 캐시:8MB / L3 캐시:96MB / TDP:120W / PCIe5.0 / 메모리 규격:DDR5 / 5600MHz / 내장그래픽: 탑재 / AMD 라데온 그래픽 / 기술 지원:SMT(하이퍼스레딩);AMD Ryzen Master;AMD 3D V캐시 / 쿨러:미포함 / 시네벤치R23(싱글):2073 / 시네벤치R23(멀티):23334', 973000, 'Amd', 8, '4nm', 'images/cpu1.jpg', 'cpu9800X3D');
cpu[1] = new Cpu('인텔 코어 울트라9 시리즈2 285K (애로우레이크)', '인텔(소켓1851)/TSMC 3nm/P8+E16코어/24스레드/기본 클럭: 3.7GHz/최대 클럭: 5.7GHz/L2 캐시: 40MB/L3 캐시: 36MB/PBP-MTP: 125-250W/PCIe5.0, 4.0/메모리 규격: DDR5/6400MHz/내장그래픽: 탑재/인텔 그래픽스(Xe LPG)/기술 지원: 인텔 XTU, 인텔 딥러닝부스트/쿨러: 미포함/시네벤치R23(싱글): 2320/시네벤치R23(멀티): 41558', 920060, 'Intel', 20, '3nm', 'images/cpu2.jpg', 'cpu285K');
cpu[2] = new Cpu('AMD 라이젠9-6세대 9950X (그래니트 릿지)', 'AMD(소켓AM5)/6세대(Zen5)/4nm/16코어/32스레드/기본 클럭: 4.3GHz/최대 클럭: 5.7GHz/L2 캐시: 16MB/L3 캐시: 64MB/TDP: 170W/PPT: 230W/PCIe5.0/메모리 규격: DDR5/5600MHz/내장그래픽: 탑재/AMD 라데온 그래픽/기술 지원: SMT(하이퍼스레딩), AMD Ryzen Master/쿨러: 미포함/시네벤치R23(싱글): 2309/시네벤치R23(멀티): 42045', 1085090, 'Amd', 16, '4nm', 'images/cpu3.jpg', 'cpu9950X');
cpu[3] = new Cpu('AMD 라이젠5-6세대 9600X (그래니트 릿지)', 'AMD(소켓AM5)/6세대(Zen5)/4nm/6코어/12스레드/기본 클럭: 3.9GHz/최대 클럭: 5.4GHz/L2 캐시: 6MB/L3 캐시: 32MB/TDP: 65W/PPT: 88W/PCIe5.0/메모리 규격: DDR5/5600MHz/내장그래픽: 탑재/AMD 라데온 그래픽/기술 지원: SMT(하이퍼스레딩)/쿨러: Wraith Stealth 포함/시네벤치R23(싱글): 2223/시네벤치R23(멀티): 16998', 347690, 'Amd', 6, '4nm', 'images/cpu4.jpg', 'cpu9600X');
cpu[4] = new Cpu('인텔 코어i5-14세대 14600K (랩터레이크 리프레시)', '인텔(소켓1700)/10nm(인텔7)/P6+E8코어/12+8스레드/기본 클럭: 3.5GHz/최대 클럭: 5.3GHz/L2 캐시: 20MB/L3 캐시: 24MB/PBP-MTP: 125-181W/PCIe5.0, 4.0/메모리 규격: DDR5, DDR4/5600, 3200MHz/내장그래픽: 탑재/인텔 UHD 770/기술 지원: SMT(하이퍼스레딩), 인텔 XTU, 인텔 퀵싱크, 인텔 딥러닝부스트/쿨러: 미포함/시네벤치R23(싱글): 2069/시네벤치R23(멀티): 25159', 323580, 'Intel', 14, '10nm', 'images/cpu5.jpg', 'cpu14600K');
cpu[5] = new Cpu('인텔 코어i9-14세대 14900K (랩터레이크 리프레시)', '인텔(소켓1700)/10nm(인텔7)/P8+E16코어/16+16스레드/기본 클럭: 3.2GHz/최대 클럭: 6.0GHz/L2 캐시: 32MB/L3 캐시: 36MB/PBP-MTP: 125-253W/PCIe5.0, 4.0/메모리 규격: DDR5, DDR4/5600, 3200MHz/내장그래픽: 탑재/인텔 UHD 770/기술 지원: SMT(하이퍼스레딩), 인텔 XTU, 인텔 퀵싱크, 인텔 딥러닝부스트/쿨러: 미포함/시네벤치R23(싱글): 2277/시네벤치R23(멀티): 40146', 657600, 'Intel', 24, '10nm', 'images/cpu6.jpg', 'cpu14900K');
cpu[6] = new Cpu('AMD 라이젠7-5세대 7800X3D (라파엘)', 'AMD(소켓AM5)/5세대(Zen4)/5nm/8코어/16스레드/기본 클럭: 4.2GHz/최대 클럭: 5.0GHz/L2 캐시: 8MB/L3 캐시: 96MB/TDP: 120W/PPT: 162W/PCIe5.0/메모리 규격: DDR5/5200MHz/내장그래픽: 탑재/AMD 라데온 그래픽/기술 지원: SMT(하이퍼스레딩), AMD Ryzen Master, AMD 3D V캐시/쿨러: 미포함/시네벤치R23(싱글): 1788/시네벤치R23(멀티): 18208', 619720, 'Amd', 8, '5nm', 'images/cpu7.jpg', 'cpu7800X3D');
cpu[7] = new Cpu('AMD 라이젠5-4세대 5600 (버미어)', 'AMD(소켓AM4)/4세대(Zen3)/7nm/6코어/12스레드/기본 클럭: 3.5GHz/최대 클럭: 4.4GHz/L2 캐시: 3MB/L3 캐시: 32MB/TDP: 65W/PCIe4.0/메모리 규격: DDR4/3200MHz/내장그래픽: 미탑재/기술 지원: SMT(하이퍼스레딩), StoreMI, AMD Ryzen Master, VR Ready 프리미엄/쿨러: Wraith Stealth 포함/시네벤치R23(싱글): 1460/시네벤치R23(멀티): 10906', 122800, 'Amd', 6, '7nm', 'images/cpu8.jpg', 'cpu5600');
cpu[8] = new Cpu('인텔 코어i7-14세대 14700K (랩터레이크 리프레시)', '인텔(소켓1700)/10nm(인텔7)/P8+E12코어/16+12스레드/기본 클럭: 3.4GHz/최대 클럭: 5.6GHz/L2 캐시: 28MB/L3 캐시: 33MB/PBP-MTP: 125-253W/PCIe5.0, 4.0/메모리 규격: DDR5, DDR4/5600, 3200MHz/내장그래픽: 탑재/인텔 UHD 770/기술 지원: SMT(하이퍼스레딩), 인텔 XTU, 인텔 퀵싱크, 인텔 딥러닝부스트/쿨러: 미포함/시네벤치R23(싱글): 2069/시네벤치R23(멀티): 34818', 529790, 'Intel', 20, '10nm', 'images/cpu9.jpg', 'cpu14700K');




function Gpu(partsName, specs, price, company, process = '10nm', img,
    distinguished) {
    this.partsName = partsName;
    this.specs = specs;
    this.price = price;
    this.company = company;
    this.process = process;
    this.img = img;
    this.distinguished = distinguished;
}
gpu[0] = new Gpu('이엠텍 지포스 RTX 4060 Ti STORM X Dual OC D6 8GB', 'RTX 4060 Ti/4nm/베이스클럭: 2310MHz/부스트클럭: 2685MHz/스트림 프로세서: 4352개/PCIe4.0x16(at x8)/GDDR6(DDR6)/출력단자: HDMI2.1, DP1.4/지원정보: 8K 지원, 4K 지원, HDR 지원, HDCP 2.3/사용전력: 160W/정격파워 650W 이상/전원 포트: 8핀 x1/2팬/가로(길이): 249.9mm/두께: 40.1mm/제로팬(0-dB기술)/백플레이트/DrMOS/LED 라이트/ThunderMaster/A/S 3년', 648990, 'Nvidia', '4nm', 'images/gpu1.jpg', 'RTX4060Ti');
gpu[1] = new Gpu('이엠텍 지포스 RTX 4060 STORM X Dual OC D6 8GB', 'RTX 4060/4nm/베이스클럭: 1830MHz/부스트클럭: 2670MHz/스트림 프로세서: 3072개/PCIe4.0x16(at x8)/GDDR6(DDR6)/출력단자: HDMI2.1, DP1.4/지원정보: 8K 지원, 4K 지원, HDR 지원, HDCP 2.3/사용전력: 115W/정격파워 600W 이상/전원 포트: 8핀 x1/2팬/가로(길이): 249.9mm/두께: 40.2mm/제로팬(0-dB기술)/백플레이트/LED 라이트/A/S 3년', 461830, 'Nvidia', '4nm', 'images/gpu2.jpg', 'RTX4060');
gpu[2] = new Gpu('ASUS DUAL 라데온 RX 7600 O8G V2 OC D6 8GB', 'RX 7600/부스트클럭: 2695MHz/스트림 프로세서: 2048개/PCIe4.0x16(at x8)/GDDR6(DDR6)/출력단자: HDMI2.1, DP1.4/지원정보: 8K 지원, 4K 지원, HDR 지원, HDCP 2.3/정격파워 550W 이상/전원 포트: 8핀 x1/2팬/가로(길이): 205mm/두께: 49mm/제로팬(0-dB기술)/백플레이트/A/S 3년', 361600, 'Amd', '6nm', 'images/gpu3.jpg', 'RX7600');
gpu[3] = new Gpu('MSI 지포스 RTX 4070 SUPER 게이밍 X 슬림 D6X 12GB 트라이프로져3', 'RTX 4070 SUPER/4nm/베이스클럭: 1980MHz/부스트클럭: 2640MHz/OC클럭: 2655MHz/스트림 프로세서: 7168개/PCIe4.0x16/GDDR6X(DDR6X)/출력단자: HDMI2.1, DP1.4/지원정보: 8K 지원, 4K 지원, HDR 지원, HDCP 2.3/사용전력: 245W/정격파워 650W 이상/전원 포트: 16핀(12VHPWR) x1/3팬/가로(길이): 307mm/두께: 46mm/제로팬(0-dB기술)/백플레이트/DrMOS/LED 라이트/MYSTIC LIGHT/구성품: VGA지지대, 2x8핀 to 16핀 커넥터', 1049000, 'Nvidia', '4nm', 'images/gpu4.jpg', 'RTX4070SUPER');
gpu[4] = new Gpu('MSI 지포스 RTX 4070 Ti SUPER 벤투스 3X 블랙 OC D6X 16GB', 'RTX 4070 Ti SUPER/4nm/베이스클럭: 2340MHz/부스트클럭: 2640MHz/OC클럭: 2655MHz/스트림 프로세서: 8448개/PCIe4.0x16/GDDR6X(DDR6X)/출력단자: HDMI2.1, DP1.4/지원정보: 8K 지원, 4K 지원, HDR 지원, HDCP 2.3/사용전력: 295W/정격파워 700W 이상/전원 포트: 16핀(12VHPWR) x1/3팬/가로(길이): 322mm/두께: 62mm/제로팬(0-dB기술)/백플레이트/DrMOS/구성품: Anti-Sag브라켓, 2x8핀 to 16핀 커넥터', 1268490, 'Nvidia', '4nm', 'images/gpu5.jpg', 'RTX4070TiSUPER');
gpu[5] = new Gpu('GIGABYTE 지포스 RTX 4070 WINDFORCE OC V2 D6 12GB 제이씨현', 'RTX 4070/부스트클럭: 2490MHz/스트림 프로세서: 5888개/PCIe4.0x16/GDDR6(DDR6)/출력단자: HDMI2.1, DP1.4/지원정보: 8K 지원, 4K 지원/정격파워 650W 이상/전원 포트: 8핀 x1/3팬/가로(길이): 261mm/두께: 50mm/제로팬(0-dB기술)/백플레이트/A/S 3년', 878000, 'Nvidia', '4nm', 'images/gpu6.jpg', 'RTX 4070');
gpu[6] = new Gpu('액슬 라데온 RX 580 2048SP D5 8GB R2 에즈윈', 'RX 580 2048SP/베이스클럭: 1244MHz/부스트클럭: 1244MHz/스트림 프로세서: 2048개/PCIe3.0x16/GDDR5(DDR5)/출력단자: HDMI, DP/정격파워 500W 이상/전원 포트: 8핀 x1/2팬/가로(길이): 213mm/두께: 49mm/제로팬(0-dB기술)/백플레이트/A/S 3년/24년 11월부로 팬커버 디자인 변경', 129590, 'Amd', '14nm', 'images/gpu7.jpg', 'RX5802048SP');
gpu[7] = new Gpu('ASRock 라데온 RX 6600 CHALLENGER D D6 8GB 대원씨티에스', 'RX 6600/7nm/베이스클럭: 1626MHz/부스트클럭: 2491MHz/스트림 프로세서: 1792개/PCIe4.0/GDDR6(DDR6)/출력단자: HDMI2.1, DP1.4/지원정보: 8K 지원, 4K 지원, HDR 지원, HDCP 2.3/정격파워 500W 이상/전원 포트: 8핀 x1/2팬/가로(길이): 269mm/두께: 41mm/제로팬(0-dB기술)/백플레이트/DrMOS/A/S 3년/인피니티 캐시: 32MB/RDNA2', 279810, 'Amd', '7nm', 'images/gpu8.jpg', 'RX6600');
gpu[8] = new Gpu('인텔 Arc B580 D6 12GB 피씨디렉트', 'B580/TSMC 5nm/부스트클럭: 2670MHz/PCIe4.0x16(at x8)/GDDR6(DDR6)/출력단자: HDMI2.1, DP2.1/지원정보: 8K 지원, 4K 지원/사용전력: 190W/정격파워 600W 이상/전원 포트: 8핀 x1/가로(길이): 272mm/Xe코어: 20개, XMX엔진 160개', 424000, 'Intel', '5nm', 'images/gpu9.jpg', 'ArcB580');